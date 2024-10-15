import { client } from '../config/database.js';
import { errorLogStream } from '../app.js';
import { bot } from '../bot/bot.js';

// GET query

export const updateUser = async (ctx) => {
    await bot.telegram.getChat(ctx.from.id).then(async (data) => {
        await client.query('UPDATE users SET username=$1, first_name=$2 WHERE tg_id = $3', [data.username, data.first_name, ctx.from.id]);
    })
    await console.log('updated user: '+ctx.from.id)
}
export const getUserInfo = async (req, res) => {
    // GET
    try {
        await updateUser({ from: { id: req.query.id } });
        var info = await client.query(`SELECT * FROM users WHERE tg_id = ${req.query.id}`);
        await res.json(info.rows);
    } catch (err) {
        await console.log(err);
        await errorLogStream.write(`Error while fetching user info: ${err.message}\n`);
        await res.json({error: 'Error while fetching user info'})
    }
};

export const getCatOfUser = async (req, res) => {
    // GET
    try {
        var info = await client.query(`SELECT c.title, cu.quantity
FROM category c
JOIN cat_of_user cu ON c.id = cu.category_id
WHERE cu.user_tg_id = ${req.query.tg_id};`);
        await res.json(info.rows);
    } catch (err) {await 
        await console.log(err);
    }
}

export const memberStatus = async (req, res) => {
    // GET
    const chatId = req.query.chat_id; // ID of the channel
    const tgId = req.query.tg_id; // ID of the user to check

    try {
        const member = await bot.telegram.getChatMember(chatId, tgId);
        await res.json(member);
    } catch (err) {
        await console.log(err);
        await errorLogStream.write(`Error while fetching categories: ${err.message}\n`);
        await res.json({error: 'Error while fetching categories'})
    }
}

export const updateCatOfUsers = async (req, res) => {
    // PUT
    try {
        var info = await client.query(`UPDATE cat_of_user SET quantity = ${req.body.quantity} WHERE user_tg_id = ${req.body.user_tg_id} AND category_id = ${req.body.category_id}`);
        if(info.rowCount == 0) {
            await res.json({failure: "Не обновилось. Такой категории не существует!"});
        } else {
            await res.json({success: true});
        }
    } catch (err) {
        await console.log(err);
        await errorLogStream.write(`Error while updating categories: ${err.message}\n`);
        await res.json({error: 'Error while updating categories'})
    }
}

export const updateTimeIncoming = async (req, res) => {
    // PUT
    var info = await client.query(`SELECT last_income_updated FROM users WHERE tg_id = ${req.body.tg_id}`);
    try {
        const today = new Date();
        const lastIncomeUpdated = new Date(info.rows[0].last_income_updated);
        const diffTime = await Math.abs(today - lastIncomeUpdated);
        const diffDays = await Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

        if (diffDays >= 7) {
            await client.query(`UPDATE users SET incoming = 0 WHERE tg_id = ${req.body.tg_id}`);
            await client.query(`UPDATE users SET last_income_updated = ${today} WHERE tg_id = ${req.body.tg_id}`);
            await res.json({success: true});
        } else {
            await res.json({success: false});
        }
    } catch(err) {
        await console.log(err);
        await errorLogStream.write(`Error while fetching last income updated: ${err.message}\n`);
        await res.json({error: 'Error while fetching last income updated'})
    }
}
export const updateIncome = async (req, res) => {
    // PUT
    var info = await client.query(`UPDATE users SET income = income + ${req.body.income} WHERE tg_id = ${req.body.tg_id}`);
    try {
        await res.json(info);
    } catch(err) {
        await console.log(err);
        await errorLogStream.write(`Error while updating income: ${err.message}\n`);
        await res.json({error: 'Error while updating income'})
    };
}

export const enterPromocode = async (req, res) => {
    // PUT
    var info = await client.query('SELECT discount from promo WHERE code = $1', [req.body.code]);
    try {
        if (info.rows.length === 0) {
            await res.json({success: false, error: 'Promocode not found'});
            return;
        }
        const dis = info.rows[0]['discount'];
        await client.query(`UPDATE users SET balance = balance + ${dis} WHERE tg_id = ${req.body.tg_id}`);
        req.body.income = dis;
        await fetch('http://localhost:3000/api/updateincome', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: await JSON.stringify({income: dis, tg_id: req.body.tg_id})
        })
        await fetch('http://localhost:3000/api/updatetimeincoming', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: await JSON.stringify({tg_id: req.body.tg_id})
        })
        await client.query('DELETE FROM promo WHERE code = $1', [req.body.code]);
        await res.json({'success': true});
    } catch (err) {
        await console.log(err);
        await errorLogStream.write(`Error while fetching user info: ${err.message}\n`);
        await res.json({error: err.message});
    }
}