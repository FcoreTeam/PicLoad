import { createUser, createCategory, createCatOfUser, createPromo, createDefaultCategory, createErrors, createDefaultErrors, createBonus } from '../config/sqlquery.js';

export function initCreateAllTables(client) {
    client.query(createUser);
    client.query(createCategory);
    client.query(createCatOfUser);
    client.query(createPromo);
    client.query(createBonus);
    client.query(createDefaultCategory).catch((err) => {});
    client.query(createErrors);
    checkErrors(client);
}

function checkErrors(client) {
    try {
        const result = client.query('SELECT * FROM errors').then((res) => {
          if (res.rows.length === 0) {
            client.query(createDefaultErrors);
          }
        })
      } catch (err) {
        console.error(err);
      }
}