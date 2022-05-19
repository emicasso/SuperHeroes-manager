const {
  mongo: { habilidadesModel },
} = require("../../databases");

module.exports = {
  //listar todas las habilidades existentes
  getAll: async (req, res) => {
    const habilidades = await habilidadesModel.find();
    res.json(habilidades);
  },

  //crear nueva habilidad
  createOne: async (req, res) => {
    const { name, superheroes } = req.body;
    const newHabilidad = new habilidadesModel({
      name,
      superheroes,
    });
    await newHabilidad.save();
    res.send(`${name} saved`);
  },

  //actualizar una habilidad
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const { name, superheroes } = req.body;
    await habilidadesModel.findByIdAndUpdate(_id, {
      $set: { name, superheroes },
    },
    { useFindAndModify: false}
    );
    res.send(`${name} update`);
  },

  //borrar una habilidad
  deleteOne: async (req, res) => {
    const { _id } = req.params;
    const remove = await habilidadesModel.findByIdAndDelete(_id);
    console.log(remove);
    res.send(`${remove.name} Deleted from database`);
  },
};
