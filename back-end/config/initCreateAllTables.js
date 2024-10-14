import { createUser, createCategory, createCatOfUser, cratePromo } from '../config/sqlquery.js';

export function initCreateAllTables(client) {
    client.query(createUser);
    client.query(createCategory);
    client.query(createCatOfUser);
    client.query(cratePromo);
}