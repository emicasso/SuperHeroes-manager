const express = require("express");
const router = express.Router();
const {
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require("../components/misiones");

router.get("/", getAll);
router.post("/", createOne);
router.put("/", updateOne);
router.delete("/", deleteOne);

module.exports = router;