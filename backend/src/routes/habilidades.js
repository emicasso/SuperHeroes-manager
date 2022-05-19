const express = require("express");
const router = express.Router();
const habilidadesSchema = require("../schemas/habilidades")
const validate = require("../middlewares/validateData")

const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
  // assignSuperhero,
  // removeSuperhero
} = require("../controllers/habilidades");

router.get("/", getAll);
router.post("/", validate(habilidadesSchema), createOne);
router.put("/:_id", validate(habilidadesSchema), updateOne);
// router.put("/assignSuperhero/:_id", assignSuperhero);
// router.put("/removeSuperhero/:_id", removeSuperhero);
router.delete("/:_id", deleteOne);

module.exports = router;
