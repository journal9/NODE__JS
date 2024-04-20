const express = require("express");
const pool = require("../../database/pg-database")
const query = require('../../database/queries.js')

const CUlogin = (req,res)=>{
    //password authenticate
    res.status(200).send('caseuser api called')
}
const allcases = (req,res)=>{
    // res.send("get cases api")
    pool.query(query.getUsersCases(req.query.id),(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    })
};

const updateCase = (req,res)=>{
    // update, accomplice,updated time,details,category
    update_time = query.currentDate()
    updated_data = {
        ...req.body,
        'updated_at':'"' + update_time + '"'
    }
    const q = query.updateController('cases',updated_data,req.params.id)
    var colValues = Object.keys(updated_data).map(function (key) {
        return updated_data[key];
      });
    console.log(colValues)
    console.log(q)
    pool.query(q,colValues,(err,result)=>{
        if(err) throw err;
        res.status(200).send('updated');
    })
};

const viewCase = (req,res)=>{
    pool.query(query.findRecord('cases',req.params.id),(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows[0]);
    })
}

const closeCase = (req,res)=>{
    close_time = query.currentDate()
    updated_data = {
        'closed':true,
        'closed_at':'"' + close_time + '"'
    }
    const q = query.updateController('cases',updated_data,req.params.id)
    var colValues = Object.keys(updated_data).map(function (key) {
        return updated_data[key];
      });
    pool.query(q,colValues,(err,result)=>{
        if(err) throw err;
        res.status(200).send('case is closed');
    })
}

const CUlogout = (req,res)=>{
    //logout case user
    res.status(200).send('case user logged out.')
}

module.exports={
    CUlogin,
    allcases,
    updateCase,
    viewCase,
    CUlogout,
    closeCase
}