import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from './AuthContext'
import api from '../services/api'
import MessageBubble from '../components/MessageBubble'

const ROOMS = [
	{ id: 'general', label: 'General' },
	{ id: 'anxiety', label: 'Anxiety' },
	{ id: 'depression', label: 'Depression' },
	{ id: 'relationships', label: 'Relationships' },
]

function Chat() {
	const { user } = useAuth()
	const [room, setRoom] = useState('general')
	const [messages, setMessages] = useState([])
	const [text, setText] = useState('')
	const [loading, setLoading] = useState(false)
	const bottomRef = useRef(null)

	const fetchMessages = async () => {
		setLoading(true)
		try {
			const { data } = await api.get(`/chat/${room}`)
			setMessages(data)
		} catch {
			setMessages([])
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => { if (user) fetchMessages() }, [room, user])

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const handleSend = async (e) => {
		e.preventDefault()
		if (!text.trim()) return
		try {
			const { data } = await api.post('/chat', { room, text })
			setMessages((prev) => [...prev, data])
			setText('')
		} catch {}
	}

	if (!user) {
		return (
			<div className="min-h-screen bg-slate-50">
				<Navbar />
				<div className="flex h-96 items-center justify-center">
					<p className="text-slate-500">Please log in to use the chat.</p>
				</div>
			</div>
		)
	}

	return (
		<div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
			<Navbar />
			<div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 px-4 py-6 md:flex-row">
				<aside className="flex flex-row gap-2 md:w-48 md:flex-col">
					<h2 className="hidden text-sm font-extrabold uppercase tracking-widest text-slate-500 md:block">
						Rooms
					</h2>
					{ROOMS.map((r) => (
						<button
							key={r.id}
							onClick={() => setRoom(r.id)}
							className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${room === r.id ? 'bg-rose-600 text-white' : 'bg-white text-slate-700 shadow-sm hover:bg-rose-50'}`}
						>
							{r.label}
						</button>
					))}
				</aside>

				<div className="flex flex-1 flex-col rounded-2xl bg-white shadow">
					<div className="border-b border-slate-100 px-5 py-4">
						<h2 className="text-lg font-bold text-slate-800">
							#{room} room
						</h2>
					</div>

					<div className="flex-1 overflow-y-auto p-5 space-y-2" style={{ minHeight: 300, maxHeight: '60vh' }}>
						{loading ? (
							<p className="text-center text-slate-500">Loading messages…</p>
						) : messages.length === 0 ? (
							<p className="text-center text-slate-400 text-sm">No messages yet. Say hello! 👋</p>
						) : (
							messages.map((msg) => (
								<MessageBubble
									key={msg._id}
									message={msg}
									isOwn={msg.sender?._id === user._id || msg.sender === user._id}
								/>
							))
						)}
						<div ref={bottomRef} />
					</div>

					<form onSubmit={handleSend} className="flex gap-3 border-t border-slate-100 p-4">
						<input
							type="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder="Type a message…"
							className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-rose-500"
						/>
						<button
							type="submit"
							disabled={!text.trim()}
							className="rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700 disabled:opacity-50"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Chat
