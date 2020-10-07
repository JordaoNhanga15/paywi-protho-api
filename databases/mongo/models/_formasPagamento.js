const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    //_id: Schema.Types.ObjectId,
    codigoFormaPagamento: { type: String },
    descricao: { type: String, required: true },
    criadoPor: { type: Schema.Types.ObjectId, ref: 'users' },
    modificadoPor: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model('formasPagamento', schema);

module.exports = model;
