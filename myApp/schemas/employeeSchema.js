const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  experience: {
    type: Number,
    required:true
  },
});

const Employee = mongoose.model('Employees', empSchema);
module.exports = Employee;
