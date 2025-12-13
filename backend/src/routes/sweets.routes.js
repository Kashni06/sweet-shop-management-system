const express = require("express");
const router = express.Router();
const {
  createSweet,
  getAllSweets,
  searchSweets,
} = require("../controllers/sweets.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createSweet);
router.get("/", authMiddleware, getAllSweets);

// ✅ SEARCH
router.get("/search", authMiddleware, searchSweets);

module.exports = router;
