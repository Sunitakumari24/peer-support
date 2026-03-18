const express = require('express');
const router = express.Router();
const { getPosts, createPost, addComment, likePost } = require('../controllers/forumController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getPosts);
router.post('/', protect, createPost);
router.post('/:id/comments', protect, addComment);
router.put('/:id/like', protect, likePost);

module.exports = router;
