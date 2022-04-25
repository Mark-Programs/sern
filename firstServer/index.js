// this is an example of an HTTP Server using NodeJS

const http = require("http");

const hostname = "localhost";
const port = 3000;

// use the http module to create the server
// createServer takes one argument: callback function allowing to specify options for the server
const server = http.createServer((req, res) => {
  const { url } = req; // set 'url' to req.url
  console.log(url); // shows everything typed after "localhost:3000"

  if (url === "/translations") {
    const translations = { 1: "one", 2: "two", 3: "three" };
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(translations)); // pass a stringed version of the translations object
    res.end();
  } else {
    res.end("Welcome to Node");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server started at ${hostname}:${port}`);
});
