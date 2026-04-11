const User = require('../../models/User');
const { response, errors } = require('../../core');

module.exports = async function loginController(req, res) {
  try {
    let { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      throw new errors.ValidationError('Email and password are required');
    }
    
    // Sanitize email (same as signup)
    email = email.toLowerCase().trim();
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      throw new errors.AuthenticationError('Invalid credentials');
    }
    
    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new errors.AuthenticationError('Invalid credentials');
    }
    
    // Successful login
    response.sendSuccess(res, 
      { 
        id: user._id, 
        name: user.name, 
        email: user.email 
      }, 
      200, 
      'Login successful'
    );
  } catch (error) {
    if (error.statusCode) {
      response.sendError(res, error, error.statusCode, error.message);
    } else {
      response.sendError(res, error, 500, 'Login failed');
    }
  }
};