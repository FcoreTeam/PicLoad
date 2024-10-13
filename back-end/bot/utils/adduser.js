import { Markup } from 'telegraf'
import { client } from '../../config/database.js';

export async function addUser(ctx) {
    let query = `SELECT * FROM users WHERE tg_id = ${ctx.from.id}`;
    let info = await client.query(query);
    if (info.rows.length <= 0) {
        let query = `INSERT INTO users (tg_id, username) VALUES (${ctx.from.id}, '${ctx.from.username}')`;
        if (ctx.payload !== '') {
            query = `INSERT INTO users (tg_id, username, from_ref_id) VALUES (${ctx.from.id}, '${ctx.from.username}', ${ctx.payload || null})`;
        }
        await client.query(query);
    } else {
        ctx.reply('Привет, ' + ctx.from.username + '. Еще раз!');
    }
    let url = process.env.NGROK || null
    if (url === null) {
        await ctx.reply('Что-то пошло не так')
        return
    }
    const total_url = url + ctx.from.id
    await ctx.reply(
        'Привет!\n',
        Markup.keyboard([
            Markup.button.webApp('Let\'s go', total_url),
        ], ).oneTime()
    );
};
