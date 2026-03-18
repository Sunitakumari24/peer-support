import { useState } from 'react'
import { useAuth } from '../pages/AuthContext'
import api from '../services/api'
import MessageBubble from './MessageBubble'

function ChatBox({ room, messages, onNewMessage }) {
	const { user } = useAuth()
	const [text, setText] = useState('')

	const handleSend = async (e) => {
		e.preventDefault()
		if (!text.trim()) return
		try {
			const { data } = await api.post('/chat', { room, text })
			onNewMessage(data)
			setText('')
		} catch {}
	}

	return (
		<div className="flex flex-col rounded-2xl bg-white shadow">
			<div className="flex-1 overflow-y-auto p-4 space-y-2" style={{ minHeight: 200, maxHeight: 400 }}>
				{messages.length === 0 ? (
					<p className="text-center text-sm text-slate-400">No messages yet.</p>
				) : (
					messages.map((msg) => (
						<MessageBubble
							key={msg._id}
							message={msg}
							isOwn={msg.sender?._id === user?._id || msg.sender === user?._id}
						/>
					))
				)}
			</div>
			{user && (
				<form onSubmit={handleSend} className="flex gap-2 border-t border-slate-100 p-3">
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Type a message…"
						className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-rose-500"
					/>
					<button
						type="submit"
						disabled={!text.trim()}
						className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-rose-700 disabled:opacity-50"
					>
						Send
					</button>
				</form>
			)}
		</div>
	)
}

export default ChatBox
