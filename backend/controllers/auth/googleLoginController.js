const { OAuth2Client } = require('google-auth-library');
const User = require('../../models/User');
const { response, errors, config } = require('../../core');

const client = new OAuth2Client(config.GOOGLE_CLIENT_ID);

module.exports = async function googleLoginController(req, res) {
  try {
    const { credential } = req.body;
    
    if (!credential) {
      throw new errors.ValidationError('No credential provided');
    }
    
    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: config.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    const { email, name } = payload;
    
    if (!email) {
      throw new errors.ValidationError('No email found in Google account');
    }
    
    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ 
        name: name || email, 
        email, 
        password: Math.random().toString(36) 
      });
      await user.save();
    }
    
    response.sendSuccess(res, 
      { 
        id: user._id, 
        name: user.name, 
        email: user.email 
      }, 
      200, 
      'Google login successful'
    );
  } catch (error) {
    if (error.statusCode) {
      response.sendError(res, error, error.statusCode, error.message);
    } else {
      response.sendError(res, error, 500, 'Google login failed');
    }
  }
};
