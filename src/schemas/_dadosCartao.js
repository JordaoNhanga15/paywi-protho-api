const Joi = require('@hapi/joi');

const schema = Joi.object({
  nomePortador: Joi.string(),
  numeroCartao: Joi.string().required(),
  codigoSeguranca: Joi.number().required(),
  dataValidade: Joi.string().required(),
  //formaPagamento: { type: String },
  parcelas: Joi.number().required(),
  valor: Joi.number().required(),
});

module.exports = schema;
