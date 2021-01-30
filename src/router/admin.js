const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    return res.status(200).json({
      success: true,
    });
  }
  return res.status(401).json({
    success: false,
  });
});

module.exports = router;
