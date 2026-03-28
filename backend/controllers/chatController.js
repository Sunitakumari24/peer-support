
const { getGeminiChatCompletion } = require('../utils/gemini');

module.exports = {
  askAiController: async (req, res) => {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: 'No message received.' });
    }
    try {
      console.log('Incoming message:', message);
      console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'Loaded' : 'NOT LOADED');
      const reply = await getGeminiChatCompletion(message);
      console.log('Gemini API reply:', reply);
      res.status(200).json({ reply });
    } catch (error) {
      console.error('Gemini API error:', error);
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
  saveMessage: (req, res) => res.status(200).json({ success: true }),
  getChatHistory: (req, res) => res.status(200).json({ messages: [] }),
  markMessagesAsRead: (req, res) => res.status(200).json({ success: true })
};
