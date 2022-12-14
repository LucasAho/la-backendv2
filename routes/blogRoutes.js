const express = require('express');
const router = express.Router();
const { getPosts, getPostById, getOtherPostsInGenre, getPostsByGenre, getPostsByGenreExclude } = require('../controllers/blogController');

//@desc Get posts
//@route GET /api/blog
router.route('/').get(getPosts);//.post(createPost);
router.route('/:id').get(getPostById);
router.route('/byGenre/:genre').get(getPostsByGenre);
router.route('/byGenreExclude/:genre').get(getPostsByGenreExclude);
router.route('/:genre/:excludedId').get(getOtherPostsInGenre);

module.exports = router;