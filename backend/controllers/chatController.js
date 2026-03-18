const Message = require('../models/Message')

const getMessages = async (req, res) => {
	try {
		const { room } = req.params
		const messages = await Message.find({ room })
			.populate('sender', 'name avatar')
			.sort({ createdAt: 1 })
		res.json(messages)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const sendMessage = async (req, res) => {
	try {
		const { room, text } = req.body
		if (!text) return res.status(400).json({ message: 'Message text is required' })
		const message = await Message.create({ sender: req.user._id, room, text })
		const populated = await message.populate('sender', 'name avatar')
		res.status(201).json(populated)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

module.exports = { getMessages, sendMessage }
