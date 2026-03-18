import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ChatBox from '../components/ChatBox'
import { useAuth } from '../context/AuthContext'

const ROOMS = [
	{ id: 'general', name: '💬 General Support', description: 'Open chat for everyone' },
	{ id: 'anxiety', name: '🌙 Anxiety & Stress', description: 'Share coping strategies' },
	{ id: 'students', name: '🎓 Student Corner', description: 'Academic & campus life' },
	{ id: 'workplace', name: '💼 Workplace Wellness', description: 'Work-life balance' },
]

export default function Chat() {
	const { user } = useAuth()
	const [activeRoom, setActiveRoom] = useState(ROOMS[0])
	const [roomMessages, setRoomMessages] = useState({})

	if (!user) {
		return <Navigate to="/login" replace />
	}

	const messages = roomMessages[activeRoom.id] ?? []

	function handleSend(text) {
		const msg = {
			sender: user.name,
			text,
			time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
			isOwn: true,
		}
		setRoomMessages((prev) => ({
			...prev,
			[activeRoom.id]: [...(prev[activeRoom.id] ?? []), msg],
		}))
	}

	return (
		<div className="flex min-h-screen flex-col bg-slate-50">
			<Navbar />

			<div className="flex flex-1 overflow-hidden">
				{/* Sidebar */}
				<aside className="w-64 shrink-0 border-r border-slate-200 bg-white px-3 py-5">
					<h2 className="mb-4 px-3 text-xs font-extrabold uppercase tracking-widest text-slate-400">
						Chat Rooms
					</h2>
					<ul className="space-y-1">
						{ROOMS.map((room) => (
							<li key={room.id}>
								<button
									onClick={() => setActiveRoom(room)}
									className={`w-full rounded-xl px-3 py-2.5 text-left text-sm transition ${
										activeRoom.id === room.id
											? 'bg-rose-50 font-bold text-rose-700'
											: 'font-medium text-slate-700 hover:bg-slate-50'
									}`}
								>
									<p>{room.name}</p>
									<p className="text-xs font-normal text-slate-400">{room.description}</p>
								</button>
							</li>
						))}
					</ul>
				</aside>

				{/* Chat area */}
				<main className="flex flex-1 flex-col p-4">
					<div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
						<ChatBox
							roomName={activeRoom.name}
							messages={messages}
							onSend={handleSend}
						/>
					</div>
				</main>
			</div>
		</div>
	)
}
