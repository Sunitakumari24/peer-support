/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => {
		try {
			const stored = localStorage.getItem('peer_user')
			return stored ? JSON.parse(stored) : null
		} catch {
			return null
		}
	})

	function login(userData) {
		setUser(userData)
		localStorage.setItem('peer_user', JSON.stringify(userData))
	}

	function logout() {
		setUser(null)
		localStorage.removeItem('peer_user')
	}

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext)
}
