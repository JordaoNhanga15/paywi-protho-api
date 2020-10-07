const faker = require('faker');
const { _formasPagamentoModel } = require('../');
module.exports = async () => {
  for (let index = 0; index < 3; index++) {
    const newFormasPagamento = new _formasPagamentoModel({
      codigoFormaPagamento: faker.random.uuid(),
      descricao: faker.name.prefix(),
    });

    await newFormasPagamento.save();
  }
};
