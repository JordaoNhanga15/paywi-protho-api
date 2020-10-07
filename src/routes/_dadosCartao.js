const { model } = require('mongoose');
const router = require('express').Router();

const _dadosCartaoSchemas = require('../schemas/_dadosCartao');
const validate = require('../middlewares/validateData');

const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} = require('../controllers/_dadosCartao');

router.get('/', getAll);
router.post('/', validate(_dadosCartaoSchemas), createOne);
router.put('/:_id', updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;
