import React, { useState } from 'react';

const initialMessages = [
  {
    role: 'bot',
    text: 'Hello! I am your AI Support Buddy. How are you feeling today? 💜',
  },
];

export default function AISupportBuddy() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      // Replace this with your real AI API endpoint
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful support assistant.' },
            ...messages.map((m) => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text })),
            { role: 'user', content: input },
          ],
        }),
      });
      const data = await res.json();
      const aiText = data.choices?.[0]?.message?.content || 'Sorry, I could not understand.';
      setMessages((prev) => [...prev, { role: 'bot', text: aiText }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'bot', text: 'Sorry, there was an error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-full rounded-2xl bg-white shadow-2xl border border-purple-400">
      <div className="flex items-center justify-between bg-purple-600 px-4 py-3 rounded-t-2xl">
        <span className="font-bold text-white">AI Support Buddy</span>
        <button className="text-white text-xl font-bold" onClick={() => window.location.reload()}>&times;</button>
      </div>
      <div className="p-4 h-64 overflow-y-auto bg-white">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-3 ${msg.role === 'bot' ? 'text-left' : 'text-right'}`}>
            <span className={`inline-block rounded-lg px-3 py-2 ${msg.role === 'bot' ? 'bg-purple-100 text-purple-800' : 'bg-purple-600 text-white'}`}>{msg.text}</span>
          </div>
        ))}
        {loading && <div className="text-purple-400 text-sm">AI is typing...</div>}
      </div>
      <form onSubmit={sendMessage} className="flex items-center border-t px-2 py-2 bg-white">
        <input
          className="flex-1 rounded-full px-3 py-2 text-sm border border-purple-200 focus:outline-none"
          placeholder="Talk to AI Buddy..."
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="ml-2 bg-purple-600 text-white rounded-full p-2" disabled={loading || !input.trim()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
    </div>
  );
}
