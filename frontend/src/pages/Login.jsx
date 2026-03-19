import React, { useState } from 'react'
import { useAuth } from './AuthContext'

export default function Login({ setPage = () => {} }) {
  const [mode, setMode] = useState('login') // 'login' or 'signup'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  const { login, signup } = useAuth() || {}

  async function submit(e) {
    e.preventDefault()
    setError('')
    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        await signup(name, email, password)
      }
      // after auth, show the main site
      setPage('home')
    } catch (err) {
      setError(err.message || String(err))
    }
  }

  function continueWithGoogle() {
    const oauthUrl = import.meta.env.VITE_BACKEND_URL ? `${import.meta.env.VITE_BACKEND_URL}/api/auth/google` : 'http://localhost:5000/api/auth/google'
    window.open(oauthUrl, '_blank', 'width=500,height=600')
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {/* decorative neon corner bars */}
        <div className="absolute -left-6 top-10 h-32 w-1 rounded bg-rose-600/90 transform -rotate-6" />
        <div className="absolute right-0 -top-6 h-1 w-24 rounded bg-rose-600/80" />
        <div className="absolute left-6 -bottom-6 h-1 w-28 rounded bg-rose-600/80" />

        <div className="relative rounded-2xl bg-gray-800 p-8 shadow-lg text-slate-100" style={{ borderRadius: '24px' }}>
          <h1 className="text-2xl font-extrabold text-center mb-1 text-rose-400">{mode === 'login' ? 'Login Form' : 'Create account'}</h1>
          <p className="text-center text-sm text-slate-300 mb-6">{mode === 'login' ? 'Sign in to your account' : 'Create your account to continue'}</p>

          <form onSubmit={submit} className="space-y-4">
            {mode === 'signup' && (
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
            )}
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />

            <div className="flex items-center justify-between text-sm text-slate-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="accent-rose-500" />
                Remember me
              </label>
              <button type="button" className="text-rose-400 underline text-sm">Forget password ?</button>
            </div>

            {error && <div className="text-sm text-red-400">{error}</div>}

            <button type="submit" className="w-full rounded-full px-6 py-3 font-semibold text-slate-900" style={{ background: '#fb7185', boxShadow: '0 8px 30px rgba(251,113,133,0.45)' }}>{mode === 'login' ? 'Login' : 'Create account'}</button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            {mode === 'login' ? (
              <>Dont have an account ? <button onClick={() => setMode('signup')} className="text-rose-400 underline">Click Here</button></>
            ) : (
              <>Already have an account ? <button onClick={() => setMode('login')} className="text-rose-400 underline">Click Here</button></>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
