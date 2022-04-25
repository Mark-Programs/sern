const express = require("express");

const app = express(); // express application object
const fortunes = require("./data/fortunes"); // call the JSON obj

// in package.json, in scripts, there is the DEV start.
// instead of typing "nodemon index.js", this allows you to simply type "npm run dev".

// req res = request(sent from user) response
app.get("/fortunes", (req, res) => {
  res.json(fortunes);
});

//module.exports => expose the app as a module itself, so others stuff can call it
module.exports = app;
