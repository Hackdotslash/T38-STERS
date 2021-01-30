const express = require("express");
const router = express.Router();
const Camp = require("../models/camps");

router.post("/", async (req, res) => {
  try {
    const data = new Camp(req.body);
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

router.get("/", async (req, res) => {
  try {
    const data = await Camp.find({});
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Camp.findById(req.params.id);
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
