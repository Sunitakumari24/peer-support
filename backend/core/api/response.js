/**
 * Standard API Response Handler
 * Ensures consistent response format across all endpoints
 */

const sendSuccess = (res, data, statusCode = 200, message = 'Success') => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};

const sendError = (res, error, statusCode = 500, message = 'Error') => {
  console.error('❌ Error:', error);
  return res.status(statusCode).json({
    success: false,
    message: message || error.message || 'Something went wrong',
    error: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    timestamp: new Date().toISOString(),
  });
};

const sendPaginated = (res, data, pagination = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
    pagination: {
      total: pagination.total || 0,
      page: pagination.page || 1,
      limit: pagination.limit || 10,
      pages: pagination.pages || 1,
    },
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  sendSuccess,
  sendError,
  sendPaginated,
};
