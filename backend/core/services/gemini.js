/**
 * Gemini AI Service Wrapper
 * Handles all Gemini API interactions
 */

const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_KEY);

async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini Error:', error.message);
    throw error;
  }
}

module.exports = {
  generateResponse,
};
