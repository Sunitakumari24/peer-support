const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'users.json');

function ensureDataFile() {
  if (!fs.existsSync(dataFilePath)) {
    fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
    fs.writeFileSync(dataFilePath, '[]\n', 'utf8');
  }
}

function readUsers() {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(dataFilePath, 'utf8');
    const parsed = JSON.parse(raw || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2) + '\n', 'utf8');
}

function findUserByEmail(email) {
  const users = readUsers();
  const normalized = String(email || '').trim().toLowerCase();
  return users.find((u) => String(u.email || '').toLowerCase() === normalized) || null;
}

function createUser({ name, email, password }) {
  const users = readUsers();
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  writeUsers(users);
  return newUser;
}

function updateUserById(userId, updates) {
  const users = readUsers();
  const index = users.findIndex((u) => String(u.id) === String(userId));
  if (index === -1) return null;

  users[index] = {
    ...users[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  writeUsers(users);
  return users[index];
}

module.exports = {
  readUsers,
  findUserByEmail,
  createUser,
  updateUserById,
};
