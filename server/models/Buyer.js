const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema({
  username: String,
  crop: String,
  quantity: Number,
  price: Number
});

module.exports = mongoose.model("Buyer", buyerSchema);