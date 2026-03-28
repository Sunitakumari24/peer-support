
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function Signup({ setPage }) {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const EMAIL_RE = /^\S+@\S+\.\S+$/
  const [loading, setLoading] = useState(false)
  const goTo = (route, pageKey) => {
    if (typeof setPage === 'function') {
      setPage(pageKey)
      return
    }
    navigate(route)
  }

  async function submit(e) {
    e.preventDefault()
    setError('')
    setFieldErrors({})
    // client-side validation
    const errs = {}
    if (!name || name.trim().length < 2) errs.name = 'Please enter your full name'
    if (!email || !EMAIL_RE.test(email)) errs.email = 'Please enter a valid email address'
    if (!password || password.length < 6) errs.password = 'Password must be at least 6 characters'
    if (!confirmPassword) errs.confirmPassword = 'Please confirm your password'
    if (password && confirmPassword && password !== confirmPassword) errs.confirmPassword = 'Passwords do not match'
    if (Object.keys(errs).length) {
      setFieldErrors(errs)
      return
    }
    setLoading(true)
    try {
      await signup(name, email, password)
      goTo('/', 'home')
    } catch (err) {
      const msg = err.message || String(err)
      setError(msg)
      // show a popup for duplicate account or other clear server messages
      if (/already in use|already exists|exists/i.test(msg)) {
        // use native alert for immediate visibility
        window.alert(msg)
      }
    }
    setLoading(false)
  }

  function continueWithGoogle() {
    // You can copy the logic from Login.jsx or show a message for now
    window.alert('Google signup is not configured yet.')
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-lg text-slate-100">
        <h1 className="text-2xl font-extrabold text-center mb-2 text-rose-400">Create account</h1>
        <p className="text-center text-sm text-slate-300 mb-6">Fill in your details to create a new account</p>

        <form onSubmit={submit} className="space-y-4">
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
          {fieldErrors.name && <div className="text-xs text-red-400 mt-1">{fieldErrors.name}</div>}

          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
          {fieldErrors.email && <div className="text-xs text-red-400 mt-1">{fieldErrors.email}</div>}

          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
          {fieldErrors.password && <div className="text-xs text-red-400 mt-1">{fieldErrors.password}</div>}

          <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" className="w-full rounded-full bg-slate-700/60 px-4 py-3 placeholder-slate-400 text-slate-100 outline-none" />
          {fieldErrors.confirmPassword && <div className="text-xs text-red-400 mt-1">{fieldErrors.confirmPassword}</div>}

          {error && <div className="text-sm text-red-400">{error}</div>}

          <button type="submit" disabled={loading} className="w-full rounded-full px-6 py-3 font-semibold text-slate-900" style={{ background: '#fb7185', boxShadow: '0 8px 30px rgba(251,113,133,0.45)' }}>{loading ? 'Creating...' : 'Create account'}</button>
        </form>

        <div className="mt-4">
          <button onClick={continueWithGoogle} className="w-full flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-slate-700/60 text-slate-100">
            <FcGoogle size={22} />
            Continue with Google
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-slate-400">Already have an account? <button onClick={() => goTo('/login', 'login')} className="text-rose-400 underline">Sign in</button></div>
      </div>
    </div>
  )
}
