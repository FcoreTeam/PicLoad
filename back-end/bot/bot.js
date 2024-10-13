import { Telegraf } from 'telegraf'
import dotenv from 'dotenv'
import { addUser } from './utils/adduser.js'

dotenv.config()

const token = process.env.TOKEN || null
export const bot = new Telegraf(token)

bot.start(async (ctx) => {
    await addUser(ctx)
})

bot.command('link', async (ctx) => {
    const url = `https://t.me/${ctx.botInfo.username}?start=${ctx.from.id}`
    await ctx.reply(`Ссылка для рефералов: ${url}`);
})
