const Post = require('../models/Post')

const getPosts = async (req, res) => {
	try {
		const { category } = req.query
		const filter = category ? { category } : {}
		const posts = await Post.find(filter)
			.populate('author', 'name avatar')
			.sort({ createdAt: -1 })
		res.json(posts)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const getPost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id).populate('author', 'name avatar')
		if (!post) return res.status(404).json({ message: 'Post not found' })
		res.json(post)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const createPost = async (req, res) => {
	try {
		const { title, content, category } = req.body
		if (!title || !content) {
			return res.status(400).json({ message: 'Title and content are required' })
		}
		const post = await Post.create({ title, content, category, author: req.user._id })
		const populated = await post.populate('author', 'name avatar')
		res.status(201).json(populated)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const likePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)
		if (!post) return res.status(404).json({ message: 'Post not found' })
		const userId = req.user._id.toString()
		const alreadyLiked = post.likes.some((id) => id.toString() === userId)
		if (alreadyLiked) {
			post.likes = post.likes.filter((id) => id.toString() !== userId)
		} else {
			post.likes.push(req.user._id)
		}
		await post.save()
		res.json({ likes: post.likes.length })
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

const addComment = async (req, res) => {
	try {
		const { text } = req.body
		if (!text) return res.status(400).json({ message: 'Comment text is required' })
		const post = await Post.findById(req.params.id)
		if (!post) return res.status(404).json({ message: 'Post not found' })
		post.comments.push({ user: req.user._id, text })
		await post.save()
		res.status(201).json(post.comments[post.comments.length - 1])
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

module.exports = { getPosts, getPost, createPost, likePost, addComment }
