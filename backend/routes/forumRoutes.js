const express = require('express')
const router = express.Router()
const forum = require('../controllers/forumController')
const { requireAuth } = require('../middleware/authMiddleware')

router.get('/', forum.listPosts)
router.post('/', requireAuth, forum.createPost)
router.get('/:id', forum.getPost)
router.put('/:id', requireAuth, forum.updatePost)
router.delete('/:id', requireAuth, forum.deletePost)

module.exports = router
