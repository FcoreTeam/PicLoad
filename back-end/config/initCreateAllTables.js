import { createUser, createCategory, createCatOfUser, createPromo, createDefaultCategory } from '../config/sqlquery.js';

export function initCreateAllTables(client) {
    client.query(createUser);
    client.query(createCategory);
    client.query(createCatOfUser);
    client.query(createPromo);
    client.query(createDefaultCategory).catch((err) => {});
}