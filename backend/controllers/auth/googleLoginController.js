const { OAuth2Client } = require('google-auth-library');
const User = require('../../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports = async function googleLoginController(req, res) {
  try {
    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ error: 'No credential provided' });
    }
    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email, name } = payload;
    if (!email) {
      return res.status(400).json({ error: 'No email found in Google account' });
    }
    let user = await User.findOne({ email });
    if (!user) {
      // Create user with random password (not used)
      user = new User({ name: name || email, email, password: Math.random().toString(36) });
      await user.save();
    }
    // You can add JWT token logic here if needed
    res.status(200).json({ success: true, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Google login failed' });
  }
};
