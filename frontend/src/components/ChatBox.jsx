import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import MessageBubble from './MessageBubble';

const ChatBox = ({ messages = [], onSend, placeholder = 'Message likhein...' }) => {
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    onSend?.(text);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <MessageBubble
            key={idx}
            text={msg.text}
            time={msg.time}
            isOwn={msg.isOwn}
            senderName={msg.senderName}
          />
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-center space-x-3 bg-slate-50 rounded-2xl px-4 py-3 border border-slate-200 m-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
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
  );
};

export default ChatBox;
