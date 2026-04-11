/**
 * OpenAI Service Wrapper
 * Handles all OpenAI API interactions
 */

const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateResponse(prompt) {
  try {
    const message = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });
    return message.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI Error:', error.message);
    throw error;
  }
}

module.exports = {
  generateResponse,
};
