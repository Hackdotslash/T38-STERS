const mongoose = require("mongoose");

const CampSchema = new mongoose.Schema({
  location: {
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  title: {
    type: String,
  },
  detail: {
    type: String,
  },
  registrations: [
    {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Camp", CampSchema);
