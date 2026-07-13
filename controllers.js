const MoodLog = require("./models");

exports.addMood = async (req, res) => {
  try {
    const mood = await MoodLog.create(req.body);
    res.status(201).json(mood);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getMoods = async (req, res) => {
  try {
    const moods = await MoodLog.find().sort({
      date: -1,
    });

    res.json(moods);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateMood = async (req, res) => {
  try {
    const mood = await MoodLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(mood);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteMood = async (req, res) => {
  try {
    await MoodLog.findByIdAndDelete(req.params.id);

    res.json({
      message: "Mood Deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};