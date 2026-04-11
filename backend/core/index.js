/**
 * Core Module Index
 * Export all core functionality
 */

const config = require('./config');
const { sendSuccess, sendError, sendPaginated } = require('./api/response');
const errors = require('./api/errors');
const services = require('./services');
const storage = require('./storage');

module.exports = {
  // Configuration
  config,
  
  // API Utilities
  response: {
    sendSuccess,
    sendError,
    sendPaginated,
  },
  
  // Error Classes
  errors,
  
  // Services
  services,
  
  // Storage
  storage,
};
