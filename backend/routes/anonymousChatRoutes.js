const express = require('express');
const { createRequest, sendMessage, getMessages } = require('../controllers/anonymousChatController');

const router = express.Router();

// POST /api/anonchat/request
router.post('/request', createRequest);
// POST /api/anonchat/message
router.post('/message', sendMessage);
// GET /api/anonchat/messages?chatId=xyz
router.get('/messages', getMessages);

module.exports = router;
