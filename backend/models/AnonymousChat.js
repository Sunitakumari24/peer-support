const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: String, enum: ['user', 'bot'], required: true },
  text: { type: String, required: true },
  time: { type: Date, default: Date.now }
});

const anonChatSchema = new mongoose.Schema({
  userId: { type: String, required: false }, // optional for anonymous
  category: { type: String, required: true },
  status: { type: String, enum: ['pending', 'active', 'closed'], default: 'active' },
  messages: [messageSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AnonymousChat', anonChatSchema);
