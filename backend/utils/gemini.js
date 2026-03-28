// backend/utils/gemini.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function getGeminiChatCompletion(message) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const result = await model.generateContent([message]);
  return result.response.text();
}

module.exports = { getGeminiChatCompletion };
