const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/assets", express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("new chat", (data) => {
    io.emit("new chat", data);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(8080);
