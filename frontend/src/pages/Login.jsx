import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
	const { login } = useAuth()
	const navigate = useNavigate()
	const [form, setForm] = useState({ email: '', password: '' })
	const [error, setError] = useState('')

	function handleChange(e) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		setError('')
		if (!form.email || !form.password) {
			setError('Please fill in all fields.')
			return
		}
		// Simulate login — replace with real API call
		login({ email: form.email, name: form.email.split('@')[0] })
		navigate('/')
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
			<div className="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-lg">
				<h1 className="text-3xl font-extrabold text-slate-800">Welcome back</h1>
				<p className="mt-1 text-slate-500">Sign in to your Peer Support account</p>

				{error && (
					<div className="mt-4 rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit} className="mt-6 space-y-4">
					<div>
						<label className="mb-1.5 block text-sm font-semibold text-slate-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="you@example.com"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
					</div>
					<div>
						<label className="mb-1.5 block text-sm font-semibold text-slate-700">
							Password
						</label>
						<input
							type="password"
							name="password"
							value={form.password}
							onChange={handleChange}
							placeholder="••••••••"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
					</div>
					<button
						type="submit"
						className="mt-2 w-full rounded-lg bg-rose-600 py-3 text-base font-bold text-white transition hover:bg-rose-700"
					>
						Sign In
					</button>
				</form>

				<p className="mt-6 text-center text-sm text-slate-500">
					Don't have an account?{' '}
					<Link to="/signup" className="font-bold text-rose-600 hover:underline">
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	)
}
