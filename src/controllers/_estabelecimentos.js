const {
  mongo: { _estabelecimentosModel },
} = require('../../databases');
module.exports = {
  getAll: async (req, res) => {
    const _estabelecimentos = await _estabelecimentosModel.find();
    return res.json({
      codigo: 10,
      msg: 'Success!',
      dados: _estabelecimentos,
    });
  },
  createOne: async (req, res) => {
    const new_estabelecimentos = new _estabelecimentosModel(req.body);

    await new_estabelecimentos.save();

    return res.json({
      codigo: 10,
      msg: 'Success!',
    });
  },
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const returnValue = await _estabelecimentosModel.findByIdAndUpdate(
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

    const returnValue = await _estabelecimentosModel.findByIdAndDelete(_id);
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
