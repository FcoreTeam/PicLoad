import { Markup } from 'telegraf'
import { client } from '../../config/database.js';

export async function addUser(ctx) {
    let url = process.env.NGROK || null
    if (url === null) {
        await ctx.reply('Что-то пошло не так')
        return
    }
    const total_url = url + ctx.from.id
    let query = `SELECT * FROM users WHERE tg_id = ${ctx.from.id}`;
    let info = await client.query(query);
    if (info.rows.length <= 0) {
        let query = `INSERT INTO users (tg_id, username, first_name) VALUES (${ctx.from.id}, '${ctx.from.username}', '${ctx.from.first_name}')`;
        if (ctx.payload !== '') {
            query = `INSERT INTO users (tg_id, username, first_name, from_ref_id) VALUES (${ctx.from.id}, '${ctx.from.username}', '${ctx.from.first_name}', ${ctx.payload || null})`;
        }
        await client.query(query);
        await bot.telegram.getUserProfilePhotos(ctx.from.id).then(async (data) => {
            if (data.photos.length == 0) return;
            await bot.telegram.getFileLink(data.photos[0][0].file_id).then(async (data) => {
                client.query(`UPDATE users SET avatar_url = '${data.href}' WHERE tg_id = ${ctx.from.id}`);
            });
        })
        info = await client.query('SELECT * FROM category');
        await info.rows.forEach(async (row) => {
            await client.query(`INSERT INTO cat_of_user (user_tg_id, category_id) VALUES (${ctx.from.id}, ${row['id']})`)
        })
        await ctx.reply('Привет, ' + ctx.from.username,
            await Markup.keyboard([
                await Markup.button.webApp('Let\'s go', total_url),
            ], ).resize());
    } else {
        await ctx.reply('Привет, ' + ctx.from.username + '. Еще раз!', 
            await Markup.keyboard([
                await Markup.button.webApp('Let\'s go', total_url),
            ], ).resize());
    }
};
