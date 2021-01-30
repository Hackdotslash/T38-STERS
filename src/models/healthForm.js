const mongoose = require("mongoose");

const HealthForm = new mongoose.Schema({
  feels: {
    type: String,
  },
  description: {
    type: String,
  },
  recentlySeek: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Place", HealthForm);
