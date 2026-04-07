const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  cropName: String,
  quantity: Number,
  pricePerKg: Number,
  farmerName: String
}, { timestamps: true });

module.exports = mongoose.model("Crop", cropSchema);