const AIChat = require('../models/AIChat');

// Save a new AI chat message
exports.saveMessage = async (req, res) => {
  try {
    const { userId, role, text } = req.body;
    if (!role || !text) return res.status(400).json({ error: 'role and text required' });
    const msg = new AIChat({ userId, role, text });
    await msg.save();
    res.status(201).json({ success: true, message: msg });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save message' });
  }
};

// Get all AI chat messages (optionally by user)
exports.getMessages = async (req, res) => {
  try {
    const { userId } = req.query;
    const filter = userId ? { userId } : {};
    const messages = await AIChat.find(filter).sort({ createdAt: 1 });
    res.status(200).json({ success: true, messages });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
