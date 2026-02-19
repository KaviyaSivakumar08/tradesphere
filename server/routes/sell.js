const express = require("express");
const router = express.Router();
const crops = require("../data/crops");

router.post("/sell", (req, res) => {
  const { farmerName, cropName, quantity, pricePerKg } = req.body;

  const newCrop = {
    id: crops.length + 1,
    farmerName,
    cropName,
    quantity,
    pricePerKg
  };

  crops.push(newCrop);

  res.json({
    message: "Crop added for sale successfully 🌾",
    crop: newCrop
  });
});

module.exports = router;
