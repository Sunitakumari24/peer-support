import React from 'react';

const MessageBubble = ({ text, time, isOwn, senderName }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[75%] px-5 py-4 rounded-2xl shadow-sm ${
          isOwn
            ? 'bg-[#FF5E14] text-white rounded-br-none'
            : 'bg-slate-100 text-slate-800 rounded-bl-none'
        }`}
      >
        {!isOwn && senderName && (
          <p className="text-[10px] font-black uppercase tracking-widest text-[#FF5E14] mb-1">{senderName}</p>
        )}
        <p className="text-sm font-bold leading-relaxed">{text}</p>
        {time && (
          <p className={`text-[10px] mt-1 ${isOwn ? 'text-orange-100' : 'text-slate-400'}`}>{time}</p>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
