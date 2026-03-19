import React from 'react'
import ChatBox from '../components/ChatBox'

export default function Chat({ setPage = () => {} }) {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Messages</h1>
          <div className="text-sm text-slate-500">Connect with peers privately</div>
        </div>

        <ChatBox />
      </div>
    </div>
  )
}
