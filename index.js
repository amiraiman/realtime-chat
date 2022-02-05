const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

server.listen(8080);
