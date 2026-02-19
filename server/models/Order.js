const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  buyerName: String,
  sellerName: String,
  cropName: String,
  quantity: Number,
  pricePerKg: Number,
  totalAmount: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);
