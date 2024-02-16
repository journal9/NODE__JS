var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getEmp', function(req, res, next) {
  res.send('get employee by id');
});

router.get('/allEmps', function(req, res, next) {
  res.send('get all employees');
});

router.post('/cretEmp', function(req, res, next) {
  res.send('create employee');
});

router.patch('/updEmp', function(req, res, next) {
  res.send('update employee');
});

router.delete('/delEmp', function(req, res, next) {
  res.send('delete employee');
});

module.exports = router;
