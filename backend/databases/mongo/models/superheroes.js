const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  planetaOrigen: { type: String, required: true },
  salud: { type: String, required: true },
  nivel: { type: Number, required: true }
});

const model = mongoose.model('superheroes', schema);

module.exports = model;
