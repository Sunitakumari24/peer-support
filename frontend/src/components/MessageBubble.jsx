import React, { useState } from 'react';

// Simple avatar generator (initials or emoji)
function Avatar({ role }) {
	return (
		<div style={{
			width: 36, height: 36, borderRadius: '50%', background: role === 'you' ? '#6366f1' : '#f472b6',
			display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18
		}}>
			{role === 'you' ? '🧑' : '👩‍💼'}
		</div>
	);
}

// Emoji reactions list
const EMOJI_LIST = ['❤️', '👍', '😂', '😮', '😢', '🙏'];

export default function MessageBubble({ message, onReact }) {
	const [showReactions, setShowReactions] = useState(false);

	// Bubble alignment
	const isYou = message.role === 'you';

	return (
		<div style={{ display: 'flex', flexDirection: isYou ? 'row-reverse' : 'row', alignItems: 'flex-end', marginBottom: 12 }}>
			<Avatar role={message.role} />
			<div style={{ margin: isYou ? '0 12px 0 0' : '0 0 0 12px', maxWidth: 340, position: 'relative' }}>
				<div
					style={{
						background: isYou ? 'linear-gradient(90deg,#6366f1,#818cf8)' : 'linear-gradient(90deg,#f472b6,#fb7185)',
						color: '#fff',
						borderRadius: 18,
						borderBottomRightRadius: isYou ? 4 : 18,
						borderBottomLeftRadius: isYou ? 18 : 4,
						padding: '10px 16px',
						fontSize: 16,
						boxShadow: '0 2px 8px #0002',
						wordBreak: 'break-word',
						position: 'relative',
						cursor: 'pointer',
					}}
					onMouseEnter={() => setShowReactions(true)}
					onMouseLeave={() => setShowReactions(false)}
				>
					{message.body}
					{/* Emoji reactions below message */}
					{message.reactions && message.reactions.length > 0 && (
						<div style={{ marginTop: 6, display: 'flex', gap: 4 }}>
							{message.reactions.map((e, i) => (
								<span key={i} style={{ fontSize: 18 }}>{e}</span>
							))}
						</div>
					)}
				</div>
				{/* Reaction picker on hover */}
				{showReactions && (
					<div style={{ position: 'absolute', bottom: -36, left: isYou ? 'auto' : 0, right: isYou ? 0 : 'auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #0002', padding: '4px 8px', display: 'flex', gap: 6, zIndex: 10 }}>
						{EMOJI_LIST.map((emoji) => (
							<span
								key={emoji}
								style={{ fontSize: 20, cursor: 'pointer' }}
								onClick={() => onReact && onReact(message.id, emoji)}
							>{emoji}</span>
						))}
					</div>
				)}
				<div style={{ fontSize: 11, color: '#aaa', marginTop: 2, textAlign: isYou ? 'right' : 'left' }}>{message.time}</div>
			</div>
		</div>
	);
}
