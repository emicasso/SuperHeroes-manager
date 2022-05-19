const express = require("express");
const router = express.Router();
const superheroesSchema = require("../schemas/superheroes")
const validate = require("../middlewares/validateData")

const {
  getAll,
  getUser,
  createOne,
  updateOne,
  deleteOne,
  assignHab,
  removeHab,

  assignMisMR,
  removeMisMR,

  assignMisMSU,
  removeMisMSU,
  
} = require("../controllers/superheroes");

router.get("/", getAll);
router.get("/getUser/:_id", getUser);
router.post("/", validate(superheroesSchema), createOne);
router.put("/:_id", validate(superheroesSchema), updateOne);
router.put("/assignHab/:_id", assignHab);
router.put("/removeHab/:_id", removeHab);

router.put("/assignMisMR/:_id", assignMisMR);
router.put("/removeMisMR/:_id", removeMisMR);

router.put("/assignMisMSU/:_id", assignMisMSU);
router.put("/removeMisMSU/:_id", removeMisMSU);
router.delete("/:_id", deleteOne);

module.exports = router;
