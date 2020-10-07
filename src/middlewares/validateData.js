const Boom = require('@hapi/boom');
module.exports = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.json({
        codigo: 5,
        erro: Boom.badData(error),
      });
    }
  };
};
