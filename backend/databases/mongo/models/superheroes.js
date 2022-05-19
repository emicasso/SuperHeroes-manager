const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  planetaOrigen: { type: String, required: true },
  salud: { type: String, required: true },
  nivel: { type: Number, required: true },
  habilidades: [{ type: Schema.Types.ObjectId, ref:"habilidades", autopopulate: true}],
  misionesMR: [{ type: Schema.Types.ObjectId, ref:"misionesMR", autopopulate: true}],
  misionesMSU: [{ type: Schema.Types.ObjectId, ref:"misionesMSU", autopopulate: true}]
});

schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('superheroes', schema);

module.exports = model;
