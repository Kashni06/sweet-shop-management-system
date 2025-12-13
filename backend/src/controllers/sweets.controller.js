const Sweet = require("../models/Sweet");

// CREATE SWEET
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

// LIST SWEETS
const getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    return res.status(200).json(sweets);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch sweets" });
  }
};

// SEARCH SWEETS
const searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;

    const query = {};

    if (name) query.name = new RegExp(name, "i");
    if (category) query.category = category;

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

// UPDATE SWEET
const updateSweet = async (req, res) => {
  try {
    const updatedSweet = await Sweet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedSweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    return res.status(200).json(updatedSweet);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update sweet" });
  }
};

// DELETE SWEET (ADMIN ONLY)
const deleteSweet = async (req, res) => {
  try {
    const deleted = await Sweet.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    return res.status(200).json({ message: "Sweet deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete sweet" });
  }
};

// ✅ PURCHASE SWEET
const purchaseSweet = async (req, res) => {
  try {
    const purchaseQty = Number(req.body.quantity);
    const sweet = await Sweet.findById(req.params.id);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.quantity < purchaseQty) {
      return res.status(400).json({ message: "Insufficient stock" });
    }

    sweet.quantity -= purchaseQty;
    await sweet.save();

    return res.status(200).json(sweet);
  } catch (error) {
    return res.status(500).json({ message: "Failed to purchase sweet" });
  }
};

module.exports = {
  createSweet,
  getAllSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
};
