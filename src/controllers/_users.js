const jwt = require('jsonwebtoken');
const {
  mongo: { _usersModel },
} = require('../../databases');
const {
  bcryptHelpers: { encryptPassword, comparePassword },
} = require('../../helpers');

const { jwtSecret } = require('../../config/');

module.exports = {
  getAll: async (req, res) => {
    const _users = await _usersModel.find();
    return res.json({
      codigo: 10,
      msg: 'Success!',
      dados: _users,
    });
  },
  createOne: async (req, res) => {
    const new_users = new _usersModel(req.body);

    await new_users.save();

    return res.json({
      codigo: 10,
      msg: 'Success!',
    });
  },
  updateOne: async (req, res) => {
    const { _id } = req.params;
    const returnValue = await _usersModel.findByIdAndUpdate(
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

    const returnValue = await _usersModel.findByIdAndDelete(_id);
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
