const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');
const UserController = require('../../controllers/user.controller');

router.post('/register', UserController.register);

module.exports = router;