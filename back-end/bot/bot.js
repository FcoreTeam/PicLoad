import { Telegraf } from 'telegraf'
import { Markup } from 'telegraf'
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.TOKEN || null
const bot = new Telegraf(token)

bot.start(async (ctx) => {
    ctx.reply(
        'Привет!\n',
        Markup.keyboard([
            Markup.button.webApp('Let\'s go', 'https://d025-176-208-138-3.ngrok-free.app'),
        ], ).oneTime()
    );
})

bot.command('link', async (ctx) => {
    const url = `https://t.me/${ctx.botInfo.username}?start=${ctx.from.id}`
    await ctx.reply(`Ссылка для рефералов: ${url}`);
})

bot.launch();