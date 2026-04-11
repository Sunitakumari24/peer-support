                                                                                                                                                                                                                import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'peer_support_users'
const SESSION_KEY = 'peer_support_session'
const API_BASE = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000').replace(/\/$/, '')

async function apiRequest(path, options = {}) {
	const response = await fetch(`${API_BASE}${path}`, {
		headers: {
			'Content-Type': 'application/json',
			...(options.headers || {}),
		},
		...options,
	})

	const data = await response.json().catch(() => ({}))
	if (!response.ok) {
		throw new Error(data.message || 'Request failed.')
	}
	return data
}

function readUsers() {
	try {
		const raw = localStorage.getItem(USERS_KEY)
		const parsed = raw ? JSON.parse(raw) : []
		return Array.isArray(parsed) ? parsed : []
	} catch {
		return []
	}
}

function writeUsers(users) {
	localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

function readSession() {
	try {
		const raw = localStorage.getItem(SESSION_KEY)
		return raw ? JSON.parse(raw) : null
	} catch {
		return null
	}
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)

	useEffect(() => {
		setUser(readSession())
	}, [])

	const signup = async (name, email, password) => {
		try {
			const data = await apiRequest('/api/auth/signup', {
				method: 'POST',
				body: JSON.stringify({ name, email, password }),
			})

			const safeUser = data.data || data.user
			localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))
			setUser(safeUser)
			return safeUser
		} catch (err) {
			// If backend is unavailable, continue with local fallback.
			if (!/Failed to fetch|NetworkError|Load failed/i.test(String(err?.message || ''))) {
				throw err
			}
		}

		const users = readUsers()
		const normalizedEmail = email.trim().toLowerCase()
		const alreadyExists = users.some(u => u.email.toLowerCase() === normalizedEmail)

		if (alreadyExists) {
			throw new Error('This email is already registered. Please sign in.')
		}

		const newUser = {
			id: Date.now(),
			name: name.trim(),
			email: normalizedEmail,
			password,
		}

		users.push(newUser)
		writeUsers(users)

		const safeUser = { id: newUser.id, name: newUser.name, email: newUser.email }
		localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))
		setUser(safeUser)
		return safeUser
	}

	const login = async (email, password) => {
		try {
			const data = await apiRequest('/api/auth/login', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
			})

			const safeUser = data.data || data.user
			localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))
			setUser(safeUser)
			return safeUser
		} catch (err) {
			// If backend is unavailable, continue with local fallback.
			if (!/Failed to fetch|NetworkError|Load failed/i.test(String(err?.message || ''))) {
				throw err
			}
		}

		const users = readUsers()
		const normalizedEmail = email.trim().toLowerCase()
		const matchedUser = users.find(
			u => u.email.toLowerCase() === normalizedEmail && u.password === password
		)

		if (!matchedUser) {
			throw new Error('Invalid email or password.')
		}

		const safeUser = { id: matchedUser.id, name: matchedUser.name, email: matchedUser.email }
		localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))
		setUser(safeUser)
		return safeUser
	}

	const logout = () => {
		localStorage.removeItem(SESSION_KEY)
		setUser(null)
	}

	const updateProfile = async ({ name, email }) => {
		if (!user) throw new Error('No active user session.')

		try {
			const data = await apiRequest(`/api/auth/users/${user.id}`, {
				method: 'PUT',
				body: JSON.stringify({ name, email }),
			})

			const safeUser = data.data || data.user
			localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))
			setUser(safeUser)
			return safeUser
		} catch (err) {
			// If backend is unavailable, continue with local fallback.
			if (!/Failed to fetch|NetworkError|Load failed/i.test(String(err?.message || ''))) {
				throw err
			}
		}

		const nextName = name?.trim()
		const nextEmail = email?.trim().toLowerCase()

		if (!nextName || nextName.length < 2) {
			throw new Error('Name must be at least 2 characters.')
		}

		const emailRegex = /^\S+@\S+\.\S+$/
		if (!nextEmail || !emailRegex.test(nextEmail)) {
			throw new Error('Please enter a valid email address.')
		}

		const users = readUsers()
		const emailInUse = users.some(
			u => u.id !== user.id && u.email.toLowerCase() === nextEmail
		)

		if (emailInUse) {
			throw new Error('This email is already in use by another account.')
		}

		const updatedUsers = users.map(u => {
			if (u.id !== user.id) return u
			return {
				...u,
				name: nextName,
				email: nextEmail,
			}
		})

		writeUsers(updatedUsers)

		const safeUser = { id: user.id, name: nextName, email: nextEmail }
		localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser))
		setUser(safeUser)
		return safeUser
	}

	const value = useMemo(
		() => ({ user, isAuthenticated: Boolean(user), signup, login, logout, updateProfile }),
		[user]
	)

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const ctx = useContext(AuthContext)
	if (!ctx) {
		throw new Error('useAuth must be used within AuthProvider')
	}
	return ctx
}
