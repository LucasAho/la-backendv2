const asyncHandler = require('express-async-handler');
const tukrenWord = require('../models/wordModel');

//@desc Get Tukren words
//@route GET /api/tukren
//@access Public
const getWords = asyncHandler(async (req, res) => {
    const words = await tukrenWord.find();
    res.status(200).json(words);
});

//@desc Create Tukren word
//@route POST /api/tukren
//@access Private
const createWord = asyncHandler(async (req, res) => {
    const { conlang, pos, english, sentence, image, etymology, pronounciation } = req.body;
    if (!conlang) {
        res.status(400);
        throw new Error("Please add a Tukren word");
    }
    if (!english) {
        res.status(400);
        throw new Error("Please add an English translation");
    }
    if (!pos) {
        res.status(400);
        throw new Error("Please add a part of speech");
    }
    const word = await tukrenWord.create({
        conlang,
        english,
        pos,
        sentence,
        image,
        etymology,
        pronounciation
    })

    res.status(200).json(word)
});

module.exports = {
    getWords,
    createWord
}