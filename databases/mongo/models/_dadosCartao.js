const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    //_id: Schema.Types.ObjectId,
    nomePortador: { type: String },
    numeroCartao: { type: String, required: true },
    codigoSeguranca: { type: Number, required: true },
    dataValidade: { type: String, required: true },
    formaPagamento: { type: Schema.Types.ObjectId, ref: 'formasPagamento' },
    parcelas: { type: Number, required: true },
    valor: { type: Number, required: true },
    criadoPor: { type: Schema.Types.ObjectId, ref: 'users' },
    modificadoPor: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model('dadosCartao', schema);

module.exports = model;
