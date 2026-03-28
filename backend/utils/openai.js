// backend/utils/openai.js
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getOpenAiChatCompletion(message) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful, supportive peer chat assistant.' },
      { role: 'user', content: message },
    ],
    max_tokens: 200,
    temperature: 0.7,
  });
  return completion.choices[0].message.content;
}

module.exports = { getOpenAiChatCompletion };