const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please include a title']
    },
    blurb: {
        type: String,
        required: [true, 'Please include a blurb']
    },
    paragraphs: [{
        Title: {
            type: String,
            required: true
        },
        Content: [{
            type: String,
            required: true
        }],
        ContentType: {
            type: String
        }

    }],
    image: {
        type: String,
        trim: true,
        maxlength: 200
    },
    genre: {
        type: String,
        required: [true, 'Please include a genre']
    },
    dateWritten: {
        type: String,
        maxLength: 20
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema)