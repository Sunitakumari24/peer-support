const mongoose = require('mongoose')

const ResourceSchema = new mongoose.Schema({
	title: { type: String, required: true },
	url: { type: String },
	description: { type: String },
	tags: [String],
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })

module.exports = mongoose.model('Resource', ResourceSchema)
