const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/db');

// Import core module
const { config, response } = require('./core');

const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');

const aiChatRoutes = require('./routes/aiChatRoutes');
const anonymousChatRoutes = require('./routes/anonymousChatRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: config.CORS_ORIGIN,
    methods: ['GET', 'POST'],
  },
});

// Use config PORT
const PORT = config.PORT;

// Connect to MongoDB
connectDB();

app.use(
	cors({
		origin: config.CORS_ORIGIN,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
);
app.use(express.json());

// Health check endpoint
app.get('/api/health', (_req, res) => {
	response.sendSuccess(res, { 
		status: 'running',
		port: config.PORT,
		environment: config.NODE_ENV,
	}, 200, 'Backend is running');
});

// Test endpoint to check all users
app.get('/api/test/users', async (_req, res) => {
	try {
		const User = require('./models/User');
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

// Socket.io for real-time chat
const activeUsers = new Map();
const Message = require('./models/Message');

io.on('connection', (socket) => {
	console.log(`✅ User connected: ${socket.id}`);

	// User joins chat
	socket.on('user-join', (userId) => {
		activeUsers.set(userId, socket.id);
		io.emit('user-status', { userId, status: 'online', activeUsers: Array.from(activeUsers.keys()) });
		console.log(`User ${userId} is online`);
	});

	// Send message event
	socket.on('send-message', async (data) => {
		const { senderId, senderName, receiverId, content } = data;
		
		try {
			// Save message to database
			const message = new Message({
				senderId,
				senderName,
				receiverId,
				content,
				timestamp: new Date(),
				read: false
			});
			await message.save();
			console.log('💾 Message saved to database');
		} catch (err) {
			console.error('❌ Error saving message:', err);
		}
		
		// Broadcast to receiver if online
		const receiverSocketId = activeUsers.get(receiverId);
		if (receiverSocketId) {
			io.to(receiverSocketId).emit('receive-message', {
				senderId,
				senderName,
				content,
				timestamp: new Date(),
			});
		}
		
		// Also emit back to sender for confirmation
		socket.emit('message-sent', {
			senderId,
			senderName,
			receiverId,
			content,
			timestamp: new Date(),
		});
	});

	// User typing indicator
	socket.on('typing', (data) => {
		const receiverSocketId = activeUsers.get(data.receiverId);
		if (receiverSocketId) {
			io.to(receiverSocketId).emit('user-typing', {
				senderId: data.senderId,
				senderName: data.senderName,
			});
		}
	});

	// User stops typing
	socket.on('stop-typing', (data) => {
		const receiverSocketId = activeUsers.get(data.receiverId);
		if (receiverSocketId) {
			io.to(receiverSocketId).emit('user-stop-typing', {
				senderId: data.senderId,
			});
		}
	});

	// User disconnects
	socket.on('disconnect', () => {
		for (let [userId, socketId] of activeUsers.entries()) {
			if (socketId === socket.id) {
				activeUsers.delete(userId);
				io.emit('user-status', { userId, status: 'offline', activeUsers: Array.from(activeUsers.keys()) });
				console.log(`User ${userId} went offline`);
				break;
			}
		}
	});
});

server.listen(PORT, () => {
	console.log(`
🚀 Server Configuration:
   - Port: ${config.PORT}
   - Environment: ${config.NODE_ENV}
   - CORS Origin: ${config.CORS_ORIGIN}
   - Database: ${config.MONGODB_URI.substring(0, 30)}...
   
✅ Server running on http://localhost:${PORT}
	`);
});
