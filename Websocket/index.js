const path = require('path')
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const static_path = path.join(__dirname,'static')
port = 3002

app.get('/',(req,res)=>{
    res.sendFile(`${static_path}/chat.html`);
    console.log("hello")
})

io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.id);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
  });

app.get('/css',(req,res)=>{
    res.sendFile(`${static_path}/style.css`);
})

server.listen(port,()=>{
    console.log(`listening to port ${port} ${Date.now()}`)
})