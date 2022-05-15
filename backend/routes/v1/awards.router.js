// All of /awards routes will be redirected here

const express = require('express');
const router = express.Router();

const { getAllAwards } = require('../../controllers/v1/awards.controller');

router.get('/', getAllAwards);

module.exports = router;