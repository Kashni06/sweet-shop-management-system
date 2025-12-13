const Sweet = require("../models/Sweet");

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

module.exports = { createSweet };
