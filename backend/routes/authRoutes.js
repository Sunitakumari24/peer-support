const express = require('express');


const loginController = require('../controllers/auth/loginController');
const signupController = require('../controllers/auth/signupController');
const updateProfileController = require('../controllers/auth/profileController');
const googleLoginController = require('../controllers/auth/googleLoginController');

const router = express.Router();


router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/google-login', googleLoginController);
router.put('/users/:userId', updateProfileController);

module.exports = router;
