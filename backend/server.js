const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/db');


const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');

const aiChatRoutes = require('./routes/aiChatRoutes');
const anonymousChatRoutes = require('./routes/anonymousChatRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
	res.status(200).json({ message: 'Backend is running.' });
});



app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/aichat', aiChatRoutes);
app.use('/api/anonchat', anonymousChatRoutes);

app.use((_req, res) => {
	res.status(404).json({ message: 'Route not found.' });
});

// Socket.io for real-time chat
const activeUsers = new Map();

io.on('connection', (socket) => {
	console.log(`✅ User connected: ${socket.id}`);

	// User joins chat
	socket.on('user-join', (userId) => {
		activeUsers.set(userId, socket.id);
		io.emit('user-status', { userId, status: 'online', activeUsers: Array.from(activeUsers.keys()) });
		console.log(`User ${userId} is online`);
	});

	// Send message event
	socket.on('send-message', (data) => {
		const { senderId, senderName, receiverId, content } = data;
		
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
	console.log(`Server running on port ${PORT}`);
});
