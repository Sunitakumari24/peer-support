import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import api from '../services/api'
import { useAuth } from './AuthContext'

const CATEGORIES = ['general', 'anxiety', 'depression', 'relationships', 'work', 'other']

function Forum() {
	const { user } = useAuth()
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	const [category, setCategory] = useState('')
	const [showForm, setShowForm] = useState(false)
	const [form, setForm] = useState({ title: '', content: '', category: 'general' })
	const [formError, setFormError] = useState('')

	const fetchPosts = async () => {
		setLoading(true)
		try {
			const { data } = await api.get('/forum', { params: category ? { category } : {} })
			setPosts(data)
		} catch {
			setPosts([])
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => { fetchPosts() }, [category])

	const handleSubmit = async (e) => {
		e.preventDefault()
		setFormError('')
		try {
			await api.post('/forum', form)
			setForm({ title: '', content: '', category: 'general' })
			setShowForm(false)
			fetchPosts()
		} catch (err) {
			setFormError(err.response?.data?.message || 'Could not create post')
		}
	}

	const handleLike = async (id) => {
		try {
			await api.put(`/forum/${id}/like`)
			fetchPosts()
		} catch {}
	}

	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			<Navbar />
			<div className="mx-auto max-w-4xl px-4 py-10">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<h1 className="text-3xl font-extrabold text-slate-800">Community Forum</h1>
					{user && (
						<button
							onClick={() => setShowForm(!showForm)}
							className="rounded-lg bg-rose-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-rose-700"
						>
							{showForm ? 'Cancel' : '+ New Post'}
						</button>
					)}
				</div>

				{showForm && (
					<form onSubmit={handleSubmit} className="mt-6 rounded-2xl bg-white p-6 shadow">
						{formError && (
							<p className="mb-3 text-sm text-red-600">{formError}</p>
						)}
						<input
							type="text"
							placeholder="Post title"
							value={form.title}
							onChange={(e) => setForm({ ...form, title: e.target.value })}
							required
							className="mb-3 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
						<select
							value={form.category}
							onChange={(e) => setForm({ ...form, category: e.target.value })}
							className="mb-3 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						>
							{CATEGORIES.map((c) => (
								<option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
							))}
						</select>
						<textarea
							placeholder="Share your thoughts..."
							value={form.content}
							onChange={(e) => setForm({ ...form, content: e.target.value })}
							required
							rows={4}
							className="mb-3 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
						<button
							type="submit"
							className="rounded-lg bg-rose-600 px-6 py-2 text-sm font-bold text-white transition hover:bg-rose-700"
						>
							Post
						</button>
					</form>
				)}

				<div className="mt-6 flex flex-wrap gap-2">
					<button
						onClick={() => setCategory('')}
						className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${!category ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
					>
						All
					</button>
					{CATEGORIES.map((c) => (
						<button
							key={c}
							onClick={() => setCategory(c)}
							className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${category === c ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
						>
							{c.charAt(0).toUpperCase() + c.slice(1)}
						</button>
					))}
				</div>

				{loading ? (
					<p className="mt-10 text-center text-slate-500">Loading posts…</p>
				) : posts.length === 0 ? (
					<p className="mt-10 text-center text-slate-500">No posts yet. Be the first to share!</p>
				) : (
					<div className="mt-6 space-y-4">
						{posts.map((post) => (
							<div key={post._id} className="rounded-2xl bg-white p-6 shadow-sm">
								<div className="flex items-start justify-between gap-4">
									<div>
										<span className="rounded-full bg-rose-100 px-3 py-0.5 text-xs font-bold uppercase text-rose-700">
											{post.category}
										</span>
										<h2 className="mt-2 text-xl font-bold text-slate-800">{post.title}</h2>
										<p className="mt-1 text-slate-600 leading-7">{post.content}</p>
									</div>
								</div>
								<div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
									<span>By {post.author?.name || 'Anonymous'}</span>
									<span>·</span>
									<span>{new Date(post.createdAt).toLocaleDateString()}</span>
									<span>·</span>
									<button
										onClick={() => handleLike(post._id)}
										disabled={!user}
										className="flex items-center gap-1 rounded-full px-3 py-1 transition hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
									>
										❤️ {post.likes?.length || 0}
									</button>
									<span>💬 {post.comments?.length || 0}</span>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Forum
