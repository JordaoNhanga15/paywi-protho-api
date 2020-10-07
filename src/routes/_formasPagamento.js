const { model } = require('mongoose');
const router = require('express').Router();

const _formasPagamentoSchemas = require('../schemas/_formasPagamento');
const validate = require('../middlewares/validateData');

const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} = require('../controllers/_formasPagamento');

router.get('/', getAll);
router.post('/', validate(_formasPagamentoSchemas), createOne);
router.put('/:_id', updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;
