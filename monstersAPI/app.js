const express = require("express");
const pool = require("./db");
const app = express();

app.get("/monsters", (request, response) => {
  pool.query("select * from monsters order by id asc", (err, res) => {
    if (err) return console.log(err);
    response.json(res.rows);
  });
});

module.exports = app;