export default function MessageBubble({ message, isOwn }) {
	return (
		<div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3`}>
			<div
				className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm shadow-sm lg:max-w-md ${
					isOwn
						? 'rounded-br-sm bg-rose-600 text-white'
						: 'rounded-bl-sm bg-white text-slate-800'
				}`}
			>
				{!isOwn && (
					<p className="mb-1 text-xs font-bold text-rose-600">{message.sender}</p>
				)}
				<p className="leading-relaxed">{message.text}</p>
				<p
					className={`mt-1 text-right text-[10px] ${
						isOwn ? 'text-rose-200' : 'text-slate-400'
					}`}
				>
					{message.time}
				</p>
			</div>
		</div>
	)
}
