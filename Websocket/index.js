const express = require("express")
const http = require('http')
const path = require('path')
const app = express()

const static_path = path.join(__dirname,'static')

const Server = http.createServer(app)
port = 3002

app.get('/',(req,res)=>{
    res.sendFile(`${static_path}/chat.html`);
    console.log("hello")
})

app.get('/css',(req,res)=>{
    res.sendFile(`${static_path}/style.css`);
})

Server.listen(port,()=>{
    console.log(`listening to port ${port} ${Date.now()}`)
})