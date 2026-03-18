import { useState } from 'react'
import MessageBubble from './MessageBubble'

export default function ChatBox({ roomName, messages, onSend }) {
	const [text, setText] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		const trimmed = text.trim()
		if (!trimmed) return
		onSend(trimmed)
		setText('')
	}

	return (
		<div className="flex h-full flex-col rounded-2xl bg-slate-50 shadow-sm">
			<div className="border-b border-slate-200 bg-white px-5 py-3 rounded-t-2xl">
				<h3 className="text-base font-bold text-slate-800">{roomName}</h3>
			</div>

			<div className="flex-1 overflow-y-auto px-4 py-4">
				{messages.length === 0 ? (
					<p className="text-center text-sm text-slate-400 mt-8">
						No messages yet. Start the conversation!
					</p>
				) : (
					messages.map((msg, i) => (
						<MessageBubble key={i} message={msg} isOwn={msg.isOwn} />
					))
				)}
			</div>

			<form
				onSubmit={handleSubmit}
				className="flex items-center gap-3 border-t border-slate-200 bg-white px-4 py-3 rounded-b-2xl"
			>
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Type a message…"
					className="flex-1 rounded-full border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-rose-500"
				/>
				<button
					type="submit"
					className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-rose-700 transition"
				>
					Send
				</button>
			</form>
		</div>
	)
}
