const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, trim: true },
		description: { type: String, required: true },
		url: { type: String, default: '' },
		category: {
			type: String,
			enum: ['article', 'video', 'hotline', 'tool', 'other'],
			default: 'article',
		},
		author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Resource', resourceSchema)
