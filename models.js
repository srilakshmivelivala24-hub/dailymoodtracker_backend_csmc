const mongoose = require("mongoose");

const MoodLogSchema = new mongoose.Schema(
  {
    mood: {
      type: String,
      required: true,
      enum: [
        "Happy",
        "Sad",
        "Angry",
        "Excited",
        "Calm",
      ],
    },

    note: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MoodLog", MoodLogSchema);