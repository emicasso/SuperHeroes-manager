const express = require("express");
const router = express.Router();
const misionesMSUSchema = require("../schemas/misionesMSU")
const validate = require("../middlewares/validateData")

const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  // assignSuperhero,
  // removeSuperhero,
} = require("../controllers/misionesMSU");

router.get("/", getAll);
router.post("/", validate(misionesMSUSchema), createOne);
router.put("/:_id", validate(misionesMSUSchema), updateOne);
// router.put("/assignSuperhero/:_id", assignSuperhero);
// router.put("/removeSuperhero/:_id", removeSuperhero);
router.delete("/:_id", deleteOne);

module.exports = router;
