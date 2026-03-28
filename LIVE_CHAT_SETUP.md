# Live Chat Setup Guide

## 🎯 What's Configured

✅ **MongoDB** - Message storage  
✅ **Socket.io** - Real-time messaging  
✅ **Live Chat API** - REST endpoints for history  
✅ **Typing Indicators** - See when users are typing  
✅ **User Status** - Online/offline tracking  

## 📋 Environment Variables

Create `.env` file in the `backend/` folder:

```
MONGODB_URI=mongodb://localhost:27017/peer-support
# OR for MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/peer-support
PORT=5000
```

Create `.env.local` file in the `frontend/` folder:

```
VITE_API_URL=http://localhost:5000
```

## 🚀 API Endpoints

### Save Message
```
POST /api/chat/message
Body: {
  "senderId": "user1",
  "senderName": "John",
  "receiverId": "user2",
  "content": "Hello!"
}
```

### Get Chat History
```
GET /api/chat/history?userId1=user1&userId2=user2
```

### Mark Messages as Read
```
PUT /api/chat/mark-read
Body: {
  "senderId": "user2",
  "receiverId": "user1"
}
```

## 🔌 Socket.io Events

### Client Emits
- `user-join` - When user comes online
- `send-message` - Send a message
- `typing` - User is typing
- `stop-typing` - User stopped typing

### Server Emits
- `receive-message` - New message received
- `message-sent` - Confirmation of sent message
- `user-status` - User online/offline
- `user-typing` - Someone is typing
- `user-stop-typing` - Someone stopped typing

## 📱 Frontend Usage Example

```javascript
import { 
  initializeSocket, 
  sendMessage, 
  onReceiveMessage,
  onUserTyping,
  emitTyping 
} from '@/services/socketService';

// Initialize socket when user logs in
const currentUserId = 'user123';
initializeSocket(currentUserId);

// Send message
sendMessage(currentUserId, 'John', 'user456', 'Hello world!');

// Listen for messages
onReceiveMessage((message) => {
  console.log('New message:', message);
});

// Typing indicator
emitTyping(currentUserId, 'John', 'user456');
```

## 🛠️ Installation Steps Done

1. ✅ Installed `mongoose` and `socket.io` in backend
2. ✅ Installed `socket.io-client` in frontend
3. ✅ Created MongoDB config
4. ✅ Created ChatMessage model
5. ✅ Added chat controller functions
6. ✅ Updated server.js with Socket.io
7. ✅ Updated chat routes
8. ✅ Created Socket.io client service

## 🚀 To Start

### Backend
```bash
cd backend
node server.js
```

### Frontend
```bash
cd frontend
npm run dev
```

Monitor the console for connection confirmation:
- Backend: `✅ User connected: socket_id`
- Frontend: Console log showing socket connection

## 📚 Next Steps

1. Set up MongoDB (local or Atlas)
2. Update `.env` files with correct URIs
3. Update Chat.jsx component to use the new socket service
4. Test message sending and receiving
