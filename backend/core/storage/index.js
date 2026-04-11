/**
 * Storage Management
 * Handles persistent data operations
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', '..', 'data');

/**
 * Ensure data directory exists
 */
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

/**
 * Read JSON file from storage
 */
function readFile(filename) {
  ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);
  
  try {
    if (!fs.existsSync(filepath)) {
      return null;
    }
    const data = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(data || '{}');
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    return null;
  }
}

/**
 * Write JSON file to storage
 */
function writeFile(filename, data) {
  ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);
  
  try {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing ${filename}:`, error.message);
    return false;
  }
}

module.exports = {
  ensureDataDir,
  readFile,
  writeFile,
};
