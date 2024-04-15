const express = require("express");
const router = express.Router();
const CaseUser = require("../controllers/CaseUserController.js");

router
  .use("/login", (req, res) => {
    CaseUser.login(req, res);
  })
  .use("/case/:id", (req, res) => {
    CaseUser.editCase(req, res);
  })
  .use("/case/all", (req, res) => {
    CaseUser.allcases(req, res);
  })
  .use("/case/get/:id ", (req, res) => {
    CaseUser.viewCase(req, res);
  })
  .use("/logout ", (req, res) => {
    CaseUser.logout(req, res);
  });


module.exports = router
