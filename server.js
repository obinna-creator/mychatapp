const express = require ("express");
const http = require("http")
const io = require("socket.io");
const port = 4040;
const app = express();

const server = http.createServer(app);
const socket = io(server)


app.set("view engine","ejs");

app.get("/", (req, res) => {
    res.render("homepage")
});

socket.on("connection", (socket) => {
   
    socket.on("message", (data) => {
        socket.broadcast.emit("message",data)
    })
    console.log(socket.id)
});

server.listen(port, () => {
    console.log(`server is listening to : ${port}`)
});


