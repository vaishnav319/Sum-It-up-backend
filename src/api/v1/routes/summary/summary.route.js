const express = require("express");

const {
  uploadVideo,
  sendLink,
} = require("../../controllers/summary/summary.controller.js");
const upload = require("../../../../middleware/multer");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadVideo);
router.post("/hello", sendLink);
module.exports = router;
