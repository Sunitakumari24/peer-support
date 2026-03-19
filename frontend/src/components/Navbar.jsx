import React from 'react'
import { useAuth } from '../pages/AuthContext'

function Navbar({ page, setPage }) {
  const { user, logout } = useAuth() || {}

  return (
    <>
      <nav className="sticky top-0 z-50 flex h-auto items-center justify-between border-b border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm sm:px-[6vw]">
        <div className="flex items-center gap-4">
          <div className="text-xl font-extrabold tracking-wide text-rose-600">PEER SUPPORT</div>
        </div>

        {user ? (
          <ul className="flex items-center gap-4 text-sm font-semibold sm:gap-8 sm:text-base">
            <li>
              <button onClick={() => setPage('home')} className={`px-2 py-1 ${page === 'home' ? 'text-rose-600' : 'text-slate-700'}`}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setPage('services')} className={`px-2 py-1 ${page === 'services' ? 'text-rose-600' : 'text-slate-700'}`}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => setPage('resources')} className={`px-2 py-1 ${page === 'resources' ? 'text-rose-600' : 'text-slate-700'}`}>
                Resources
              </button>
            </li>
            <li>
              <button onClick={() => setPage('chat')} className={`px-2 py-1 ${page === 'chat' ? 'text-rose-600' : 'text-slate-700'}`}>
                Chat
              </button>
            </li>
            <li className="px-2 py-1 text-slate-700">Hi, <span className="font-semibold text-rose-600">{user.name}</span></li>
            <li>
              <button onClick={async () => { await logout(); setPage('login') }} className="px-2 py-1 text-sm text-slate-700">
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <div className="flex items-center gap-3">
            <button onClick={() => setPage('login')} className={`px-3 py-1 text-sm ${page === 'login' ? 'text-rose-600' : 'text-slate-700'}`}>
              Login
            </button>
            <button onClick={() => setPage('signup')} className={`px-3 py-1 text-sm ${page === 'signup' ? 'text-rose-600' : 'text-slate-700'}`}>
              Sign up
            </button>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
