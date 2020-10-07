const { model } = require('mongoose');
const router = require('express').Router();

const _usersSchemas = require('../schemas/_users');
const validate = require('../middlewares/validateData');

const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} = require('../controllers/_users');

router.get('/', getAll);
router.post('/', validate(_usersSchemas), createOne);
router.put('/:_id', updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;
