// host setup code for NodeJS Postgres

const { Pool } = require("pg");
const {
  user,
  host,
  database,
  password,
  port,
} = require("../secrets/db_configuration");

// similar to mongoDB in Node
const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});

pool.query("select * from monsters", (err, res) => {
  if (err) return console.log(err);
  console.log(res.rows);
});
