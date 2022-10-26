const express = require('express');
const router = express.Router();
const { getPosts, getPostById, createPost } = require('../controllers/blogController');

router.route('/').get(getPosts);//.post(createPost);
router.route('/:id').get(getPostById);

module.exports = router;