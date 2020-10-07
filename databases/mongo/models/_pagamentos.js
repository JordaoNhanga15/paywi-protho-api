const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    //_id: Schema.Types.ObjectId,
    codigoPagamento: { type: String },
    qtd: { type: Number, required: true },
    total: { type: Number, required: true },
    numeroTransacao: { type: Number },
    statusTrasacao: { type: Number },
    multiploCartao: { type: Boolean },
    formaPagamento: {
      type: Schema.Types.ObjectId,
      ref: 'formasPagamento',
      autopopulate: true,
    },
    dadosCartao: [
      { type: Schema.Types.ObjectId, ref: 'dadosCartao', autopopulate: true },
    ],
    estabelecimento: {
      type: Schema.Types.ObjectId,
      ref: 'estabelecimentos',
      autopopulate: true,
    },
    criadoPor: { type: Schema.Types.ObjectId, ref: 'users' },
    modificadoPor: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
  }
);
schema.plugin(require('mongoose-autopopulate'));
const model = mongoose.model('pagamentos', schema);

module.exports = model;
