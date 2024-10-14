import { client } from '../config/database.js';
import { errorLogStream } from '../app.js';
import coupon from 'coupon-code';
import { bot } from '../bot/bot.js';

// GET query

export const updateUser = async (ctx) => {
    await bot.telegram.getChat(ctx.from.id).then(async (data) => {
        await client.query(`UPDATE users SET username = $1, first_name = $2 WHERE tg_id = $3`, [data.username, data.first_name, data.id]);
    })
    await console.log('updated user: '+ctx.from.id)
}


export const getUserInfo = async (req, res) => {
    // GET
    try {
        await updateUser({ from: { id: req.query.tg_id } });
        var info = await client.query(`SELECT * FROM users WHERE tg_id = $1`, [req.query.tg_id]);
        res.json(info.rows);
    } catch (err) {
        console.log(err);
        errorLogStream.write(`Error while fetching user info: ${err.message}\n`);
        res.json({error: 'Error while fetching user info'})
    }
};

export const getCatOfUser = async (req, res) => {
    // GET
    var info = await client.query('SELECT * FROM cat_of_user WHERE user_tg_id = $1', [req.query.user_tg_id]);
    info.then((data)=>{
        res.json(data.rows);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while fetching category of users info: ${err.message}\n`);
        res.json({error: 'Error while fetching category of users info'})
    })
}

export const getCategory = async (req, res) => {
    // GET
    var info = await client.query('SELECT * FROM category WHERE id = $1', [req.query.id]);
    info.then((data)=>{
        res.json(data.rows);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while fetching categories: ${err.message}\n`);
        res.json({error: 'Error while fetching categories'})
    })
}

// POST query

export const addPromo = async (req, res) => {
    // POST create new promo
    try {
        const couponCode = coupon.generate({ parts: 3 });
        await client.query(`INSERT INTO promo (code, discount) VALUES ($1, $2)`, [couponCode, req.body.discount]);
        res.json({status: 'Promocode was added', code: couponCode, discount: req.body.discount});
    } catch (err) {
        console.log(err);
        errorLogStream.write(`Error while adding promo: ${err.message}\n`);
        res.json({error: 'Error while adding promo'})
    }
}

export const addCatOfUsers = async (req, res) => {
    // POST
    var info = await client.query('INSERT INTO cat_of_user (user_tg_id, category_id, quantity) VALUES ($1, $2, $3)', [req.body.user_tg_id, req.body.category_id, req.body.quantity]);
    info.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while adding category of users: ${err.message}\n`);
        res.json({error: 'Error while adding category of users'})
    });
}

export const addCategory = async (req, res) => {
    // POST
    var info = await client.query('INSERT INTO category (title) VALUES ($1)', [req.body.title]);
    info.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while adding category: ${err.message}\n`);
        res.json({error: 'Error while adding category'})
    });
}

export const updateCatOfUsers = async (req, res) => {
    // PUT
    var info = await client.query('UPDATE cat_of_users SET quantity = $1 WHERE user_id = $2 AND category_id = $3', [req.body.quantity, req.body.user_id, req.body.category_id]);
    info.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while updating category of users: ${err.message}\n`);
        res.json({error: 'Error while updating category of users'})
    });
}

