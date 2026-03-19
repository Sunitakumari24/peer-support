const Resource = require('../models/Resource')

async function listResources(req, res) {
	try {
		const resources = await Resource.find().sort({ createdAt: -1 }).populate('createdBy', 'name email')
		res.json(resources)
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
}

async function createResource(req, res) {
	const { title, url, description, tags } = req.body
	if (!title) return res.status(400).json({ message: 'Missing title' })
	try {
		const resource = await Resource.create({ title, url, description, tags: tags || [], createdBy: req.user ? req.user._id : null })
		res.status(201).json(resource)
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
}

async function getResource(req, res) {
	try {
		const resource = await Resource.findById(req.params.id)
		if (!resource) return res.status(404).json({ message: 'Not found' })
		res.json(resource)
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
}

module.exports = { listResources, createResource, getResource }
