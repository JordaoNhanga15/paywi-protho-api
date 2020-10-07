const Joi = require('@hapi/joi');

const schema = Joi.object({
  codigoFormaPagamento: Joi.string(),
  descricao: Joi.string().required(),
});

module.exports = schema;
