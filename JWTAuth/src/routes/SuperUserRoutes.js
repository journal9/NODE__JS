const express = require("express");
const router = express.Router();
const SuperUser = require("../controllers/SuperUserController.js");

router
  .post("/login", (req, res) => {
    SuperUser.SUlogin(req, res);
  })
  .post("/case", (req, res) => {
    SuperUser.createCase(req, res);
  })
  .delete("/case/delete/:id", (req, res) => {
    SuperUser.deleteCase(req, res);
  })
  .patch("/user/permission", (req, res) => {
    SuperUser.userAuthorize(req, res);
  })
  .delete("/user/remove", (req, res) => {
    SuperUser.removeUser(req, res);
  });

module.exports = router