// Main router entry point

const express = require('express');
const router = express.Router();

const authRouter = require('./auth.router');
const awardsRouter = require('./awards.router');

router.use('/auth', authRouter);
router.use('/awards', awardsRouter);

module.exports = router;