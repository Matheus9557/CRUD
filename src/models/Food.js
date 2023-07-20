const { conn } = require("../db");

async function create(data) {
  const sql = `
  INSERT INTO
    foods (name, image, price, categoria)
  VALUES
    (?, ?, ?, ?)
  `;

  const db = await conn();

  const { name, image, price, categoria } = data;

  const { lastID } = await db.run(sql, [name, image, price, categoria]);

  return lastID;
}

async function readAll() {
  const sql = `
  SELECT
    *
  FROM
    foods
`;

  const db = await conn();

  const foods = await db.all(sql);

  return foods;
}

async function readByCategory(categoria) {
  const sql = `
  SELECT
    *
  FROM
    foods
  WHERE
    categoria = ?
  `;

  const db = await conn();

  const foods = await db.all(sql, [categoria]);

  return foods;
}

module.exports = { create, readAll, readByCategory };
