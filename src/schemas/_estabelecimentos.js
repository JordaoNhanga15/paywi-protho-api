const Joi = require('@hapi/joi');

const schema = Joi.object({
  codigoEstabelecimento: Joi.string().required(),
  nomeEstabelecimento: Joi.string().required(),
  site: Joi.string(),
  iban: Joi.string(),
  titular: Joi.string(),
});

module.exports = schema;
