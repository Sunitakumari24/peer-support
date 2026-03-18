import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './pages/AuthContext'
import Chat from './pages/Chat'
import Forum from './pages/Forum'
import Groups from './pages/Groups'
import Home from './pages/Home'
import Login from './pages/Login'
import Resources from './pages/Resources'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
