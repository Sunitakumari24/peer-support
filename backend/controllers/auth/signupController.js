const User = require('../../models/User')
const { generateToken } = require('../../utils/helpers')

const signup = async (req, res) => {
	try {
		const { name, email, password } = req.body
		if (!name || !email || !password) {
			return res.status(400).json({ message: 'All fields are required' })
		}
		const existing = await User.findOne({ email })
		if (existing) {
			return res.status(409).json({ message: 'Email already registered' })
		}
		const user = await User.create({ name, email, password })
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		})
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

module.exports = { signup }
