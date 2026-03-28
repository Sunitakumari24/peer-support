const AnonymousChat = require('../models/AnonymousChat');

// Create a new chat request (category select)
exports.createRequest = async (req, res) => {
  try {
    const { userId, category } = req.body;
    if (!category) return res.status(400).json({ error: 'Category required' });
    const chat = new AnonymousChat({ userId, category, status: 'active', messages: [] });
    await chat.save();
    res.status(201).json({ success: true, chatId: chat._id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create chat request' });
  }
};

// Send a message in chat (user or bot)
exports.sendMessage = async (req, res) => {
  try {
    const { chatId, sender, text } = req.body;
    if (!chatId || !sender || !text) return res.status(400).json({ error: 'chatId, sender, text required' });
    const chat = await AnonymousChat.findById(chatId);
    if (!chat) return res.status(404).json({ error: 'Chat not found' });
    chat.messages.push({ sender, text });
    await chat.save();
    res.status(200).json({ success: true, messages: chat.messages });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

// Get all messages for a chat
exports.getMessages = async (req, res) => {
  try {
    const { chatId } = req.query;
    if (!chatId) return res.status(400).json({ error: 'chatId required' });
    const chat = await AnonymousChat.findById(chatId);
    if (!chat) return res.status(404).json({ error: 'Chat not found' });
    res.status(200).json({ success: true, messages: chat.messages });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
