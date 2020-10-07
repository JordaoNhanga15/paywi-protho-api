const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');
const Boom = require('@hapi/boom');

module.exports = (req, res, next) => {
  try {
    const token = req.headers['authorization'].replace('Bearer ', '');

    //const {acess_token} = req.body

    const decodedToken = jwt.verify(token, jwtSecret);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.json({
      codigo: 99,
      msg: 'Requisição Não Autorizada!',
      erro: Boom.forbidden(`Não Autorizada!`),
    });
  }
};
