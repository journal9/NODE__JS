const db = require("./db");

const Query = {
  test: () => "Test Success, GraphQL server is up & running !!",
  students: () => db.students.list(),
  studentById:(root,args)=> db.students.get(id=args.id)
};
module.exports = { Query };
