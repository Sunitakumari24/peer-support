const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth/loginController');
const { signup } = require('../controllers/auth/signupController');

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
