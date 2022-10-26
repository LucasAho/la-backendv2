const asyncHandler = require('express-async-handler');
const Post = require('../models/postModel');

//@desc Get posts
//@route GET /api/blog
//@access Public
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();
    res.status(200).json(posts);
});

const getPostById = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(400);
        throw new Error('Post not found');
    }

    res.status(200).json(post);

});

// const createPost = asyncHandler(async (req, res) => {
//     console.log(req.body);
//     //if (!req.body.title || !req.body.)
//     res.status(200);
// });

module.exports = {
    getPosts,
    getPostById,
    //createPost
}