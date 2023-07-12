const Pool = require("pg").Pool;

const pool = new Pool({
  host: "snuffleupagus.db.elephantsql.com",
  port: 5432,
  user: "vkimmray",
  password: "6fptqxrR3c-CMKe-b6B0H90RLrSZhDAm",
  database: "vkimmray",
});

module.exports = pool;
