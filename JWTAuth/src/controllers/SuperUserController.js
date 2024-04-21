const query = require('../../database/queries')

const SUlogin = (req,res)=>{
    res.status(200).send('super user logged in')
}

const createCase = (req,res)=>{
    var colValues = Object.keys(req.body).map(function (key) {
        return req.body[key];
      });
    const q = query.insertRecord('cases',req.body);
    pool.query(q,colValues,(err)=>{
        if(err) throw err;
        res.status(200).send('case created.');
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
    pool.query(q,colValues,(err)=>{
        if(err) throw err;
        res.status(200).send('case is closed');
    })
}

const updateCaseUser = (req,res)=>{
    update_time = query.currentDate()
    updated_data = {
        ...req.body,
        'updated_at':'"' + update_time + '"'
    }
    const q = query.updateController('cases',updated_data,req.params.id)
    var colValues = Object.keys(updated_data).map(function (key) {
        return updated_data[key];
      });
    pool.query(q,colValues,(err)=>{
        if(err) throw err;
        res.status(200).send('case user is changed successfully');
    })
}

const caseReopen = (req,res)=>{
    open_time = query.currentDate()
    updated_data = {
        'closed':false,
        'closed_at':''
    }
    const q = query.updateController('cases',updated_data,req.params.id)
    var colValues = Object.keys(updated_data).map(function (key) {
        return updated_data[key];
      });
    pool.query(q,colValues,(err)=>{
        if(err) throw err;
        res.status(200).send('case is reopened');
    })
}

const userAuthorize = (req,res)=>{//remove redundent code
    update_time = query.currentDate()
    updated_data = {
        "enabled":false
    }
    const q = query.updateController('cases',updated_data,req.params.id)
    var colValues = Object.keys(updated_data).map(function (key) {
        return updated_data[key];
      });
    pool.query(q,colValues,(err)=>{
        if(err) throw err;
        res.status(200).send('case user is now disabled.');
    })
}

const summary = (req,res)=>{

}

module.exports={
    SUlogin,
    createCase,
    closeCase,
    updateCaseUser,
    caseReopen,
    userAuthorize,
    summary
}