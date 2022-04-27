// this makes a route instance used in express
const { Router } = require("express");
const pool = require("../db");

const router = Router();
// basically this "router" serves as a mini-express appication (in a way)
// allows the use of .get, .post, .delete, etc

router.get("/", (request, response, next) => {
  pool.query("select * from monsters order by id asc", (err, res) => {
    if (err) return next(err); // passes the err to the error handler
    // ^^ This is WHY it MUST be placed after all app.get methods
    console.log(request.params);
    response.json(res.rows);
  });
});

router.get("/:id", (request, response, next) => {
  const { id } = request.params;
  console.log(request.params);
  // in the query below, it is using the ID number to pull it from the array of objects
  pool.query("select * from monsters where id = $1", [id], (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

module.exports = router;
