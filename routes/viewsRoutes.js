const viewsController = require("../controllers/viewsController");
const express = require("express");
const multer = require("multer");

const router = express.Router();
router.get("/", viewsController.getOverview);
module.exports = router;
