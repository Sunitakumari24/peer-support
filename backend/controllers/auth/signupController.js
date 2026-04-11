const User = require('../../models/User');
const { response, errors } = require('../../core');

module.exports = async function signupController(req, res) {
  try {
    console.log('📝 Signup request received:', req.body);
    let { name, email, password } = req.body;
    
    // Validate input
    if (!name || !email || !password) {
      console.log('❌ Missing fields');
      throw new errors.ValidationError('Name, email, and password are required');
    }
    
    // Sanitize email
    email = email.toLowerCase().trim();
    
    // Check if email already exists
    const existing = await User.findOne({ email });
    if (existing) {
      console.log('❌ Email already exists');
      throw new errors.ConflictError('Email already registered');
    }
    
    console.log('✅ Creating new user...');
    const user = new User({ name, email, password });
    console.log('💾 Saving user to MongoDB...');
    const savedUser = await user.save();
    console.log('✅ User saved successfully:', savedUser._id);
    
    response.sendSuccess(res, 
      { 
        id: savedUser._id, 
        name: savedUser.name, 
        email: savedUser.email 
      }, 
      201, 
      'User registered successfully'
    );
  } catch (error) {
    console.error('❌ Signup error:', error.message);
    if (error.statusCode) {
      response.sendError(res, error, error.statusCode, error.message);
    } else {
      response.sendError(res, error, 500, 'Signup failed');
    }
  }
};