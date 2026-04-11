const User = require('../../models/User');
const { response, errors } = require('../../core');

module.exports = async function updateProfileController(req, res) {
  try {
    const { userId } = req.params;
    const { name, email } = req.body;
    
    // Validate userId
    if (!userId) {
      throw new errors.ValidationError('User ID is required');
    }
    
    const user = await User.findById(userId);
    if (!user) {
      throw new errors.NotFoundError('User');
    }
    
    // Update fields
    if (name) user.name = name;
    if (email) user.email = email;
    
    await user.save();
    
    response.sendSuccess(res, 
      { 
        id: user._id, 
        name: user.name, 
        email: user.email 
      }, 
      200, 
      'Profile updated successfully'
    );
  } catch (error) {
    if (error.statusCode) {
      response.sendError(res, error, error.statusCode, error.message);
    } else {
      response.sendError(res, error, 500, 'Profile update failed');
    }
  }
};