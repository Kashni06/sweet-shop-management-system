const Sweet = require("../models/Sweet");

/**
 * CREATE SWEET
 * POST /api/sweets
 * Protected
 */
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

/**
 * LIST ALL SWEETS
 * GET /api/sweets
 * Protected
 */
const getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    return res.status(200).json(sweets);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch sweets" });
  }
};

/**
 * SEARCH SWEETS
 * GET /api/sweets/search
 * Protected
 * Supports:
 *  - name
 *  - category
 *  - minPrice / maxPrice
 */
const searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    const query = {};

    if (name) {
      query.name = new RegExp(name, "i"); // case-insensitive
    }

    if (category) {
      query.category = category;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const sweets = await Sweet.find(query);
    return res.status(200).json(sweets);
  } catch (error) {
    return res.status(500).json({ message: "Failed to search sweets" });
  }
};

/**
 * UPDATE SWEET
 * PUT /api/sweets/:id
 * Protected
 */
const updateSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;
    const updates = req.body;

    const updatedSweet = await Sweet.findByIdAndUpdate(sweetId, updates, {
      new: true,
    });

    if (!updatedSweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    return res.status(200).json(updatedSweet);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update sweet" });
  }
};

/**
 * DELETE SWEET (ADMIN ONLY)
 * DELETE /api/sweets/:id
 */
const deleteSweet = async (req, res) => {
  try {
    const sweetId = req.params.id;

    const deletedSweet = await Sweet.findByIdAndDelete(sweetId);

    if (!deletedSweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    return res.status(200).json({ message: "Sweet deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete sweet" });
  }
};

module.exports = {
  createSweet,
  getAllSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
};
