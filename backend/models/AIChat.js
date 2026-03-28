const mongoose = require('mongoose');

const aiChatSchema = new mongoose.Schema({
  userId: { type: String, required: false }, // optional for anonymous
  role: { type: String, enum: ['user', 'bot'], required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AIChat', aiChatSchema);
