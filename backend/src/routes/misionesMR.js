const express = require("express");
const router = express.Router();
const misionesMRSchema = require("../schemas/misionesMR")
const validate = require("../middlewares/validateData")

const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/misionesMSU");

router.get("/", getAll);
router.post("/", validate(misionesMRSchema), createOne);
router.put("/:_id", validate(misionesMRSchema), updateOne);
router.delete("/:_id", deleteOne);

module.exports = router;
