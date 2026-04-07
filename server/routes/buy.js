const express = require("express");
const router = express.Router();
const Buyer = require("../models/Buyer");

// Add Buyer Order
router.post("/buy", async (req, res) => {
  try {
    const newOrder = new Buyer(req.body);
    await newOrder.save();
    res.json({ message: "Order saved successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get All Buyer Orders
router.get("/buy", async (req, res) => {
  try {
    const orders = await Buyer.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;