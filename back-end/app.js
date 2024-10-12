import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router from './routes/router.js';
// import { createUser, createCategory, createCatOfUsers } from './config/sqlquery.js'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(router)
