import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const demoMessages = [
  { id: 1, from: 'mentor', name: 'Priya Sharma', text: 'Hello! Main aapki kaise madad kar sakti hoon aaj?', time: '10:00 AM' },
  { id: 2, from: 'user', name: 'You', text: 'Mujhe anxiety ke baare mein baat karni hai.', time: '10:01 AM' },
  { id: 3, from: 'mentor', name: 'Priya Sharma', text: 'Bilkul, yahan safe space hai. Kya chal raha hai aapke saath?', time: '10:01 AM' },
];

const Chat = () => {
  const [messages, setMessages] = useState(demoMessages);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: 'user', name: 'You', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 flex flex-col">
        {/* Chat header */}
        <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-100">
          <Link to="/" className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </Link>
          <div className="w-12 h-12 bg-[#FF5E14] rounded-full flex items-center justify-center text-white font-black text-xl">P</div>
          <div>
            <h2 className="font-black text-[#0A1128]">Priya Sharma</h2>
            <p className="text-xs text-green-500 font-bold">● Online — Peer Mentor</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 min-h-[400px] max-h-[500px] pr-2">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] px-5 py-4 rounded-2xl shadow-sm ${msg.from === 'user' ? 'bg-[#FF5E14] text-white rounded-br-none' : 'bg-slate-100 text-slate-800 rounded-bl-none'}`}>
                <p className="text-sm font-bold leading-relaxed">{msg.text}</p>
                <p className={`text-[10px] mt-1 ${msg.from === 'user' ? 'text-orange-100' : 'text-slate-400'}`}>{msg.time}</p>
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <form onSubmit={send} className="mt-6 flex items-center space-x-3 bg-slate-50 rounded-2xl px-4 py-3 border border-slate-200">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Apna message likhein..."
            className="flex-1 bg-transparent outline-none text-sm font-bold text-slate-700 placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="w-10 h-10 bg-[#FF5E14] rounded-xl flex items-center justify-center text-white hover:bg-[#e65512] transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>

      <footer className="bg-[#0A1128] text-white py-8 px-6 text-center">
        <p className="text-slate-400 text-sm">© 2024 PeerSupport. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Chat;
