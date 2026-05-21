const express = require('express');
const cors = require('cors');
const connectDB = require('../backend/config/db');

// Import core module
const { config, response } = require('../backend/core');

const authRoutes = require('../backend/routes/authRoutes');
const chatRoutes = require('../backend/routes/chatRoutes');
const aiChatRoutes = require('../backend/routes/aiChatRoutes');
const anonymousChatRoutes = require('../backend/routes/anonymousChatRoutes');

const app = express();

// Connect to MongoDB
connectDB();

app.use(
	cors({
		origin: config.CORS_ORIGIN || '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
);
app.use(express.json());

// Health check endpoint
app.get('/api/health', (_req, res) => {
	response.sendSuccess(res, { 
		status: 'running',
		environment: config.NODE_ENV,
		timestamp: new Date().toISOString()
	}, 200, 'Backend is running');
});

// Test endpoint to check all users
app.get('/api/test/users', async (_req, res) => {
	try {
		const User = require('../backend/models/User');
		const users = await User.find({}).select('-password');
		response.sendSuccess(res, users, 200, `Found ${users.length} users`);
	} catch (err) {
		response.sendError(res, err, 500, 'Failed to fetch users');
	}
});

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/aichat', aiChatRoutes);
app.use('/api/anonchat', anonymousChatRoutes);

// 404 handler
app.use((_req, res) => {
	response.sendError(res, new Error('Route not found'), 404, 'Route not found');
});

// Error handling middleware (must be last)
app.use((err, _req, res, _next) => {
	console.error('❌ Error:', err.message);
	const statusCode = err.statusCode || 500;
	const message = err.message || 'Internal server error';
	response.sendError(res, err, statusCode, message);
});

module.exports = app;
