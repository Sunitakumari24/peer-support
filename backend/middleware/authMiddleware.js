const jwt = require('jsonwebtoken')
const User = require('../models/User')

async function requireAuth(req, res, next) {
	const token = req.cookies && req.cookies.token
	if (!token) return res.status(401).json({ message: 'Not authenticated' })
	try {
		const data = jwt.verify(token, process.env.JWT_SECRET || 'devsecret')
		const user = await User.findById(data.id).select('-passwordHash')
		if (!user) return res.status(401).json({ message: 'Not authenticated' })
		req.user = user
		next()
	} catch (err) {
		console.error('auth middleware error', err)
		return res.status(401).json({ message: 'Not authenticated' })
	}
}

module.exports = { requireAuth }
