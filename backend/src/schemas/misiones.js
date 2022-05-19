const Joi = require("@hapi/joi");

const schema = new Joi.object({
  type: Joi.string().required(),
  name: Joi.string().required(),
  superheroes: Joi.string(),
});

module.exports = schema;
