const Post = require('../models/Post')

// create a post (auth required)
async function createPost(req, res) {
	const { title, content, tags } = req.body
	if (!title || !content) return res.status(400).json({ message: 'Missing fields' })
	try {
		const post = await Post.create({ title, content, tags: tags || [], author: req.user ? req.user._id : null })
		res.status(201).json(post)
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
}

async function listPosts(req, res) {
	try {
		const posts = await Post.find().sort({ createdAt: -1 }).populate('author', 'name email')
		res.json(posts)
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
}

async function getPost(req, res) {
	try {
		const post = await Post.findById(req.params.id).populate('author', 'name email')
		if (!post) return res.status(404).json({ message: 'Not found' })
		res.json(post)
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
}

async function updatePost(req, res) {
	try {
		const post = await Post.findById(req.params.id)
		if (!post) return res.status(404).json({ message: 'Not found' })
		// only author may update
		if (!req.user || !post.author || post.author.toString() !== req.user._id.toString()) return res.status(403).json({ message: 'Forbidden' })
		post.title = req.body.title || post.title
		post.content = req.body.content || post.content
		post.tags = req.body.tags || post.tags
		await post.save()
		res.json(post)
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
}

async function deletePost(req, res) {
	try {
		const post = await Post.findById(req.params.id)
		if (!post) return res.status(404).json({ message: 'Not found' })
		if (!req.user || !post.author || post.author.toString() !== req.user._id.toString()) return res.status(403).json({ message: 'Forbidden' })
		await post.remove()
		res.json({ ok: true })
	} catch (err) {
		console.error(err)
		res.status(500).json({ message: 'Server error' })
	}
}

module.exports = { createPost, listPosts, getPost, updatePost, deletePost }
