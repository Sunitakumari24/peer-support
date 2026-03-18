import { createContext, useContext, useState } from 'react'
import { login as loginService, signup as signupService } from '../services/authService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem('user')) || null
		} catch {
			return null
		}
	})

	const login = async (email, password) => {
		const data = await loginService(email, password)
		localStorage.setItem('user', JSON.stringify(data))
		setUser(data)
		return data
	}

	const signup = async (name, email, password) => {
		const data = await signupService(name, email, password)
		localStorage.setItem('user', JSON.stringify(data))
		setUser(data)
		return data
	}

	const logout = () => {
		localStorage.removeItem('user')
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, login, signup, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
