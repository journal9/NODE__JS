// const pool = require('pg').Pool

// const Pool = new pool(
//     {
//         user:"superuser",
//         host:"localhost",
//         database:"cases",
//         password:"rootuser",
//         port:5432,
//     }
// )

//module.exports = Pool;

const {Client} = require('pg');

const client = new Client(
    {
        user:"superuser",
        host:"localhost",
        database:"cases",
        password:"rootuser",
        port:5432,
    }
)

client.connect();

client.query(`select * from SuperUsers`,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
})



