const User = require('../../models/User')
const { generateToken } = require('../../utils/helpers')

const login = async (req, res) => {
	try {
		const { email, password } = req.body
		if (!email || !password) {
			return res.status(400).json({ message: 'Email and password are required' })
		}
		const user = await User.findOne({ email })
		if (!user || !(await user.matchPassword(password))) {
			return res.status(401).json({ message: 'Invalid email or password' })
		}
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		})
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
}

module.exports = { login }
