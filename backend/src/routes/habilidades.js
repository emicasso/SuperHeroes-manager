const express = require("express");
const router = express.Router();
const habilidadesSchema = require("../schemas/habilidades")
const validate = require("../middlewares/validateData")

const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/habilidades");

router.get("/", getAll);
router.post("/", validate(habilidadesSchema), createOne);
router.put("/", validate(habilidadesSchema), updateOne);
router.delete("/:_id", deleteOne);

module.exports = router;
