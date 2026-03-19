import React, { useState } from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider, useAuth } from './pages/AuthContext'

function App() {
  const [page, setPage] = useState('home')

  // If user is not authenticated and tries to access protected pages, redirect to login
  const ProtectedPages = new Set(['chat', 'resources'])

  return (
    <AuthProvider>
      <InnerApp page={page} setPage={setPage} ProtectedPages={ProtectedPages} />
    </AuthProvider>
  )

}


function InnerApp({ page, setPage, ProtectedPages }) {
  const { user, loading } = useAuth()

    // require login before viewing site: allow access only to login/signup when unauthenticated
    if (!loading && !user && page !== 'login' && page !== 'signup') {
      setPage('login')
  }
  return (
    <div>
      <Navbar page={page} setPage={setPage} />
  {page === 'home' && <Home setPage={setPage} />}
  {page === 'services' && <Services setPage={setPage} />}
  {page === 'resources' && <Resources setPage={setPage} />}
  {page === 'chat' && <Chat setPage={setPage} />}
  {page === 'login' && <Login setPage={setPage} />}
  {page === 'signup' && <Signup setPage={setPage} />}
  {page === 'contact' && <Contact setPage={setPage} />}
  <Footer />
      {/* Placeholder pages: forum/resources can be added similarly */}
    </div>
  )
}

export default App
