const express = require('express')
const router = express.Router()
const resource = require('../controllers/resourceController')
const { requireAuth } = require('../middleware/authMiddleware')

router.get('/', resource.listResources)
router.post('/', requireAuth, resource.createResource)
router.get('/:id', resource.getResource)

module.exports = router
