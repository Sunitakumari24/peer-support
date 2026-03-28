import io from 'socket.io-client';

const SOCKET_SERVER_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

let socket = null;

export const initializeSocket = (userId) => {
  if (!socket) {
    socket = io(SOCKET_SERVER_URL, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    socket.on('connect', () => {
      console.log('✅ Connected to chat server');
      socket.emit('user-join', userId);
    });

    socket.on('connect_error', (error) => {
      console.error('❌ Socket connection error:', error);
    });
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = () => socket;

// Send message event
export const sendMessage = (senderId, senderName, receiverId, content) => {
  if (socket) {
    socket.emit('send-message', {
      senderId,
      senderName,
      receiverId,
      content,
    });
  }
};

// Listen for incoming messages
export const onReceiveMessage = (callback) => {
  if (socket) {
    socket.on('receive-message', callback);
  }
};

// Listen for message sent confirmation
export const onMessageSent = (callback) => {
  if (socket) {
    socket.on('message-sent', callback);
  }
};

// Listen for user status changes
export const onUserStatus = (callback) => {
  if (socket) {
    socket.on('user-status', callback);
  }
};

// Emit typing indicator
export const emitTyping = (senderId, senderName, receiverId) => {
  if (socket) {
    socket.emit('typing', { senderId, senderName, receiverId });
  }
};

// Emit stop typing
export const emitStopTyping = (senderId, receiverId) => {
  if (socket) {
    socket.emit('stop-typing', { senderId, receiverId });
  }
};

// Listen for typing indicators
export const onUserTyping = (callback) => {
  if (socket) {
    socket.on('user-typing', callback);
  }
};

// Listen for stop typing
export const onUserStopTyping = (callback) => {
  if (socket) {
    socket.on('user-stop-typing', callback);
  }
};
