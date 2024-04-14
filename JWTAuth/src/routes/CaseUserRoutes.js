const express = require("express");
const router = express.Router();
const SuperUser = require("../controllers/SuperUserController.js");

router
  .use("/login", (req, res) => {
    SuperUser.login(req, res);
  })
  .use("/case", (req, res) => {
    SuperUser.createCase(req, res);
  });
