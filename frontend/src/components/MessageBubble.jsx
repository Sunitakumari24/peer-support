function MessageBubble({ message, isOwn }) {
	return (
		<div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
			<div
				className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm shadow-sm lg:max-w-md ${
					isOwn
						? 'rounded-br-sm bg-rose-600 text-white'
						: 'rounded-bl-sm bg-slate-100 text-slate-800'
				}`}
			>
				{!isOwn && (
					<p className="mb-1 text-xs font-semibold text-rose-600">
						{message.sender?.name || 'Anonymous'}
					</p>
				)}
				<p>{message.text}</p>
				<p className={`mt-1 text-right text-xs ${isOwn ? 'text-rose-200' : 'text-slate-400'}`}>
					{new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
				</p>
			</div>
		</div>
	)
}

export default MessageBubble
