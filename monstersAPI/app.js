const express = require("express");
const monsters = require("./routes/monsters");
const app = express();

app.use("/monsters", monsters);
// ^^^ this is called via /monsters.  So going to 'monsters.js', and calling it there, you will have to follow /monsters/monsters/#
// This is because you are telling it twice to go to monsters, so it stacks the routes

// have the data called when calling localhost:3000/monsters

// error handler (middleware) = MUST BE PLACED AFTER APP.GET
// uses ERR (error), req, res, and next: which handles sending data around in the middlware
app.use((err, req, res, next) => {
  res.json(err); // displays on the screen
});

module.exports = app;
