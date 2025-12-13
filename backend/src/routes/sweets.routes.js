const express = require("express");
const router = express.Router();
const {
  createSweet,
  getAllSweets,
} = require("../controllers/sweets.controller");
const authMiddleware = require("../middleware/auth.middleware");

// POST /api/sweets
router.post("/", authMiddleware, createSweet);

// ✅ GET /api/sweets
router.get("/", authMiddleware, getAllSweets);

module.exports = router;
