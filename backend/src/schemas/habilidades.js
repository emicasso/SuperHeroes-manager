const Joi = require("@hapi/joi");

const schema = new Joi.object({
  name: Joi.string().required(),
  superheroes: Joi.string(),
});

module.exports = schema;
