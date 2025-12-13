const Sweet = require("../models/Sweet");

// already exists
const createSweet = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;

    const sweet = await Sweet.create({
      name,
      category,
      price,
      quantity,
    });

    return res.status(201).json(sweet);
  } catch (error) {
    return res.status(500).json({ message: "Failed to create sweet" });
  }
};

// ✅ NEW: list all sweets
const getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    return res.status(200).json(sweets);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch sweets" });
  }
};

module.exports = {
  createSweet,
  getAllSweets,
};
