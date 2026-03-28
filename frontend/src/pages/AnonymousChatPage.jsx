import React, { useState } from 'react';

// Dummy notification system (in-memory, for demo only)
const notifications = {};

function AnonymousChatBox({ myEmail }) {
  const [step, setStep] = useState('input'); // input | waiting | chatting
  const [targetEmail, setTargetEmail] = useState('');
  const [notificationSent, setNotificationSent] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // Simulate sending notification
  function handleSendRequest(e) {
    e.preventDefault();
    if (!targetEmail.trim()) return;
    notifications[targetEmail] = {
      from: myEmail,
      onAccept: () => {
        setAccepted(true);
        setStep('chatting');
      },
    };
    setNotificationSent(true);
    setStep('waiting');
  }

  // Simulate accept (for demo: user pastes their email and clicks accept)
  function handleAccept() {
    if (notifications[myEmail]) {
      notifications[myEmail].onAccept();
      delete notifications[myEmail];
    }
  }

  function handleSendMessage(e) {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, { from: 'me', text: message }]);
    setMessage('');
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mt-10">
      <h2 className="text-xl font-bold mb-4">Anonymous Chat</h2>
      {step === 'input' && (
        <form onSubmit={handleSendRequest} className="flex flex-col gap-3">
          <label className="text-sm font-semibold">Paste user email to chat anonymously:</label>
          <input
            type="email"
            value={targetEmail}
            onChange={e => setTargetEmail(e.target.value)}
            className="border rounded px-3 py-2"
            placeholder="Enter user's email"
            required
          />
          <button type="submit" className="bg-rose-600 text-white rounded px-4 py-2 font-bold">Send Request</button>
        </form>
      )}
      {step === 'waiting' && (
        <div className="text-center mt-4">
          <p className="mb-2">Waiting for <b>{targetEmail}</b> to accept your chat request...</p>
          <p className="text-xs text-slate-500">(For demo: ask the other user to open this page and accept with their email)</p>
        </div>
      )}
      {step === 'chatting' && (
        <div>
          <div className="mb-4 max-h-48 overflow-y-auto border rounded p-2 bg-slate-50">
            {messages.length === 0 && <div className="text-slate-400 text-sm">No messages yet.</div>}
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.from === 'me' ? 'text-right' : 'text-left'}>
                <span className="inline-block bg-rose-100 text-rose-800 rounded px-3 py-1 m-1 text-sm">
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="flex-1 border rounded px-3 py-2"
              placeholder="Type your message..."
            />
            <button type="submit" className="bg-rose-600 text-white rounded px-4 py-2 font-bold">Send</button>
          </form>
        </div>
      )}
      <div className="mt-8 border-t pt-4 text-xs text-slate-500">
        <div className="mb-2 font-semibold">For demo/testing:</div>
        <div>
          If you received a chat request, paste your email below and click <b>Accept</b> to connect anonymously.
        </div>
        <form onSubmit={e => { e.preventDefault(); handleAccept(); }} className="flex gap-2 mt-2">
          <input
            type="email"
            value={myEmail}
            onChange={() => {}}
            className="border rounded px-2 py-1 text-xs"
            readOnly
          />
          <button type="submit" className="bg-green-600 text-white rounded px-3 py-1 text-xs">Accept</button>
        </form>
      </div>
    </div>
  );
}

export default function AnonymousChatPage() {
  const [myEmail, setMyEmail] = useState('');
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-lg mx-auto py-10">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-rose-700">Anonymous Chat Demo</h1>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Your Email (for demo):</label>
          <input
            type="email"
            value={myEmail}
            onChange={e => setMyEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your email"
            required
          />
        </div>
        {myEmail && <AnonymousChatBox myEmail={myEmail} />}
      </div>
    </div>
  );
}
