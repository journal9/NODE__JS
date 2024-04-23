const { query } = require("express");

const getAllRecords = (table) => {
  return `SELECT * FROM ${table}`;
};

const getUsersCases = (id) => {
  return `SELECT * FROM cases where cu_id=${id}`;
};

const updateController = (table, cols, id) => {
  var query = [`UPDATE ${table} SET`];
  var set = [];
  Object.keys(cols).forEach(function (key, i) {
    set.push(key + " = ($" + (i + 1) + ")");
  });
  query.push(set.join(", "));
  query.push("WHERE id = " + id);
  query.push(";");
  return query.join(" ");
};

const findRecord = (table, id) => {
  return `SELECT * FROM ${table} WHERE id=${id}`;
};

const insertRecord = (table, data) => {
  var query = [`INSERT INTO ${table} (`];
  var cols = [];
  var values = [];
  Object.keys(data).forEach(function (key) {
    cols.push(key);
  });
  query.push(cols.join(", "));
  query.push(`) VALUES (`);
  Object.keys(data).forEach(function (key, i) {
    values.push(" $" + (i + 1) + "");
  });
  query.push(values.join(", "));
  query.push(") ;");
  return query.join(" ");
};

const currentDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  time = currentDate.toString();
  return time;
};

module.exports = {
  getAllRecords,
  getUsersCases,
  updateController,
  currentDate,
  findRecord,
  insertRecord,
};
