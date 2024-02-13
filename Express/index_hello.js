const express = require('express')
const app = express()
const port = 3000
app.use('public',express.static('static'))

//basic routes express
app.all('/homes?21',(req, res, next)=>{
    console.log("home says hi")
    next()
})

app.get('/homes?21',function(req,res){
    console.log('get method')
    res.send("get method")
})

app.get('/home/:id-:ip',function(req,res){
    let id = req.params
    res.send(id)
})

app.post('/homes?21',function(req,res){
    console.log('post method')
    res.send("post method")
})

app.get('/example',function(req,res,next){
    console.log("example1")
    next()
},(req,res)=>{
    console.log("example2") 
    res.send("hi")
})

app.listen(port,()=>{
    console.log(`server running in port ${port}`)    
})