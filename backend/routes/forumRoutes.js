const express = require('express')
const router = express.Router()
const { getPosts, getPost, createPost, likePost, addComment } = require('../controllers/forumController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/', protect, createPost)
router.put('/:id/like', protect, likePost)
router.post('/:id/comment', protect, addComment)

module.exports = router
