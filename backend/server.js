require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const connectDB = require('./ config/db');

const authRoutes = require('./ routes/authRoutes');
const chatRoutes = require('./ routes/chatRoutes');
const forumRoutes = require('./ routes/forumRoutes');
const resourceRoutes = require('./ routes/resourceRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/chat', apiLimiter, chatRoutes);
app.use('/api/forum', apiLimiter, forumRoutes);
app.use('/api/resources', apiLimiter, resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
