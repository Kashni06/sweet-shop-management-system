const express = require("express");
const router = express.Router();
const {
  createSweet,
  getAllSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
} = require("../controllers/sweets.controller");

const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

router.post("/", authMiddleware, createSweet);
router.get("/", authMiddleware, getAllSweets);
router.get("/search", authMiddleware, searchSweets);
router.put("/:id", authMiddleware, updateSweet);

// ✅ DELETE (Admin only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteSweet);

module.exports = router;
