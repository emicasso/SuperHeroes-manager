const express = require("express");
const router = express.Router();
const misionesSchema = require("../schemas/misiones")
const validate = require("../middlewares/validateData")

const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/misiones");

router.get("/", getAll);
router.post("/", validate(misionesSchema), createOne);
router.put("/", validate(misionesSchema), updateOne);
router.delete("/:_id", deleteOne);

module.exports = router;
