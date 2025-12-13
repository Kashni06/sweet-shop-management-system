const express = require("express");
const router = express.Router();

const {
  createSweet,
  getAllSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet,
} = require("../controllers/sweets.controller");

const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

/* ================= PUBLIC ROUTES ================= */

// ✅ Anyone can view sweets
router.get("/", getAllSweets);

// ✅ Anyone can search sweets
router.get("/search", searchSweets);

/* ================= PROTECTED ROUTES ================= */

// ➕ Add sweet (logged in)
router.post("/", authMiddleware, createSweet);

// ✏️ Update sweet (logged in)
router.put("/:id", authMiddleware, updateSweet);

// 🗑️ Delete sweet (admin only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteSweet);

// 🛒 Purchase sweet (logged in)
router.post("/:id/purchase", authMiddleware, purchaseSweet);

// 📦 Restock sweet (admin only)
router.post("/:id/restock", authMiddleware, adminMiddleware, restockSweet);

module.exports = router;
