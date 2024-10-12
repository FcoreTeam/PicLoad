import { client } from '../config/database.js';
import { errorLogStream } from '../app.js';

client.connect().then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
})

// GET query

export const getUserInfo = async (req, res) => {
    // GET
    var info = client.query('SELECT * FROM users WHERE tg_id = $1', [req.query.tg_id]);
    info.then((data)=>{
        res.json(data.rows[0]).status(200);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error fetching user info: ${err.message}\n`);
        res.json({error: 'Error while fetching user info'}).status(500);
    })
};

export const getCatOfUser = async (req, res) => {
    // GET
    var info = client.query('SELECT * FROM cat_of_user WHERE user_tg_id = $1', [req.query.user_tg_id]);
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
    var info = client.query('SELECT * FROM category WHERE id = $1', [req.query.id]);
    info.then((data)=>{
        res.json(data.rows);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while fetching categories: ${err.message}\n`);
        res.json({error: 'Error while fetching categories'})
    })
}

// POST query

export const addCatOfUsers = async (req, res) => {
    // POST
    var info = client.query('INSERT INTO cat_of_users (user_tg_id, category_id, quantity) VALUES ($1, $2, $3)', [req.body.user_tg_id, req.body.category_id, req.body.quantity]);
    info.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while adding category of users: ${err.message}\n`);
        res.json({error: 'Error while adding category of users'})
    });
}

export const addUser = async (req, res) => {
    // POST
    req.body.from_ref_id = req.body.from_ref_id || null
    var info = client.query('INSERT INTO users (tg_id, username, from_ref_id) VALUES ($1, $2, $3)', [req.body.tg_id, req.body.username, req.body.from_ref_id]);
    info.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while adding user: ${err.message}\n`);
        res.json({error: 'Error while adding user'})
    });
}

export const addCategory = async (req, res) => {
    // POST
    var info = client.query('INSERT INTO category (title) VALUES ($1)', [req.body.title]);
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
    var info = client.query('UPDATE cat_of_users SET quantity = $1 WHERE user_id = $2 AND category_id = $3', [req.body.quantity, req.body.user_id, req.body.category_id]);
    info.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        errorLogStream.write(`Error while updating category of users: ${err.message}\n`);
        res.json({error: 'Error while updating category of users'})
    });
}