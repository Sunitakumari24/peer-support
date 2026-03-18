import MessageBubble from './MessageBubble';

function ChatBox({ messages, currentUserId, bottomRef }) {
  return (
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-5 py-4">
      {messages.length === 0 ? (
        <p className="m-auto text-sm text-slate-400">No messages yet. Say hello!</p>
      ) : (
        messages.map((msg) => (
          <MessageBubble
            key={msg._id}
            message={msg}
            isOwn={msg.sender?._id === currentUserId || msg.sender === currentUserId}
          />
        ))
      )}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatBox;
