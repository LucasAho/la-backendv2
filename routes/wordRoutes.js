const express = require('express');
const router = express.Router();
const { getWords, createWord } = require('../controllers/tukrenController');

router.route('/').get(getWords);
router.route('/:apiKey').post(createWord);

module.exports = router;