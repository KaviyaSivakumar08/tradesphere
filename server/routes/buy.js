const express = require("express");
const router = express.Router();

const { crops } = require("../data/crops");

router.post("/buy", (req, res) => {
  const { buyerName, cropId, quantity } = req.body;

  const crop = crops.find((c) => c.id === Number(cropId));


  if (!crop) {
    return res.status(404).json({ message: "Crop not found" });
  }

  if (crop.quantity < quantity) {
    return res.status(400).json({ message: "Insufficient quantity" });
  }

  crop.quantity -= quantity;

  const totalAmount = quantity * crop.pricePerKg;

  res.json({
    message: "Purchase Successful!",
    buyerName,
    cropName: crop.cropName,
    quantity,
    totalAmount
  });
});

module.exports = router;
