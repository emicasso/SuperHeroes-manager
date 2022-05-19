const express = require("express");
const router = express.Router();
const misionesMSUSchema = require("../schemas/misionesMSU")
const validate = require("../middlewares/validateData")

const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/misionesMSU");

router.get("/", getAll);
router.post("/", validate(misionesMSUSchema), createOne);
router.put("/:_id", validate(misionesMSUSchema), updateOne);
router.delete("/:_id", deleteOne);

module.exports = router;
