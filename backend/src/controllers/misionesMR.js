const {
  mongo: { misionesMRModel },
} = require("../../databases");

module.exports = {
  //listar todas las misiones existentes
  getAll: async (req, res) => {
    const misiones = await misionesMRModel.find();
    res.send(misiones);
  },

  //crear nueva mision
  createOne: async (req, res) => {
    const { name } = req.body;
    const newMision = new misionesMRModel({
      name,
    });
    await newMision.save();
    res.send(`${name} saved`);
  },

  //actualizar una mision
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const { name } = req.body;
    await misionesMRModel.findByIdAndUpdate(
      _id,
      {
        $set: { name },
      },
      { useFindAndModify: false }
    );
    res.send(`${name} update`);
  },

  //borrar una mision
  deleteOne: async (req, res) => {
    const { _id } = req.params;
    const remove = await misionesMRModel.findByIdAndDelete(_id);
    console.log(remove);
    res.send(`${remove.name} Deleted from database`);
  },

  //asignar un superheroe
  assignSuperhero: async (req, res) => {
    const { _id } = req.params;
    const { superheroes } = req.body;
    const misionMRUpdate = await misionesMRModel.findByIdAndUpdate(_id, {
      $push: { superheroes: superheroes },
    });
    res.send(`${misionMRUpdate.name} update`);
  },

  removeSuperhero: async (req, res) => {
    const { _id } = req.params;
    const { superheroes } = req.body;
    const misionMRUpdate = await misionesMRModel.findByIdAndUpdate(_id, {
      $pull: { superheroes: superheroes },
    });
    res.send(`${misionMRUpdate.name} update`);
  },
};
