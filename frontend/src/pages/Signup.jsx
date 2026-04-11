// import React, { useState } from 'react'
import { useState } from 'react'
import { useAuth } from './AuthContext'

export default function Signup({ setPage = () => {} }) {
  const { signup } = useAuth() || {}
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function submit(e) {
    e.preventDefault()
    setError('')
    try {
      await signup(name, email, password)
      setPage('home')
    } catch (err) {
      setError(err.message || String(err))
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-lg text-slate-100">
        <h1 className="text-2xl font-extrabold text-center mb-2 text-rose-400">Create account</h1>
        <p className="text-center text-sm text-slate-300 mb-6">Fill in your details to create a new account</p>

        <form onSubmit={submit} className="space-y-4">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />

          {error && <div className="text-sm text-red-400">{error}</div>}

          <button type="submit" className="w-full rounded-full px-6 py-3 font-semibold text-slate-900" style={{ background: '#fb7185', boxShadow: '0 8px 30px rgba(251,113,133,0.45)' }}>Create account</button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-400">Already have an account? <button onClick={() => setPage('login')} className="text-rose-400 underline">Sign in</button></div>
      </div>
    </div>
  )
}