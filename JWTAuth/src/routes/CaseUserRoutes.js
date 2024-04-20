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
  .get("/case/find/:id", (req, res) => {
    CaseUser.viewCase(req, res);
  })
  .patch("/case/close/:id", (req, res) => {
    CaseUser.closeCase(req, res);
  })
  .post("/logout", (req, res) => {
    CaseUser.CUlogout(req, res);
  });


module.exports = router
