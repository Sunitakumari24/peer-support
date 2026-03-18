import { useState } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'profile') {
    return <Profile onNavigate={setPage} />
  }

  return <Home onNavigate={setPage} />
}

export default App
