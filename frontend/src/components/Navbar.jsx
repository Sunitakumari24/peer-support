import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../pages/AuthContext'

function Navbar() {
	const { user, logout } = useAuth()
	const navigate = useNavigate()

	const handleLogout = () => {
		logout()
		navigate('/')
	}

	return (
		<nav className="sticky top-0 z-50 flex h-auto flex-col items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm sm:h-18.5 sm:flex-row sm:px-[6vw] sm:py-0">
			<Link to="/" className="text-xl font-extrabold tracking-wide text-rose-600">
				PEER SUPPORT
			</Link>
			<ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold sm:gap-6 sm:text-base">
				<li>
					<Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
				</li>
				<li>
					<Link to="/forum" className="hover:text-rose-600 transition-colors">Forum</Link>
				</li>
				<li>
					<Link to="/groups" className="hover:text-rose-600 transition-colors">Groups</Link>
				</li>
				<li>
					<Link to="/resources" className="hover:text-rose-600 transition-colors">Resources</Link>
				</li>
				{user ? (
					<>
						<li>
							<Link to="/chat" className="hover:text-rose-600 transition-colors">Chat</Link>
						</li>
						<li>
							<button
								onClick={handleLogout}
								className="cursor-pointer rounded-lg bg-rose-600 px-4 py-1.5 text-sm font-bold text-white transition hover:bg-rose-700"
							>
								Logout
							</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link
								to="/login"
								className="cursor-pointer rounded-lg border border-rose-600 px-4 py-1.5 text-sm font-bold text-rose-600 transition hover:bg-rose-50"
							>
								Login
							</Link>
						</li>
						<li>
							<Link
								to="/signup"
								className="cursor-pointer rounded-lg bg-rose-600 px-4 py-1.5 text-sm font-bold text-white transition hover:bg-rose-700"
							>
								Sign Up
							</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}

export default Navbar
