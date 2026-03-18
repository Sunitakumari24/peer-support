import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

function Signup() {
	const { signup } = useAuth()
	const navigate = useNavigate()
	const [form, setForm] = useState({ name: '', email: '', password: '' })
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		setLoading(true)
		try {
			await signup(form.name, form.email, form.password)
			navigate('/')
		} catch (err) {
			setError(err.response?.data?.message || 'Sign up failed. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
			<div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
				<h1 className="text-3xl font-extrabold text-slate-800">Create account</h1>
				<p className="mt-1 text-slate-500">Join the Peer Support community</p>

				{error && (
					<div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit} className="mt-6 space-y-4">
					<div>
						<label className="mb-1 block text-sm font-semibold text-slate-700">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							required
							placeholder="Jane Doe"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
					</div>
					<div>
						<label className="mb-1 block text-sm font-semibold text-slate-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
							placeholder="you@example.com"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
					</div>
					<div>
						<label className="mb-1 block text-sm font-semibold text-slate-700">
							Password
						</label>
						<input
							type="password"
							name="password"
							value={form.password}
							onChange={handleChange}
							required
							minLength={6}
							placeholder="At least 6 characters"
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
					</div>
					<button
						type="submit"
						disabled={loading}
						className="w-full cursor-pointer rounded-lg bg-rose-600 px-5 py-3 text-base font-bold text-white transition hover:bg-rose-700 disabled:opacity-60"
					>
						{loading ? 'Creating account…' : 'Create Account'}
					</button>
				</form>

				<p className="mt-5 text-center text-sm text-slate-500">
					Already have an account?{' '}
					<Link to="/login" className="font-semibold text-rose-600 hover:underline">
						Sign in
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Signup
