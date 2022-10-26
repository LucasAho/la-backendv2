const express = require('express');
const router = express.Router();
const { getPosts, getPostById, createPost } = require('../controllers/blogController');

router.route('/').get(getPosts);
router.route('/:id').get(getPostById);
router.route('/:id').post(createPost);

module.exports = router;