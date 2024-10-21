import { createUser, createCategory, createCatOfUser, createPromo, createDefaultCategory, createErrors, createDefaultErrors } from '../config/sqlquery.js';

export function initCreateAllTables(client) {
    client.query(createUser);
    client.query(createCategory);
    client.query(createCatOfUser);
    client.query(createPromo);
    client.query(createDefaultCategory).catch((err) => {});
    client.query(createErrors);
    checkErrors(client);
}

function checkErrors(client) {
    try {
        const result = client.query('SELECT * FROM errors');
        if (result.rows.length === 0) {
            client.query(createDefaultErrors);
        }
      } catch (err) {
        console.error(err);
      }
}