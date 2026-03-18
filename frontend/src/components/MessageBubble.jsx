function MessageBubble({ message, isOwn }) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs rounded-2xl px-4 py-2 text-sm shadow-sm ${
          isOwn ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-800'
        }`}
      >
        {!isOwn && (
          <p className="mb-1 text-xs font-semibold text-rose-600">
            {message.sender?.name}
          </p>
        )}
        <p>{message.content}</p>
        <p className={`mt-1 text-right text-[10px] ${isOwn ? 'text-rose-200' : 'text-slate-400'}`}>
          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
}

export default MessageBubble;
