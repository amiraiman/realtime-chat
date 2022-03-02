const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/assets", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", (socket) => {
  socket.on("outcoming message", (msg) => {
    socket.broadcast.emit("incoming message", msg);
  });
});

server.listen(port);
