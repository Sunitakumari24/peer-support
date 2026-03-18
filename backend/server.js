require('dotenv').config()
const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const forumRoutes = require('./routes/forumRoutes')
const chatRoutes = require('./routes/chatRoutes')
const resourceRoutes = require('./routes/resourceRoutes')

connectDB()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
	cors: { origin: process.env.CLIENT_URL || 'http://localhost:5173', methods: ['GET', 'POST'] },
})

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/forum', forumRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/resources', resourceRoutes)

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

io.on('connection', (socket) => {
	socket.on('join_room', (room) => {
		socket.join(room)
	})
	socket.on('send_message', (data) => {
		io.to(data.room).emit('receive_message', data)
	})
	socket.on('disconnect', () => {})
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
