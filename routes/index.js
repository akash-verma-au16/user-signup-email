const express = require('express');
const { userSignUp } = require('../controller');
const { checkCreds } = require('../middleware');

const router = express.Router();

router.post('/register', checkCreds, userSignUp);

module.exports = router;
