const express = require("express");
const router = express.Router();
const CaseUser = require("../controllers/CaseUserController.js");

router
  .post("/login", (req, res) => {
    CaseUser.CUlogin(req, res);
  })
  .patch("/case/:id", (req, res) => {
    CaseUser.updateCase(req, res);
  })
  .get("/case/all", (req, res) => {
    CaseUser.allcases(req, res);
  })
  .get("/case/get/:id ", (req, res) => {
    CaseUser.viewCase(req, res);
  })
  .post("/logout ", (req, res) => {
    CaseUser.logout(req, res);
  });


module.exports = router
