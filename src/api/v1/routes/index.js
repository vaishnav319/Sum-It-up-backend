const express = require("express");
const router = express.Router();

const ContactRoute = require("./contact/contact.route.js");
const VideoRoute = require("./summary/summary.route.js");

router.use("/video", VideoRoute);
router.use("/contact", ContactRoute);

module.exports = router;
