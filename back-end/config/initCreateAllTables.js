import { createUser, createCategory, createCatOfUser } from '../config/sqlquery.js';

export function initCreateAllTables(client) {
    client.query(createUser);
    client.query(createCategory);
    client.query(createCatOfUser);
}