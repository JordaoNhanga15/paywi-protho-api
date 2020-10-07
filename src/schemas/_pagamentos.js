const Joi = require('@hapi/joi');

const schema = Joi.object({
  codigoPagamento: Joi.string(),
  qtd: Joi.number().required(),
  total: Joi.number().required(),
  numeroTransacao: Joi.number(),
  statusTrasacao: Joi.number(),
  multiploCartao: Joi.boolean(),
  formaPagamento: Joi.string(),
  dadosCartao: Joi.array(),
  estabelecimento: Joi.string(),
});

module.exports = schema;
