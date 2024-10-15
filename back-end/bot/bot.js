import { Markup, Telegraf } from 'telegraf'
import dotenv from 'dotenv'
import { addUser } from './utils/adduser.js'
import { updateUser } from '../controllers/user.js'
import { client } from '../config/database.js'

dotenv.config()

const token = process.env.TOKEN || null
export const bot = new Telegraf(token)

bot.start(async (ctx) => {
    await addUser(ctx)
})

bot.command('fRub', async (ctx) => {
    const splited = await ctx.message.text.split(' ')
    var re = new RegExp("/fRub\\s[0-9]+");
    if (!re.test(ctx.message.text)) {
        await ctx.reply('Неверный формат записи (/fRub 4)')
        return
    }
    const info = await client.query('SELECT * FROM users')
    try {
        for (let i = 0; i < info.rows.length; i++) {
            let new_balance = info.rows[i]['balance']
            new_balance = await parseFloat(await new_balance.split('.')[0]+splited[1]) + await new_balance.split('.')[1]/100
            await client.query('UPDATE users SET balance = $1 WHERE tg_id = $2', [new_balance, info.rows[i]['tg_id']])
        }
        await ctx.reply('Балансы обновлены\nК каждому балансу добавили ' + splited[1])
    } catch (err) {
        await ctx.reply(err.message)
    }
})

bot.command('set', async (ctx) => {
    const splited = await ctx.message.text.split(' ')
    if (splited.length != 4) {
        await ctx.reply('Неверный формат записи (/set [rub/gb] [username/tgid] [кол-во])')
        return
    }
    if (splited[1] != 'rub' && splited[1] != 'gb') {
        await ctx.reply('Неверный формат записи (/set [rub/gb] [username/tgid] [кол-во])')
        return
    }
    let rub_gb = 'current_storage'
    if (splited[1] == 'rub') {
        rub_gb = 'balance'
    }
    const u_tg = splited[2]
    const count = await parseFloat(splited[3]).toFixed(2)
    if (isNaN(count)) {
        await ctx.reply('Неверный формат записи (/set [rub/gb] [username/tgid] [кол-во])')
        return
    }

    let info = await client.query('SELECT * FROM users WHERE username = $1', [u_tg])
    if (info.rows.length <= 0) {
        info = await client.query('SELECT * FROM users WHERE tg_id = $1', [u_tg])
        if (info.rows.length <= 0) {
            await ctx.reply('Пользователь не найден')
            return
        }
    }
    const who = info.rows[0].tg_id
    try {
        await client.query(`UPDATE users SET ${rub_gb} = $1 WHERE tg_id = $2`, [count, who])
        await ctx.reply(`Поле ${rub_gb} для @${info.rows[0]['username']} обновлено на значение ${count}`)
    } catch (err) {
        await ctx.reply(err.message)
    }
})

bot.command('setSizePic', async (ctx) => {
    let re = new RegExp(/^\/setSizePic\s\d+-\d+$/);
    if (!re.test(ctx.message.text)) {
        await ctx.reply('Неверный формат записи (/setSizePic 10-20)')
        return
    }
    const splited = await ctx.message.text.split(' ')
    const size = await splited[1].split('-').map(el => parseInt(el))
    try {
        await client.query(`UPDATE users SET size_pic = int4range(${size[0]}, ${size[1]-1}, '[]')`)
        await client.query(`ALTER TABLE users ALTER COLUMN size_pic SET DEFAULT int4range(${size[0]}, ${size[1]-1}, '[]')`)
        await ctx.reply(`Размер загружаемых файлов обновлен до ${size[0]}-${size[1]}`)
    } catch (err) {
        await ctx.reply(err.message)
    }
})

