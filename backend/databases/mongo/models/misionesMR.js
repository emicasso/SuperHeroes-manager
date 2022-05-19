const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  //busca el _id en la coleccion superheroes
  superheroes: [{ type: Schema.Types.ObjectId, ref: "superheroes" }],
});

const model = mongoose.model("misionesMR", schema);

module.exports = model;
