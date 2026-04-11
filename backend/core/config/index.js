/**
 * Core Configuration
 * Centralized configuration management
 */

require('dotenv').config();

const config = {
  // Server
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Database
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/peer-support',
  
  // AI Services
  GOOGLE_GENERATIVE_AI_KEY: process.env.GOOGLE_GENERATIVE_AI_KEY,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  
  // Auth
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d',
  
  // Google OAuth
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  
  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
};

/**
 * Validate critical config
 */
function validateConfig() {
  const required = ['MONGODB_URI'];
  const missing = required.filter(key => !config[key]);
  
  if (missing.length > 0) {
    console.warn('⚠️  Missing config:', missing.join(', '));
  }
}

validateConfig();

module.exports = config;
