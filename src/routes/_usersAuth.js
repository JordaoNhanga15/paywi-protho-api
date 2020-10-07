const { model } = require('mongoose');
const router = require('express').Router();

const _usersSchemas = require('../schemas/_users');
const _usersAuthSchemas = require('../schemas/_usersAuth');

const validate = require('../middlewares/validateData');

const { signUp, signIn } = require('../controllers/_usersAuth');
//
router.post('/signIn', validate(_usersAuthSchemas), signIn);
router.post('/signUp', validate(_usersSchemas), signUp);

module.exports = router;
