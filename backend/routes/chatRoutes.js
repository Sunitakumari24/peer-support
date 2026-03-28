const express = require('express');
const { askAiController, saveMessage, getChatHistory, markMessagesAsRead } = require('../controllers/chatController');

const router = express.Router();

router.post('/ai', askAiController);
router.post('/message', saveMessage);
router.get('/history', getChatHistory);
router.put('/mark-read', markMessagesAsRead);

module.exports = router;
