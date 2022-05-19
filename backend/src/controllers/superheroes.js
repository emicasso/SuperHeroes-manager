const {
  mongo: { superheroesModel },
} = require("../../databases");

module.exports = {
  //listar todas los superheroes existentes
  getAll: async (req, res) => {
    const superheroes = await habilidadesModel.find();
    res.send(superheroes);
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
    res.send(`SuperHero ${name} saved`);
  },


  //actualizar un superheroe
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const { name, planetaOrigen, salud, nivel} = req.body;
    await habilidadesModel.findByIdAndUpdate(_id, {
      $set: { name, planetaOrigen, salud, nivel },
    },
    { useFindAndModify: false}
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
};
