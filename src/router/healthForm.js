const express = require("express");
const router = express.Router();
const HealthForm = require("../models/healthForm");

router.post("/", async (req, res) => {
  const { feels, description, recentlySeek } = req.body;
  try {
    const data = new HealthForm({
      feels,
      description,
      recentlySeek,
    });
    await data.save();

    return res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
