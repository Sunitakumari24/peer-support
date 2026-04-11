import React, { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import { askAi } from '../services/api'
import { useAuth } from './AuthContext'

export default function Chat() {
  const { user } = useAuth()
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'peer',
      time: '09:12 AM',
      body: 'Hi! Main bhi similar phase se guzar chuki hoon. Aaj kaisa feel kar rahe ho?',
    },
    {
      id: 2,
      role: 'you',
      time: '09:13 AM',
      body: 'Thoda anxious hoon, but baat karke better lagta hai.',
    },
  ])

  const quickReplies = useMemo(
    () => [
      'Aaj mood theek nahi hai',
      'Mujhe career stress hai',
      'Kya hum breathing exercise try karein?',
    ],
    []
  )

  const sendMessage = async (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage = {
      id: Date.now(),
      role: 'you',
      time: now,
      body: trimmed,
    };
    setMessages(prev => [...prev, userMessage]);
    setText('');

    try {
      const res = await askAi(trimmed, user?.id);
      const peerReply = {
        id: Date.now() + 1,
        role: 'peer',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        body: res.reply || 'Sorry, AI response not available.',
      };
      setMessages(prev => [...prev, peerReply]);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: Date.now() + 2,
        role: 'peer',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        body: 'Sorry, AI se reply nahi aa paaya.',
      }]);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-10 lg:grid-cols-[300px_1fr]">
        <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-lg font-extrabold text-rose-400">Active Support Rooms</h2>
          <p className="mt-1 text-sm text-slate-400">Choose any safe circle and start sharing.</p>

          <div className="mt-4 space-y-3">
            <button className="w-full rounded-xl border border-rose-500/50 bg-rose-500/10 px-4 py-3 text-left">
              <div className="font-bold">Anxiety Support</div>
              <div className="text-xs text-slate-400">23 members online</div>
            </button>
            <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-left hover:border-slate-500">
              <div className="font-bold">Career Talk</div>
              <div className="text-xs text-slate-400">11 members online</div>
            </button>
            <button className="w-full rounded-xl border border-slate-700 px-4 py-3 text-left hover:border-slate-500">
              <div className="font-bold">Women Circle</div>
              <div className="text-xs text-slate-400">16 members online</div>
            </button>
          </div>
        </aside>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h1 className="text-2xl font-extrabold">Peer Chat</h1>
              <p className="text-sm text-slate-400">Private, respectful, and moderated support space.</p>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300">Secure room</span>
          </div>

          <div className="mb-4 h-[380px] space-y-3 overflow-y-auto rounded-xl bg-slate-950/60 p-4">
            {messages.map(msg => (
              <div key={msg.id} className={`max-w-[80%] rounded-xl px-4 py-3 ${msg.role === 'you' ? 'ml-auto bg-rose-500 text-white' : 'bg-slate-800 text-slate-100'}`}>
                <p className="text-sm">{msg.body}</p>
                <p className={`mt-1 text-[11px] ${msg.role === 'you' ? 'text-rose-100' : 'text-slate-400'}`}>{msg.time}</p>
              </div>
            ))}
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {quickReplies.map(reply => (
              <button
                key={reply}
                onClick={() => sendMessage(reply)}
                className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 hover:border-rose-400 hover:text-rose-300"
              >
                {reply}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(text)
            }}
            className="flex items-center gap-3"
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your message..."
              className="w-full rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-rose-400"
            />
            <button
              type="submit"
              className="rounded-full bg-rose-600 px-5 py-3 text-sm font-bold text-white hover:bg-rose-700"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     