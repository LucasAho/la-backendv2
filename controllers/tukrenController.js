const asyncHandler = require('express-async-handler');
const tukrenWord = require('../models/wordModel');

//@desc Get Tukren words
//@route GET /api/tukren
//@access Public
const getWords = asyncHandler(async (req, res) => {
    const words = await tukrenWord.find();
    res.status(200).json(words);
});

module.exports = {
    getWords
}