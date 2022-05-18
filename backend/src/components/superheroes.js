const {
  mongo: { superheroesModel },
} = require("../../databases");

module.exports = {
  getAll: (req, res) => {
    res.send("working");
  },

  //crear un nuevo SuperHeroe
  createOne: async (req, res) => {
    const { name, planetaOrigen, salud, nivel } = req.body;
    const newSuperhero = new superheroesModel({
      name,
      planetaOrigen,
      salud,
      nivel
    });
    await newSuperhero.save()
    res.send("Saved");
  },
  updateOne: (req, res) => {
    res.send("working");
  },
  deleteOne: (req, res) => {
    res.send("working");
  },
};
