import { useState } from 'react'
import Navbar from '../components/Navbar'

const INITIAL_POSTS = [
	{
		id: 1,
		author: 'Priya S.',
		avatar: '🧕',
		time: '2h ago',
		title: 'Feeling overwhelmed with college pressure',
		body: 'I have been struggling with exam anxiety lately. Anyone else going through something similar? Would love to hear how you all cope.',
		likes: 14,
		replies: 6,
		tag: 'Anxiety',
	},
	{
		id: 2,
		author: 'Rahul M.',
		avatar: '👨',
		time: '5h ago',
		title: 'Tips for maintaining work-life balance',
		body: 'Working from home has blurred all boundaries for me. I found journaling helps a lot. Share your tips!',
		likes: 22,
		replies: 11,
		tag: 'Wellness',
	},
	{
		id: 3,
		author: 'Ananya K.',
		avatar: '👩',
		time: '1d ago',
		title: 'Gratitude journaling changed my life',
		body: 'Three months ago I started writing 3 things I am grateful for every morning. It genuinely shifted my mindset.',
		likes: 37,
		replies: 9,
		tag: 'Self-Care',
	},
]

export default function Forum() {
	const [posts, setPosts] = useState(INITIAL_POSTS)
	const [newPost, setNewPost] = useState({ title: '', body: '' })
	const [showForm, setShowForm] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		if (!newPost.title.trim() || !newPost.body.trim()) return
		setPosts((prev) => [
			{
				id: Date.now(),
				author: 'You',
				avatar: '🙂',
				time: 'Just now',
				title: newPost.title,
				body: newPost.body,
				likes: 0,
				replies: 0,
				tag: 'General',
			},
			...prev,
		])
		setNewPost({ title: '', body: '' })
		setShowForm(false)
	}

	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			<Navbar />

			<div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-extrabold text-slate-800">Community Forum</h1>
						<p className="mt-1 text-slate-500">
							Share your story, find support, and connect with peers.
						</p>
					</div>
					<button
						onClick={() => setShowForm((v) => !v)}
						className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-bold text-white hover:bg-rose-700 transition"
					>
						+ New Post
					</button>
				</div>

				{showForm && (
					<form
						onSubmit={handleSubmit}
						className="mt-6 rounded-2xl bg-white p-6 shadow-sm"
					>
						<h2 className="mb-4 text-lg font-bold">Create a Post</h2>
						<input
							type="text"
							value={newPost.title}
							onChange={(e) => setNewPost((p) => ({ ...p, title: e.target.value }))}
							placeholder="Post title"
							className="mb-3 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
						/>
						<textarea
							value={newPost.body}
							onChange={(e) => setNewPost((p) => ({ ...p, body: e.target.value }))}
							placeholder="Share your thoughts…"
							rows={4}
							className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500 resize-none"
						/>
						<div className="mt-3 flex justify-end gap-3">
							<button
								type="button"
								onClick={() => setShowForm(false)}
								className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-bold text-white hover:bg-rose-700"
							>
								Publish
							</button>
						</div>
					</form>
				)}

				<div className="mt-6 space-y-4">
					{posts.map((post) => (
						<div key={post.id} className="rounded-2xl bg-white p-6 shadow-sm">
							<div className="flex items-center gap-3">
								<span className="text-2xl">{post.avatar}</span>
								<div>
									<p className="text-sm font-bold text-slate-800">{post.author}</p>
									<p className="text-xs text-slate-400">{post.time}</p>
								</div>
								<span className="ml-auto rounded-full bg-rose-100 px-3 py-0.5 text-xs font-semibold text-rose-700">
									{post.tag}
								</span>
							</div>
							<h3 className="mt-3 text-base font-bold text-slate-800">{post.title}</h3>
							<p className="mt-1.5 text-sm leading-6 text-slate-600">{post.body}</p>
							<div className="mt-4 flex items-center gap-5 text-sm text-slate-400">
								<button
									onClick={() =>
										setPosts((prev) =>
											prev.map((p) =>
												p.id === post.id ? { ...p, likes: p.likes + 1 } : p,
											),
										)
									}
									className="flex items-center gap-1 hover:text-rose-600 transition-colors"
								>
									❤️ {post.likes}
								</button>
								<span>💬 {post.replies} replies</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
