
const { getGeminiChatCompletion } = require('../utils/gemini');
const Message = require('../models/Message');
const AIChat = require('../models/AIChat');

module.exports = {
  askAiController: async (req, res) => {
    const { message, userId } = req.body;
    if (!message) {
      return res.status(400).json({ reply: 'No message received.' });
    }
    try {
      console.log('📨 Incoming message:', message);
      console.log('👤 User ID:', userId);
      console.log('🔑 GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'Loaded' : 'NOT LOADED');
      
      // Save user message
      const userMsg = new AIChat({ userId, role: 'user', text: message });
      await userMsg.save();
      console.log('✅ User message saved');
      
      const reply = await getGeminiChatCompletion(message);
      console.log('🤖 Gemini API reply:', reply);
      
      // Save bot message
      const botMsg = new AIChat({ userId, role: 'bot', text: reply });
      await botMsg.save();
      console.log('✅ Bot message saved');
      
      res.status(200).json({ reply });
    } catch (error) {
      console.error('❌ Gemini API error:', error);
      if (error.response) {
        console.error('Gemini API response data:', error.response.data);
        console.error('Gemini API response status:', error.response.status);
        console.error('Gemini API response headers:', error.response.headers);
      }
      if (error.stack) {
        console.error('Gemini API error stack:', error.stack);
      }
      res.status(500).json({ reply: 'Sorry, Gemini AI service is currently unavailable.' });
    }
  },
  
  saveMessage: async (req, res) => {
    try {
      const { senderId, senderName, receiverId, content } = req.body;
      
      if (!senderId || !senderName || !receiverId || !content) {
        return res.status(400).json({ error: 'All fields are required' });
      }
      
      const message = new Message({
        senderId,
        senderName,
        receiverId,
        content,
        timestamp: new Date(),
        read: false
      });
      
      await message.save();
      res.status(201).json({ success: true, message });
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).json({ error: 'Failed to save message' });
    }
  },
  
  getChatHistory: async (req, res) => {
    try {
      const { senderId, receiverId } = req.query;
      
      if (!senderId || !receiverId) {
        return res.status(400).json({ error: 'senderId and receiverId are required' });
      }
      
      const messages = await Message.find({
        $or: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId }
        ]
      }).sort({ timestamp: 1 });
      
      res.status(200).json({ success: true, messages });
    } catch (error) {
      console.error('Error fetching chat history:', error);
      res.status(500).json({ error: 'Failed to fetch chat history' });
    }
  },
  
  markMessagesAsRead: async (req, res) => {
    try {
      const { senderId, receiverId } = req.body;
      
      if (!senderId || !receiverId) {
        return res.status(400).json({ error: 'senderId and receiverId are required' });
      }
      
      await Message.updateMany(
        { senderId, receiverId, read: false },
        { $set: { read: true } }
      );
      
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error marking messages as read:', error);
      res.status(500).json({ error: 'Failed to mark messages as read' });
    }
  }
};
