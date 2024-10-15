import { client } from '../../config/database.js';

export async function setPayPic(ctx) {
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
}