const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
  conversationId: { type: String, required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  senderName: { type: String },
  text: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Message', MessageSchema)
