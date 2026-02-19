const express = require("express");
const router = express.Router();
const Order = require("../models/Order");


// ✅ CHECKOUT (Save Order)
router.post("/checkout", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error placing order" });
  }
});


// ✅ Buyer Order History
router.get("/buyer-orders/:name", async (req, res) => {
  const orders = await Order.find({ buyerName: req.params.name });
  res.json(orders);
});


// ✅ Seller Sales History
router.get("/seller-orders/:name", async (req, res) => {
  const orders = await Order.find({ sellerName: req.params.name });
  res.json(orders);
});

module.exports = router;
