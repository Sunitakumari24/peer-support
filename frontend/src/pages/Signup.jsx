import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Signup() {
	const { login } = useAuth()
	const navigate = useNavigate()
	const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
	const [error, setError] = useState('')

	function handleChange(e) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		setError('')
		if (!form.name || !form.email || !form.password || !form.confirm) {
			setError('Please fill in all fields.')
			return
		}
		if (form.password !== form.confirm) {
			setError('Passwords do not match.')
			return
		}
		if (form.password.length < 6) {
			setError('Password must be at least 6 characters.')
			return
		}
		// Simulate signup — replace with real API call
		login({ email: form.email, name: form.name })
		navigate('/')
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
			<div className="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-lg">
				<h1 className="text-3xl font-extrabold text-slate-800">Create account</h1>
				<p className="mt-1 text-slate-500">Join the Peer Support community today</p>

				{error && (
					<div className="mt-4 rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit} className="mt-6 space-y-4">
					<div>
						<label className="mb-1.5 block text-sm font-semibold text-slate-700">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Your Name"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
					</div>
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
							placeholder="Min. 6 characters"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
					</div>
					<div>
						<label className="mb-1.5 block text-sm font-semibold text-slate-700">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirm"
							value={form.confirm}
							onChange={handleChange}
							placeholder="Repeat password"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
					</div>
					<button
						type="submit"
						className="mt-2 w-full rounded-lg bg-rose-600 py-3 text-base font-bold text-white transition hover:bg-rose-700"
					>
						Create Account
					</button>
				</form>

				<p className="mt-6 text-center text-sm text-slate-500">
					Already have an account?{' '}
					<Link to="/login" className="font-bold text-rose-600 hover:underline">
						Sign In
					</Link>
				</p>
			</div>
		</div>
	)
}
