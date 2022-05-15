// All of /auth routes will be redirected here

const express = require('express');
const router = express.Router();

const { login, logout } = require('../../controllers/v1/auth.controller');

router.post('/login', login);
router.get('/logout', logout);

module.exports = router;