bot.command('setPayPic', async (ctx) => {
    let re = new RegExp(/^\/setPayPic\s\d+(\.\d+)?$/);
    if (!re.test(ctx.message.text)) {
        await ctx.reply('Неверный формат записи (/setPayPic 10) или (/setPayPic 10.50)')
        return
    }
    const splited = await ctx.message.text.split(' ')
    const size = await parseFloat(splited[1]).toFixed(2)
    try {
        await client.query(`UPDATE users SET pay_pic = ${size}`)
        await client.query(`ALTER TABLE users ALTER COLUMN pay_pic SET DEFAULT ${size}`)
        await ctx.reply(`Оплата за фото обновлена до ${size}`)
    } catch (err) {
        console.log(err)
        await ctx.reply(err.message)
    }
})

bot.command('RubLimit', async (ctx) => {
    let re = new RegExp(/^\/RubLimit\s\d+(\.\d+)?$/);
    if (!re.test(ctx.message.text)) {
        await ctx.reply('Неверный формат записи (/RubLimit 10) или (/RubLimit 10.50)')
        return
    }
    const splited = await ctx.message.text.split(' ')
    const size = await parseFloat(splited[1]).toFixed(2)
    try {
        await client.query(`UPDATE users SET max_balance = ${size}`)
        await client.query(`ALTER TABLE users ALTER COLUMN max_balance SET DEFAULT ${size}`)
        await ctx.reply(`Лимит в рублях обновлен до ${size}`)
    } catch (err) {
        console.log(err)
        await ctx.reply(err.message)
    }
})

bot.command('link', async (ctx) => {
    const url = `https://t.me/${ctx.botInfo.username}?start=${ctx.from.id}`
    await ctx.reply(`Ссылка для рефералов: ${url}`)
    await updateUser(ctx)
})

bot.command('setRandomError', async (ctx) => {
    let re = new RegExp(/^\/setRandomError\s\d+(\.\d+)?$/);
    if (!re.test(ctx.message.text)) {
        await ctx.reply('Неверный формат записи (/setRandomError 10) или (/setRandomError 10.50)')
        return
    }
    const splited = await ctx.message.text.split(' ')
    const size = await parseFloat(splited[1]).toFixed(2)
    if (size > 100 || size < 0) {
        await ctx.reply('Неверное значение')
        return
    }
    try {
        await client.query(`UPDATE users SET percent_error = ${size}`)
        await client.query(`ALTER TABLE users ALTER COLUMN percent_error SET DEFAULT ${size}`)
        await ctx.reply(`Рандомная ошибка обновлена до ${size}`)
    } catch (err) {
        console.log(err)
        await ctx.reply(err.message)
    }
})

bot.command('promo', async (ctx) => {
    const dis = await parseFloat(ctx.message.text.split(' ')[2]).toFixed(2)
    const code = await ctx.message.text.split(' ')[1].toLowerCase()
    const info = await client.query('SELECT * FROM promo WHERE code = $1', [code])
    if (info.rows.length > 0) {
        await ctx.reply(`Промокод ${code} уже существует`)
        await ctx.reply(`Хотите удалить промокод?`, 
            Markup.inlineKeyboard([
                Markup.button.callback('Да', JSON.stringify({action: 'delpromo', code: code})),
                Markup.button.callback('Нет', JSON.stringify({action: 'cancel'}))
            ]))
        return
    }
    await client.query('INSERT INTO promo (code, discount) VALUES ($1, $2)', [code, dis])
    await ctx.reply(`Промокод ${code} добавлен в базу данных`)
})

bot.command('delpromo', async (ctx) => {
    const code = await ctx.message.text.split(' ')[1].toLowerCase()
    const info = await client.query('SELECT * FROM promo WHERE code = $1', [code])
    if (info.rows.length <= 0) {
        await ctx.reply(`Промокод ${code} не найден в базе данных`)
        return
    }
    await client.query('DELETE FROM promo WHERE code = $1', [code])
    await ctx.reply(`Промокод ${code} удален из базы данных`)
})

bot.on('message', async (ctx) => {
    await updateUser(ctx)
})

bot.on('callback_query', async (ctx) => {
    const data = JSON.parse(ctx.callbackQuery.data);
    if (data.action.includes('delpromo')) {
        await client.query('DELETE FROM promo WHERE code = $1', [data.code])
        ctx.editMessageText('Промокод удален')
    } else {
        ctx.deleteMessage()
    }
})