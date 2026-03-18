import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forum from './pages/Forum'
import Groups from './pages/Groups'
import Chat from './pages/Chat'
import Resources from './pages/Resources'

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/forum" element={<Forum />} />
					<Route path="/groups" element={<Groups />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/resources" element={<Resources />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	)
}

export default App
