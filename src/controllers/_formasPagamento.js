const {
  mongo: { _formasPagamentoModel },
} = require('../../databases');
module.exports = {
  getAll: async (req, res) => {
    const _formasPagamento = await _formasPagamentoModel.find();
    return res.json({
      codigo: 10,
      msg: 'Success!',
      dados: _formasPagamento,
    });
  },
  createOne: async (req, res) => {
    const new_formasPagamento = new _formasPagamentoModel(req.body);

    await new_formasPagamento.save();

    return res.json({
      codigo: 10,
      msg: 'Success!',
    });
  },
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const returnValue = await _formasPagamentoModel.findByIdAndUpdate(
      _id,

      req.body,

      { useFindAndModify: false }
    );

    if (returnValue)
      return res.json({
        codigo: 10,
        msg: 'Success!',
      });
    return res.json({
      codigo: 111,
      msg: 'Not Found!',
    });
  },
  deleteOne: async (req, res) => {
    const { _id } = req.params;

    const returnValue = await _formasPagamentoModel.findByIdAndDelete(_id);
    if (returnValue)
      return res.json({
        codigo: 10,
        msg: 'Success!',
      });
    return res.json({
      codigo: 111,
      msg: 'Not Found!',
    });
  },
};
