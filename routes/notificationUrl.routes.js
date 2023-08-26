const express = require("express");
const CtrlNotification = require("../controllers/notificationUrl.controllers");

const router = express.Router();

router.post("/noti", CtrlNotification.notificacion);

module.exports = router;
