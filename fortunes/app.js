const express = require("express");

const app = express(); // express application object
const fortunes = require("./data/fortunes"); // call the JSON obj
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// in package.json, in scripts, there is the DEV start.
// instead of typing "nodemon index.js", this allows you to simply type "npm run dev".

// req res = request(sent from user) response
app.get("/fortunes", (req, res) => {
  res.json(fortunes);
});

// generate random fortune
app.get("/fortunes/random", (req, res) => {
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

// return the object based on nested route parameter
app.get("/fortunes/:id", (req, res) => {
  // console.log(req.params); // returns: { id: '1'}
  res.json(fortunes.find((f) => f.id == req.params.id));
});

app.post("/fortunes", (req, res) => {
  console.log(req);
});

//module.exports => expose the app as a module itself, so others stuff can call it
module.exports = app;
