const { model } = require('mongoose');
const router = require('express').Router();

const _pagamentosSchemas = require('../schemas/_pagamentos');
const validate = require('../middlewares/validateData');

const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  assignCartao,
} = require('../controllers/_pagamentos');

router.get('/', getAll);
router.post('/', validate(_pagamentosSchemas), createOne);
router.put('/:_id', updateOne);
router.delete('/:_id', deleteOne);

router.put('/assignCartao/:_id', assignCartao);

module.exports = router;
