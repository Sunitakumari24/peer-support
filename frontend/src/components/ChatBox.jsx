import React, { useEffect, useRef, useState } from 'react'

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map(s => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-white font-bold">
      {initials}
    </div>
  )
}

export default function ChatBox() {
  const [contacts] = useState([
    { id: 1, name: 'Asha Sharma', last: 'See you at 6', online: true },
    { id: 2, name: 'Ravi Kumar', last: 'Thanks, that helped', online: false },
    { id: 3, name: 'Group: Study Buddies', last: 'Meeting tomorrow', online: true }
  ])

  const [activeId, setActiveId] = useState(1)

  const [conversations, setConversations] = useState({
    1: [
      { fromMe: false, text: 'Hi, how are you?', time: '09:12' },
      { fromMe: true, text: 'I am fine — thanks!', time: '09:13' }
    ],
    2: [
      { fromMe: false, text: 'Can you share the notes?', time: 'Yesterday' }
    ],
    3: [
      { fromMe: false, text: 'Start at 7pm', time: 'Today' }
    ]
  })

  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  const activeConv = conversations[activeId] || []

  useEffect(() => {
    // scroll to bottom on conversation change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [activeId])

  useEffect(() => {
    // scroll when messages change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [conversations, activeId])

  function sendMessage() {
    const text = input.trim()
    if (!text) return

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setConversations(prev => ({
      ...prev,
      [activeId]: [...(prev[activeId] || []), { fromMe: true, text, time }]
    }))
    setInput('')

    // simple auto-reply for demo
    setTimeout(() => {
      setConversations(prev => ({
        ...prev,
        [activeId]: [...(prev[activeId] || []), { fromMe: false, text: 'Thanks for your message — we will respond soon', time }]
      }))
    }, 900)
  }

  return (
  <div className="mx-auto flex h-[72vh] max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg min-h-0">
      {/* Contacts sidebar */}
      <aside className="w-80 border-r p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Chats</h3>
          <button className="rounded-full bg-rose-600 px-3 py-1 text-white text-sm">New</button>
        </div>

        <div className="space-y-3 overflow-auto" style={{ maxHeight: '58vh' }}>
          {contacts.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`flex w-full items-center gap-3 rounded-lg p-2 text-left transition ${activeId === c.id ? 'bg-rose-50' : 'hover:bg-slate-50'}`}
            >
              <Avatar name={c.name} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs text-slate-400">{c.online ? 'online' : ''}</div>
                </div>
                <div className="mt-1 text-sm text-slate-500 truncate">{c.last}</div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Conversation area */}
  <main className="flex flex-1 flex-col min-h-0">
        <div className="flex items-center gap-4 border-b p-4">
          <div className="flex items-center gap-3">
            <Avatar name={contacts.find(c => c.id === activeId)?.name || 'User'} />
            <div>
              <div className="font-bold">{contacts.find(c => c.id === activeId)?.name}</div>
              <div className="text-xs text-slate-500">{contacts.find(c => c.id === activeId)?.online ? 'online' : 'last seen recently'}</div>
            </div>
          </div>
          <div className="ml-auto text-sm text-slate-500">WhatsApp-like chat</div>
        </div>

  <div ref={scrollRef} className="flex-1 overflow-auto p-6 bg-slate-50 min-h-0">
          <div className="mx-auto max-w-3xl">
            {activeConv.map((m, i) => (
              <div key={i} className={`mb-4 flex ${m.fromMe ? 'justify-end' : 'justify-start'}`}>
                <div className={`${m.fromMe ? 'bg-rose-600 text-white' : 'bg-white text-slate-800'} max-w-[70%] rounded-xl px-4 py-3 shadow`}>{m.text}
                  <div className="mt-1 text-right text-xs text-white/80">{m.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t p-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') sendMessage() }}
                placeholder="Type a message"
                className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-rose-400"
              />
              <button onClick={sendMessage} className="rounded-full bg-rose-600 px-4 py-2 text-white">Send</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
