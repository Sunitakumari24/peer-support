# Core Module Documentation

## Structure

```
core/
├── api/              # API utilities
│   ├── response.js   # Standard response handlers
│   └── errors.js     # Custom error classes
├── services/         # External service wrappers
│   ├── gemini.js     # Gemini AI service
│   ├── openai.js     # OpenAI service
│   └── index.js      # Service exports
├── storage/          # Data storage utilities
│   └── index.js      # File storage operations
├── config/           # Configuration management
│   └── index.js      # Centralized config
└── index.js          # Main core export
```

## Usage Examples

### 1. API Response Handler

```javascript
const { response } = require('./core');

// Success response
response.sendSuccess(res, { user: userData }, 201, 'User created');

// Error response
response.sendError(res, error, 500, 'Failed to create user');

// Paginated response
response.sendPaginated(res, users, { 
  total: 100, 
  page: 1, 
  limit: 10, 
  pages: 10 
});
```

### 2. Error Handling

```javascript
const { errors } = require('./core');

// Use specific error types
throw new errors.ValidationError('Email is invalid');
throw new errors.NotFoundError('User');
throw new errors.ConflictError('Email already registered');
```

### 3. Services

```javascript
const { services } = require('./core');

// Gemini AI
const response = await services.geminiService.generateResponse('Your prompt here');

// OpenAI
const response = await services.openaiService.generateResponse('Your prompt here');
```

### 4. Storage

```javascript
const { storage } = require('./core');

// Read file
const data = storage.readFile('users.json');

// Write file
storage.writeFile('users.json', data);
```

### 5. Configuration

```javascript
const { config } = require('./core');

console.log(config.PORT);  // 5000
console.log(config.NODE_ENV);  // development
```

## Benefits

✅ **Centralized** - All core functionality in one place  
✅ **Reusable** - Easy to import and use across the app  
✅ **Maintainable** - Changes in one place affect entire app  
✅ **Consistent** - Standard response and error formats  
✅ **Scalable** - Easy to add new services and utilities  

## Migration Guide

To migrate existing controllers, replace:

```javascript
// Before
const { sendSuccess, sendError } = require('../utils/helpers');

// After
const { response } = require('../core');
response.sendSuccess(res, data);
response.sendError(res, error);
```
