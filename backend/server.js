require('dotenv').config()
const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { Server } = require('socket.io')
const fetch = require('node-fetch')

const User = require('./models/User')
const Message = require('./models/Message')
const forumRoutes = require('./routes/forumRoutes')
const resourceRoutes = require('./routes/resourceRoutes')

const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(cookieParser())

// mount feature routers
app.use('/api/forum', forumRoutes)
app.use('/api/resources', resourceRoutes)

const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/peer-support'

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

const server = http.createServer(app)
const io = new Server(server, { cors: { origin: true, credentials: true } })

function generateToken(user) {
  return jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '7d' })
}

async function getUserFromToken(req) {
  const token = req.cookies && req.cookies.token
  if (!token) return null
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || 'devsecret')
    const user = await User.findById(data.id).select('-passwordHash')
    return user
  } catch (e) {
    return null
  }
}

// Auth: signup
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' })
  try {
    const existing = await User.findOne({ email })
    if (existing) return res.status(400).json({ message: 'Email already in use' })
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, passwordHash })
    const token = generateToken(user)
    res.cookie('token', token, { httpOnly: true, sameSite: 'lax' })
    return res.json({ id: user._id, name: user.name, email: user.email })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
})

// Auth: login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' })
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: 'Invalid credentials' })
    const ok = await bcrypt.compare(password, user.passwordHash)
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' })
    const token = generateToken(user)
    res.cookie('token', token, { httpOnly: true, sameSite: 'lax' })
    return res.json({ id: user._id, name: user.name, email: user.email })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
})

// Auth: logout
app.post('/api/auth/logout', (req, res) => {
  res.clearCookie('token')
  res.json({ ok: true })
})

// whoami
app.get('/api/auth/me', async (req, res) => {
  const user = await getUserFromToken(req)
  if (!user) return res.status(401).json({ message: 'Not authenticated' })
  res.json({ id: user._id, name: user.name, email: user.email })
})

// simple health endpoint (checks server + DB connection state)
app.get('/api/health', async (req, res) => {
  try {
    const state = mongoose.connection.readyState // 0 = disconnected, 1 = connected
    res.json({ ok: true, dbState: state })
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) })
  }
})

// Debug route: reports whether Google OAuth config is present (does NOT expose secrets)
app.get('/api/debug/oauth', (req, res) => {
  const hasClientId = !!process.env.GOOGLE_CLIENT_ID
  const hasClientSecret = !!process.env.GOOGLE_CLIENT_SECRET
  const frontendUrl = process.env.FRONTEND_URL || process.env.FRONTEND || null
  const backendUrl = process.env.BACKEND_URL || `http://localhost:${PORT}`
  res.json({ googleConfigured: hasClientId && hasClientSecret, hasClientId, hasClientSecret, frontendUrl, backendUrl })
})

// Google OAuth: redirect user to Google's OAuth consent screen
app.get('/api/auth/google', (req, res) => {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const redirectUri = `${process.env.BACKEND_URL || `http://localhost:${PORT}`}/api/auth/google/callback`
  if (!clientId) return res.status(500).json({ message: 'Google OAuth not configured' })
  const scope = encodeURIComponent('profile email')
  const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&access_type=offline&prompt=consent`
  return res.redirect(oauthUrl)
})

// Google OAuth callback: exchange code for tokens, fetch profile, create/find user and set cookie
app.get('/api/auth/google/callback', async (req, res) => {
  const code = req.query.code
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const redirectUri = `${process.env.BACKEND_URL || `http://localhost:${PORT}`}/api/auth/google/callback`

  if (!clientId || !clientSecret) {
    return res.status(500).send('Google OAuth not configured on server')
  }

  try {
    // exchange code for tokens
    const tokenResp = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      })
    })
    const tokenData = await tokenResp.json()
    if (!tokenData || !tokenData.access_token) {
      console.error('Google token exchange failed', tokenData)
      return res.status(500).send('Google token exchange failed')
    }

    // fetch user profile
    const profileResp = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    })
    const profile = await profileResp.json()
    if (!profile || !profile.email) {
      console.error('Google profile fetch failed', profile)
      return res.status(500).send('Failed to fetch Google profile')
    }

    // find or create user
    let user = await User.findOne({ email: profile.email })
    if (!user) {
      user = await User.create({ name: profile.name || profile.email.split('@')[0], email: profile.email, passwordHash: '' })
    }

    // create JWT and set cookie
    const token = generateToken(user)
    res.cookie('token', token, { httpOnly: true, sameSite: 'lax' })

    // redirect back to frontend
    const frontend = process.env.FRONTEND_URL || 'http://localhost:5173'
    return res.redirect(frontend)
  } catch (err) {
    console.error('Google OAuth callback error', err)
    return res.status(500).send('Google OAuth failed')
  }
})

// Messages: get by conversation
app.get('/api/conversations/:id/messages', async (req, res) => {
  const { id } = req.params
  const messages = await Message.find({ conversationId: id }).sort({ createdAt: 1 }).limit(100)
  res.json(messages)
})

// Messages: post message (persist and broadcast)
app.post('/api/conversations/:id/messages', async (req, res) => {
  const { id } = req.params
  const { text } = req.body
  const user = await getUserFromToken(req)
  const senderName = user ? user.name : (req.body.senderName || 'Guest')
  try {
    const message = await Message.create({ conversationId: id, senderId: user ? user._id : null, senderName, text })
    io.to(id).emit('message', message)
    res.status(201).json(message)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

// Socket.io: basic room join/send
io.on('connection', (socket) => {
  // optionally parse cookie token from socket.request.headers.cookie
  socket.on('join', (conversationId) => {
    socket.join(conversationId)
  })

  socket.on('leave', (conversationId) => {
    socket.leave(conversationId)
  })

  socket.on('sendMessage', async (payload) => {
    // payload: { conversationId, text, senderName }
    try {
      const msg = await Message.create({ conversationId: payload.conversationId, senderName: payload.senderName || 'Guest', text: payload.text })
      io.to(payload.conversationId).emit('message', msg)
    } catch (err) {
      console.error('socket sendMessage error', err)
    }
  })
})

server.listen(PORT, () => console.log('Server listening on', PORT))
