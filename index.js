const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/assets", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(8080);
