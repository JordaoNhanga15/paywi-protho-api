const { model } = require('mongoose');
const router = require('express').Router();

const _estabelecimentosSchemas = require('../schemas/_estabelecimentos');
const validate = require('../middlewares/validateData');

const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} = require('../controllers/_estabelecimentos');

router.get('/', getAll);
router.post('/', validate(_estabelecimentosSchemas), createOne);
router.put('/:_id', updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;
