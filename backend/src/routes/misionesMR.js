const express = require("express");
const router = express.Router();
const misionesMRSchema = require("../schemas/misionesMR");
const validate = require("../middlewares/validateData");

const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  assignSuperhero,
  removeSuperhero,
} = require("../controllers/misionesMR");

router.get("/", getAll);
router.post("/", validate(misionesMRSchema), createOne);
router.put("/:_id", validate(misionesMRSchema), updateOne);
router.put("/assignSuperhero/:_id", assignSuperhero);
router.put("/removeSuperhero/:_id", removeSuperhero);
router.delete("/:_id", deleteOne);

module.exports = router;
