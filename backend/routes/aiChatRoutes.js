const express = require('express');
const { saveMessage, getMessages } = require('../controllers/aiChatController');

const router = express.Router();

// POST /api/aichat/message
router.post('/message', saveMessage);

// GET /api/aichat/messages?userId=xyz
router.get('/messages', getMessages);

module.exports = router;
