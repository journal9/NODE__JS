const db = require("./db");

const Query = {
  test: () => "Test Success, GraphQL server is up & running !!",
  students: () => db.students.list(),
  studentById: (root, args) => db.students.get((id = args.id)),
};

const Student = {
  fullName: (root) => root.firstName + " " + root.lastName,
  //   college: (root) => db.colleges.get(root.collegeId),
};

const Mutation = {
  createStudent: (root, args, context, info) => {
    console.log(args);
    return db.students.create({
      collegeId: args.collegeId,
      firstName: args.firstName,
      lastName: args.lastName,
    });
  },
};

module.exports = { Query, Student, Mutation };
