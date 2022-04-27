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
// use destructuring to pass the data into the const above, and use that data in the block below
const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
});

module.exports = pool;
