import { useEffect, useRef, useState } from 'react';
import ChatBox from '../components/ChatBox';
import Navbar from '../components/Navbar';
import api from '../services/api';
import { useAuth } from './useAuth';

const DEMO_CONTACTS = [
  { _id: 'demo1', name: 'Support Volunteer A' },
  { _id: 'demo2', name: 'Support Volunteer B' },
];

function Chat() {
  const { user } = useAuth();
  const [contacts] = useState(DEMO_CONTACTS);
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (selected && user) {
      api.get(`/chat/${selected._id}`).then(({ data }) => setMessages(data)).catch(() => setMessages([]));
    }
  }, [selected, user]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim() || !selected) return;
    try {
      const { data } = await api.post('/chat', { recipientId: selected._id, content: text });
      setMessages([...messages, data]);
    } catch {
      setMessages([...messages, { _id: Date.now(), sender: { name: user?.name }, content: text, createdAt: new Date() }]);
    }
    setText('');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <p className="mt-20 text-center text-slate-500">Please log in to use chat.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <div className="mx-auto flex w-full max-w-5xl flex-1 gap-4 px-4 py-8">
        <aside className="w-56 shrink-0 rounded-2xl bg-white p-4 shadow-sm">
          <h2 className="mb-3 font-bold text-slate-700">Contacts</h2>
          {contacts.map((c) => (
            <button
              key={c._id}
              onClick={() => setSelected(c)}
              className={`mb-1 w-full rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${selected?._id === c._id ? 'bg-rose-600 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              {c.name}
            </button>
          ))}
        </aside>

        <div className="flex flex-1 flex-col rounded-2xl bg-white shadow-sm">
          {selected ? (
            <>
              <div className="border-b border-slate-100 px-5 py-4 font-bold text-slate-800">
                {selected.name}
              </div>
              <ChatBox messages={messages} currentUserId={user._id} bottomRef={bottomRef} />
              <form onSubmit={handleSend} className="flex gap-2 border-t border-slate-100 p-4">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type a message…"
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-rose-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-bold text-white hover:bg-rose-700"
                >
                  Send
                </button>
              </form>
            </>
          ) : (
            <p className="m-auto text-slate-400">Select a contact to start chatting</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
