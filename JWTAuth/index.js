const express = require('express');
const app = express();
const router  = express.Router();
const SuperuserRoutes = require('./src/routes/SuperUserRoutes')
const CaseUserRoutes = require('./src/routes/CaseUserRoutes')

const port = 3003

app.get('/home',(req,res)=>{
    console.log('hello')
    res.send('server responding!!')
})

router
    .use('/su',SuperuserRoutes)
    .use('/cu',CaseUserRoutes)
    .use('/token/get',GenTokenAuth)

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})

