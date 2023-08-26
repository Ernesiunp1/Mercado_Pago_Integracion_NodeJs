const express = require("express");
const CtrlPref = require("../controllers/preferencia.controllers");

const router = express.Router();

router.get("/generar", CtrlPref.generar);

module.exports = router;
