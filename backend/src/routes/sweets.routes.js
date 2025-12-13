const express = require("express");
const router = express.Router();
const { createSweet } = require("../controllers/sweets.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createSweet);

module.exports = router;
