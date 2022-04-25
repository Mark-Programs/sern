const express = require("express");

const app = express(); // express application object
const port = 3000;
const fortunes = require("./data/fortunes"); // call the JSON obj

// in package.json, in scripts, there is the DEV start.
// instead of typing "nodemon index.js", this allows you to simply type "npm run dev".

// req res = request(sent from user) response
app.get("/fortunes", (req, res) => {
  res.json(fortunes);
});

app.listen(3000, () => console.log(`Server started on port ${port}`));
