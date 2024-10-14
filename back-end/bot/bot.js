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

bot.command('link', async (ctx) => {
    const url = `https://t.me/${ctx.botInfo.username}?start=${ctx.from.id}`
    await ctx.reply(`Ссылка для рефералов: ${url}`)
    await updateUser(ctx)
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