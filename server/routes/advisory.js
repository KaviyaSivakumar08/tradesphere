const express = require("express");
const router = express.Router();

router.post("/advisory", (req, res) => {
  const { soil, season } = req.body;

  let crop = "";
  let water = "";
  let fertilizer = "";

  if (soil === "black" && season === "kharif") {
    crop = "Cotton";
    water = "High";
    fertilizer = "Nitrogen rich";
  } else if (soil === "red" && season === "rabi") {
    crop = "Groundnut";
    water = "Medium";
    fertilizer = "Phosphorus rich";
  } else {
    crop = "Rice";
    water = "High";
    fertilizer = "Organic compost";
  }

  res.json({
    recommendedCrop: crop,
    waterRequirement: water,
    fertilizer: fertilizer,
  });
});

module.exports = router;
