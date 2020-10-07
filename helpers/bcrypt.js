const bcrypt = require('bcrypt');
const { saltRounds } = require('../config');

const getSalt = async () => {
  return await bcrypt.genSaltSync(+saltRounds);
};

const encryptPassword = async (password) => {
  const salt = await getSalt();
  return await bcrypt.hashSync(password, salt);
};

const comparePassword = async (password1, password2) => {
  return await bcrypt.compareSync(password1, password2);
};

module.exports = { encryptPassword, comparePassword };
