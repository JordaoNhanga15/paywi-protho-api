const Joi = require('@hapi/joi');

const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  nivel: Joi.number().required(),
});

module.exports = schema;
