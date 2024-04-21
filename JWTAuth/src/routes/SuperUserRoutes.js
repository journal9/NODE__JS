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
  .patch("/case/close/:id", (req, res) => {
    SuperUser.closeCase(req, res);
  })
  .patch("/case/reopen/:id", (req, res) => {
    SuperUser.caseReopen(req, res);
  })
  .patch("/user/permission/:id", (req, res) => {
    SuperUser.userAuthorize(req, res);
  })
  .patch("/user/change/:id", (req, res) => {
    SuperUser.updateCaseUser(req, res);
  })
  .get("/summary",(req,res)=>{
    SuperUser.summary(req,res)
  });

module.exports = router