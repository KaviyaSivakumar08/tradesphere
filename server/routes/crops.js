const express = require("express");
const router = express.Router();   // ✅ THIS WAS MISSING
const Crop = require("../models/Crop");

// Add crop (save to MongoDB)
router.post("/add-crop", async (req, res) => {
  console.log("Received crop:", req.body);   // 👈 ADD THIS
  try {
    const newCrop = new Crop(req.body);
    await newCrop.save();
    console.log("Saved to MongoDB");         // 👈 ADD THIS
    res.json({ message: "Crop added successfully" });
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: "Error adding crop" });
  }
});

// Get all crops
router.get("/crops", async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching crops" });
  }
});

module.exports = router;   // ✅ ALSO IMPORTANT