const {
  mongo: { superheroesModel },
} = require("../../databases");

module.exports = {
  //listar todas los superheroes existentes
  getAll: async (req, res) => {
    const superheroes = await superheroesModel.find();
    res.send(superheroes);
  },

  //crear un nuevo SuperHeroe
  createOne: async (req, res) => {
    const { name, planetaOrigen, salud, nivel } = req.body;
    const newSuperhero = new superheroesModel({
      name,
      planetaOrigen,
      salud,
      nivel,
    });
    await newSuperhero.save();
    res.send(`SuperHero ${name} saved`);
  },

  //actualizar un superheroe
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const { name, planetaOrigen, salud, nivel } = req.body;
    await superheroesModel.findByIdAndUpdate(
      _id,
      {
        $set: { name, planetaOrigen, salud, nivel },
      },
      { useFindAndModify: false }
    );
    res.send(`${name} update`);
  },

  //borrar un superheroe
  deleteOne: async (req, res) => {
    const { _id } = req.params;
    const remove = await superheroesModel.findByIdAndDelete(_id);
    console.log(remove);
    res.send(`${remove.name} Deleted from database`);
  },

  //asignar una habilidad
  assignHab: async (req, res) => {
    const { _id } = req.params;
    const { habilidades } = req.body;
    const superheroUpdate = await superheroesModel.findByIdAndUpdate(_id, {
      $push: { habilidades: habilidades },
    });
    res.send(`${superheroUpdate.name} update`);
  },

  removeHab: async (req, res) => {
    const { _id } = req.params;
    const { habilidades } = req.body;
    const superheroUpdate = await superheroesModel.findByIdAndUpdate(_id, {
      $pull: { habilidades: habilidades },
    });
    res.send(`${superheroUpdate.name} update`);
  },

  //asignar una misionMR
  assignMisMR: async (req, res) => {
    const { _id } = req.params;
    const { misionesMR } = req.body;
    const superheroUpdate = await superheroesModel.findByIdAndUpdate(_id, {
      $push: { misionesMR: misionesMR },
    });
    res.send(`${superheroUpdate.name} update`);
  },

  removeMisMR: async (req, res) => {
    const { _id } = req.params;
    const { misionesMR } = req.body;
    const superheroUpdate = await superheroesModel.findByIdAndUpdate(_id, {
      $pull: { misionesMR: misionesMR },
    });
    res.send(`${superheroUpdate.name} update`);
  },

  //asignar una misionMSU
  assignMisMSU: async (req, res) => {
    const { _id } = req.params;
    const { misionesMSU } = req.body;
    const superheroUpdate = await superheroesModel.findByIdAndUpdate(_id, {
      $push: { misionesMSU: misionesMSU },
    });
    res.send(`${superheroUpdate.name} update`);
  },

  removeMisMSU: async (req, res) => {
    const { _id } = req.params;
    const { misionesMSU } = req.body;
    const superheroUpdate = await superheroesModel.findByIdAndUpdate(_id, {
      $pull: { misionesMSU: misionesMSU },
    });
    res.send(`${superheroUpdate.name} update`);
  },
};
