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
})

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        socket.broadcast.emit('activity', `${socket.id.substring(0,5)} has left the chat`);
    });
    socket.on('new connection', (msg) => {
        socket.broadcast.emit('activity', `${msg} has joined the chat`);
    });
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
    socket.on('typing', (msg) => {
        console.log(msg)
        socket.broadcast.emit('typing-activity', `${msg} is typing...`);
    });

  });

app.get('/css',(req,res)=>{
    res.sendFile(`${static_path}/style.css`);
})
app.get('/emojicss',(req,res)=>{
    res.sendFile(`${static_path}/emojionearea.min.css`);
})
app.get('/emojijs',(req,res)=>{
    res.sendFile(`${static_path}/emojionearea.min.js`);
})

server.listen(port,()=>{
    console.log(`listening to port ${port} ${Date.now()}`)
})