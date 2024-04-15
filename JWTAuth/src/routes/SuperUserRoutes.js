const express = require("express");
const router = express.Router();
const SuperUser = require("../controllers/SuperUserController.js");

router
  .use("/login", (req, res) => {
    SuperUser.login(req, res);
  })
  .use("/case", (req, res) => {
    SuperUser.createCase(req, res);
  })
  .use("/case/delete/:id", (req, res) => {
    SuperUser.deleteCase(req, res);
  })
  .use("/user/permission", (req, res) => {
    SuperUser.userAuthorize(req, res);
  })
  .use("/user/remove", (req, res) => {
    SuperUser.removeUser(req, res);
  });

module.exports = router