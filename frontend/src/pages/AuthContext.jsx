import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	async function fetchMe() {
		setLoading(true)
		try {
			const res = await fetch(`${BACKEND}/api/auth/me`, { credentials: 'include' })
			if (!res.ok) {
				setUser(null)
				setLoading(false)
				return null
			}
			const data = await res.json()
			setUser(data)
			setLoading(false)
			return data
		} catch (err) {
			setUser(null)
			setLoading(false)
			return null
		}
	}

	useEffect(() => {
		fetchMe()
	}, [])

	async function login(email, password) {
		const res = await fetch(`${BACKEND}/api/auth/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ email, password }),
		})
		const data = await res.json()
		if (!res.ok) throw new Error(data.message || 'Login failed')
		setUser(data)
		return data
	}

	async function signup(name, email, password) {
		const res = await fetch(`${BACKEND}/api/auth/signup`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ name, email, password }),
		})
		const data = await res.json()
		if (!res.ok) throw new Error(data.message || 'Signup failed')
		setUser(data)
		return data
	}

	async function logout() {
		try {
			await fetch(`${BACKEND}/api/auth/logout`, { method: 'POST', credentials: 'include' })
		} catch (e) {}
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, setUser, loading, login, signup, logout, fetchMe }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext)
}

export default AuthContext
