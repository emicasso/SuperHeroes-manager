const express = require("express");
const router = express.Router();
const superheroesSchema = require("../schemas/superheroes")
const validate = require("../middlewares/validateData")

const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/superheroes");

router.get("/", getAll);
router.post("/", validate(superheroesSchema), createOne);
router.put("/", validate(superheroesSchema), updateOne);
router.delete("/:_id", deleteOne);

module.exports = router;
