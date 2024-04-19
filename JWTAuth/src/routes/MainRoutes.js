const express = require("express");
const router = express.Router();
const SuperuserRoutes = require('./SuperUserRoutes');
const CaseUserRoutes = require("./CaseUserRoutes");

router.use('/cu',CaseUserRoutes);
router.use('/su',SuperuserRoutes);

module.exports = router