const Message = require('../models/Message');

const getMessages = async (req, res) => {
  const { recipientId } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, recipient: recipientId },
        { sender: recipientId, recipient: req.user._id },
      ],
    })
      .populate('sender', 'name avatar')
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendMessage = async (req, res) => {
  const { recipientId, content } = req.body;

  try {
    const message = await Message.create({
      sender: req.user._id,
      recipient: recipientId,
      content,
    });
    const populated = await message.populate('sender', 'name avatar');
    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMessages, sendMessage };
