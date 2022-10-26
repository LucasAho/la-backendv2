const express = require('express');
const router = express.Router();
const { getWords } = require('../controllers/tukrenController');

router.route('/').get(getWords);

module.exports = router;