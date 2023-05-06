const express = require("express");
const uploadController = require("./../controllers/uploadController");

const router = express.Router();
router.post(
  "/upload",
  uploadController.uploadToServer,
  uploadController.uploadToDb
);

module.exports = router;
