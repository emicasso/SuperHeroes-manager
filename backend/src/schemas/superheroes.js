const Joi = require("@hapi/joi");

const schema = new Joi.object({
  name: Joi.string().required(),
  planetaOrigen: Joi.string().required(),
  salud: Joi.string().required(),
  nivel: Joi.string().required(),
});

module.exports = schema;
