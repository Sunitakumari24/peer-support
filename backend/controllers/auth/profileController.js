const User = require('../../models/User');

module.exports = async function updateProfileController(req, res) {
  try {
    const { userId } = req.params;
    const { name, email } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (name) user.name = name;
    if (email) user.email = email;
    await user.save();
    res.status(200).json({ success: true, user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Profile update failed' });
  }
};