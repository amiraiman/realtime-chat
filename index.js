const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("index.html");
});

server.listen(8080);
