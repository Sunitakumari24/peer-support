import React, { useState } from 'react'
import { useAuth } from './AuthContext'

export default function Login({ setPage = () => {} }) {
  const { login, fetchMe } = useAuth() || {}
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [oauthLoading, setOauthLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const EMAIL_RE = /^\S+@\S+\.\S+$/

  async function submit(e) {
    e.preventDefault()
    setError('')
    setFieldErrors({})
    // client-side validation
    const errs = {}
    if (!email || !EMAIL_RE.test(email)) errs.email = 'Please enter a valid email address'
    if (!password || password.length < 1) errs.password = 'Please enter your password'
    if (Object.keys(errs).length) {
      setFieldErrors(errs)
      return
    }
    setLoading(true)
    try {
      await login(email, password)
      setPage('home')
    } catch (err) {
      // prefer structured server message
      const msg = err?.message || String(err)
      setError(msg)
      // if credentials are invalid (likely account doesn't exist or wrong password)
      // prompt the user to create an account — helpful for users who tried logging in
      if (/invalid credentials|not found|not authenticated|does not exist|no user/i.test(msg)) {
        const go = window.confirm(msg + '\n\nIt looks like you don\'t have an account. Would you like to create one now?')
        if (go) setPage('signup')
      }
    } finally {
      setLoading(false)
    }
  }

  function goToSignup() {
    setPage('signup')
  }

  function continueWithGoogle() {
    const oauthUrl = import.meta.env.VITE_BACKEND_URL ? `${import.meta.env.VITE_BACKEND_URL}/api/auth/google` : 'http://localhost:5000/api/auth/google'
    // open popup
    const popup = window.open(oauthUrl, 'oauth2', 'width=500,height=700')
    if (!popup) {
      window.alert('Popup blocked. Please allow popups for this site or use the signup flow.')
      return
    }
    setOauthLoading(true)

    // poll fetchMe until user is authenticated or popup is closed / timeout
    const interval = setInterval(async () => {
      try {
        // if popup closed and no auth, stop polling
        if (popup.closed) {
          clearInterval(interval)
          setOauthLoading(false)
          return
        }
        const user = await fetchMe()
        if (user) {
          clearInterval(interval)
          try { popup.close() } catch (e) {}
          setOauthLoading(false)
          setPage('home')
        }
      } catch (e) {
        // ignore transient errors, keep polling
      }
    }, 1000)

    // safety timeout: stop after 2 minutes
    setTimeout(() => {
      clearInterval(interval)
      setOauthLoading(false)
      try { if (popup && !popup.closed) popup.close() } catch (e) {}
    }, 1000 * 120)
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-lg text-slate-100">
        <h1 className="text-2xl font-extrabold text-center mb-2 text-rose-400">Sign in</h1>
        <p className="text-center text-sm text-slate-300 mb-6">Welcome back — please sign in to continue</p>

        <form onSubmit={submit} className="space-y-4">
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
          {fieldErrors.email && <div className="text-xs text-red-400 mt-1">{fieldErrors.email}</div>}

          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
          {fieldErrors.password && <div className="text-xs text-red-400 mt-1">{fieldErrors.password}</div>}

          {error && <div className="text-sm text-red-400">{error}</div>}

          <button type="submit" disabled={loading} className="w-full rounded-full px-6 py-3 font-semibold text-slate-900" style={{ background: '#fb7185', boxShadow: '0 8px 30px rgba(251,113,133,0.45)' }}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-400">
          Dont have an account? <button onClick={goToSignup} className="text-rose-400 underline">Create one</button>
        </div>

        <div className="mt-4">
          <button onClick={continueWithGoogle} disabled={oauthLoading} className="w-full rounded-full px-4 py-2 bg-slate-700/60 text-slate-100 disabled:opacity-60">
            {oauthLoading ? 'Waiting for Google sign-in...' : 'Continue with Google'}
          </button>
        </div>
      </div>
    </div>
  )
}
