const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    //_id: Schema.Types.ObjectId,
    codigoEstabelecimento: { type: String, required: true },
    nomeEstabelecimento: { type: String, required: true },
    site: { type: String },
    iban: { type: String },
    titular: { type: String },
    criadoPor: { type: Schema.Types.ObjectId, ref: 'users' },
    modificadoPor: { type: Schema.Types.ObjectId, ref: 'users' },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model('estabelecimentos', schema);

module.exports = model;
