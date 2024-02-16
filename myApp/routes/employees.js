var express = require('express');
const Employee = require('../schemas/employeeSchema');
var router = express.Router();

/* GET employee by id */
router.get('/getEmp/:id', async function(req, res, next) {
  try{
    const id = req.params.id
    const employee = await Employee.findById(id);
    res.send(employee)
  }
  catch(error){
    console.error(error)
    res.status(404).send({"message":"employee not found"})
  }
});

/* GET employees listing. */
router.get('/allEmps', async function(req, res, next) {
  try{
    const employees = await Employee.find({});
    res.send(employees)
  }
  catch(error){
    console.error(error)
    res.status(500).send({"message":"could not fetch employees"})
  }
});

/* CREATE employee. */
router.post('/cretEmp', async function(req, res, next) {
  const {name,email,password,experience} = req.body;
  try{
    const emp = new Employee({name,email,experience,password});
    console.log(name)
    await emp.save();
    res.status(200).send({"message":"employee created","employee id":emp.id});
  }
  catch(error){
    console.error(error);
    res.status(404).send({"message":"employee not created"})
  }
});

/* UPDATE employee by id */
router.patch('/updEmp/:id', async function(req, res, next) {
  const id = req.params.id;
  const experience = req.body.experience;
  try{
    const employee = await Employee.findByIdAndUpdate(id, { experience }, { new: true });
    res.send(employee)
  }
  catch(error){
    console.error(error)
    res.status(404).send(error)
  }
});

/* DELETE employee by id */
router.delete('/delEmp/:id', async function(req, res, next) {
  const id = req.params.id;
  try{
    const employee = await Employee.findByIdAndDelete(id);
    res.send(employee)
  }
  catch(error){
    console.error(error)
    res.status(404).send(error)
  }
});

module.exports = router;
