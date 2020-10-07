const {
  mongo: { _dadosCartaoModel },
} = require('../../databases');
module.exports = {
  getAll: async (req, res) => {
    const _dadosCartao = await _dadosCartaoModel.find();
    return res.json({
      codigo: 10,
      msg: 'Success!',
      dados: _dadosCartao,
    });
  },
  createOne: async (req, res) => {
    const new_dadosCartao = new _dadosCartaoModel(req.body);

    await new_dadosCartao.save();

    return res.json({
      codigo: 10,
      msg: 'Success!',
    });
  },
  updateOne: async (req, res) => {
    const { _id } = req.params;

    const returnValue = await _dadosCartaoModel.findByIdAndUpdate(
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

    const returnValue = await _dadosCartaoModel.findByIdAndDelete(_id);
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
