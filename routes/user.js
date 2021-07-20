const express = require('express');

const router = express.Router();
const { signUp, signIn, getUsers } = require('../controller/User');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/', getUsers);


module.exports = router;