const express = require("express");
const router = express.Router();
const crops = require("../data/crops");

// GET all crops
router.get("/crops", (req, res) => {
  res.json(crops);
});

module.exports = router;
