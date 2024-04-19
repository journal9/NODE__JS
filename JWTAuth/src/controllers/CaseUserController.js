const express = require("express");
const pool = require("../../database/pg-database")

const CUlogin = (req,res)=>{
    res.send('caseuser api called')
}
const allcases = (req,res)=>{
    // res.send("get cases api")
    pool.query('SELECT * FROM cases',(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    })
};

module.exports={
    CUlogin,
    allcases
}