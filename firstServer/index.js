// this is an example of an HTTP Server using NodeJS

const http = require("http");

const hostname = "localhost";
const port = 3000;

// use the http module to create the server
// createServer takes one argument: callback function allowing to specify options for the server
const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Welcome to Node");
});

server.listen(port, hostname, () => {
  console.log(`Server started at ${hostname}:${port}`);
});
