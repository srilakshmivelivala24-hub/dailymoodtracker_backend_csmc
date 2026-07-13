const router = require("express").Router();

const {
  addMood,
  getMoods,
  updateMood,
  deleteMood,
} = require("./controllers");

router.post("/", addMood);
router.get("/", getMoods);
router.put("/:id", updateMood);
router.delete("/:id", deleteMood);

module.exports = router;