const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  //busca el _id en la coleccion superheroes
  // superheroes: [{ type: Schema.Types.ObjectId, ref: "superheroes", autopopulate: true }],
});

schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model("habilidades", schema);

module.exports = model;
