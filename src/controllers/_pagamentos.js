const {
  mongo: { _pagamentosModel },
} = require('../../databases');
module.exports = {
  getAll: async (req, res) => {
    const _pagamentos = await _pagamentosModel.find();
    return res.json({
      codigo: 10,
      msg: 'Success!',
      dados: _pagamentos,
    });
  },
  createOne: async (req, res) => {
    const { name, teachers } = req.body;
    const new_pagamentos = new _pagamentosModel(req.body);

    await new_pagamentos.save();

    return res.json({
      codigo: 10,
      msg: 'Success!',
    });
  },
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const returnValue = await _pagamentosModel.findByIdAndUpdate(
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
  assignCartao: async (req, res) => {
    const { _id } = req.params;
    const { dadosCartao } = req.body;

    const returnValue = await _pagamentosModel.findByIdAndUpdate(
      _id,

      { $push: { dadosCartao } },

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

    const returnValue = await _pagamentosModel.findByIdAndDelete(_id);
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
