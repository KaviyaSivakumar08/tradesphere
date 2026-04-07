const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  cropName: {
    type: String,
    required: true
  },
  farmerName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);