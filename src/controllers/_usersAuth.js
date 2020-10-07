const jwt = require('jsonwebtoken');
const {
  mongo: { _usersModel },
} = require('../../databases');
const {
  bcryptHelpers: { encryptPassword, comparePassword },
} = require('../../helpers');

const { jwtSecret } = require('../../config');

module.exports = {
  signUp: async (req, res) => {
    try {
      const { username, password, nivel } = req.body;
      const encryptedPassword = await encryptPassword(password);
      const newUser = new _usersModel({
        username,
        password: encryptedPassword,
        nivel,
      });
      const result = await newUser.save();
      return res.json({
        codigo: 10,
        msg: 'Success!',
      });
    } catch (error) {
      if (error.message.split(' ')[0] == 'E11000')
        return res.json({
          codigo: 13,
          msg: 'O Username informado já existe!',
        });
      return res.json({
        codigo: 15,
        msg: 'Erro!',
        erro: error.message,
      });
    }
  },
  signIn: async (req, res) => {
    try {
      const { username, password } = req.body;
      const userFound = await _usersModel.findOne({ username });
      if (!userFound)
        return res.json({
          codigo: 3,
          msg: 'O Usuário informado não existe!',
        });

      const isCorrectPassword = await comparePassword(
        password,
        userFound.password
      );
      if (!isCorrectPassword)
        return res.json({
          codigo: 113,
          msg: 'Password inválida!',
        });

      const token = jwt.sign(JSON.stringify(userFound), jwtSecret);

      return res.json({
        codigo: 10,
        msg: 'Success!',
        data: [
          {
            username: userFound.username,
            nivel: userFound.nivel ? userFound.nivel : null,
            token,
          },
        ],
      });
    } catch (error) {
      return res.json({
        codigo: 15,
        msg: 'Erro!',
        erro: error.message,
      });
    }
  },
};
