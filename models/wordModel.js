const mongoose = require("mongoose");

const tukrenWordSchema = new mongoose.Schema({
    conlang: {
        type: String,
        trim: true,
        required: [true, 'Please include Tukren word']
    },
    english: {
        type: String,
        trim: true,
        required: [true, 'Please include English translation']
    },
    pos: {
        type: String,
        trim: true,
        maxlength: 15,
        required: [true, 'Please include part of speech']
    },
    sentence: {
        type: String,
    },
    image: {
        type: String,
        trim: true,
        maxlength: 200
    },
    etymology: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('tukrenWord', tukrenWordSchema);