const express = require('express')
const app = express()
// let index = require('./public/index.pug')
let port = 3000

app.set('view engine','pug')

const welcomeMiddleware = (req,res,next)=>{
    console.log("in welcome middleware.")
    next()
}

app.use(welcomeMiddleware)

app.get('/path',(req,res,next)=>{
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})
app.response

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})