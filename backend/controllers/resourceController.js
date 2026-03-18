const Resource = require('../models/Resource')

const getResources = async (req, res) => {
	try {
		const { category } = req.query
		const filter = category ? { category } : {}
		const resources = await Resource.find(filter)
			.populate('author', 'name')
			.sort({ createdAt: -1 })
		res.json(resources)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const createResource = async (req, res) => {
	try {
		const { title, description, url, category } = req.body
		if (!title || !description) {
			return res.status(400).json({ message: 'Title and description are required' })
		}
		const resource = await Resource.create({
			title,
			description,
			url,
			category,
			author: req.user._id,
		})
		res.status(201).json(resource)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

module.exports = { getResources, createResource }
