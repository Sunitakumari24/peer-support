import { useState } from 'react'

const MOCK_USER = {
	name: 'Alex Johnson',
	username: '@alexj',
	bio: 'Mental health advocate | Peer support volunteer | Here to listen and help others navigate their journey.',
	location: 'San Francisco, CA',
	joined: 'March 2024',
	avatar: null,
	stats: {
		connections: 128,
		sessionsAttended: 47,
		forumPosts: 93,
		resourcesShared: 21,
	},
	badges: [
		{ icon: '🏅', label: 'Top Supporter', color: 'bg-rose-100 text-rose-700' },
		{ icon: '💬', label: 'Active Listener', color: 'bg-blue-100 text-blue-700' },
		{ icon: '🌱', label: 'Growth Mindset', color: 'bg-green-100 text-green-700' },
		{ icon: '🛡️', label: 'Safe Space', color: 'bg-purple-100 text-purple-700' },
	],
	recentActivity: [
		{
			type: 'forum',
			icon: '💬',
			text: 'Replied to "Dealing with academic stress" in the Forum',
			time: '2 hours ago',
		},
		{
			type: 'session',
			icon: '🎯',
			text: 'Attended a 1:1 peer support session',
			time: '1 day ago',
		},
		{
			type: 'resource',
			icon: '📚',
			text: 'Shared a resource: "Breathing techniques for anxiety"',
			time: '3 days ago',
		},
		{
			type: 'connection',
			icon: '🤝',
			text: 'Connected with Jordan M.',
			time: '5 days ago',
		},
	],
}

function AvatarInitials({ name, size = 'lg' }) {
	const initials = name
		.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase()
		.slice(0, 2)
	const sizeClasses = size === 'lg' ? 'h-24 w-24 text-3xl' : 'h-10 w-10 text-base'
	return (
		<div
			className={`flex items-center justify-center rounded-full bg-rose-600 font-bold text-white ${sizeClasses}`}
		>
			{initials}
		</div>
	)
}

function StatCard({ value, label }) {
	return (
		<div className="flex flex-col items-center rounded-2xl bg-white px-6 py-5 shadow-sm">
			<span className="text-3xl font-extrabold text-rose-600">{value}</span>
			<span className="mt-1 text-sm font-medium text-slate-500">{label}</span>
		</div>
	)
}

export default function Profile({ onNavigate }) {
	const [editing, setEditing] = useState(false)
	const [bio, setBio] = useState(MOCK_USER.bio)
	const [draftBio, setDraftBio] = useState(MOCK_USER.bio)

	function handleSave() {
		setBio(draftBio)
		setEditing(false)
	}

	function handleCancel() {
		setDraftBio(bio)
		setEditing(false)
	}

	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			{/* Top bar */}
			<div className="notice-animate group border-b border-white/20 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2 text-center text-xs font-semibold tracking-wide text-rose-100 transition-all duration-300 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 hover:text-rose-50 sm:text-sm">
				<span className="text-rose-400 transition-transform duration-300 group-hover:scale-110">⚠</span>{' '}
				Important note: This is a safe peer-support space. Please be respectful and avoid sharing personal financial details.{' '}
				<span className="text-rose-400 transition-transform duration-300 group-hover:scale-110">⚠</span>
			</div>

			{/* Nav */}
			<nav className="sticky top-0 z-50 flex h-auto flex-col items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm sm:h-18.5 sm:flex-row sm:px-[6vw] sm:py-0">
				<button
					onClick={() => onNavigate('home')}
					className="text-xl font-extrabold tracking-wide text-rose-600"
				>
					PEER SUPPORT
				</button>
				<ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold sm:gap-8 sm:text-base">
					<li
						className="cursor-pointer hover:text-rose-600"
						onClick={() => onNavigate('home')}
					>
						Home
					</li>
					<li className="cursor-pointer font-bold text-rose-600 underline underline-offset-4">
						Profile
					</li>
				</ul>
			</nav>

			{/* Profile hero banner */}
			<div className="h-36 w-full bg-gradient-to-r from-slate-900 via-rose-900 to-slate-800 sm:h-48" />

			{/* Main content */}
			<div className="mx-auto max-w-4xl px-4 sm:px-6">
				{/* Avatar + name row */}
				<div className="-mt-12 flex flex-col items-start gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:gap-6">
					<div className="rounded-full ring-4 ring-white">
						<AvatarInitials name={MOCK_USER.name} size="lg" />
					</div>
					<div className="flex w-full flex-col gap-1 pb-2 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
								{MOCK_USER.name}
							</h1>
							<p className="text-sm font-medium text-slate-500">{MOCK_USER.username}</p>
						</div>
						<button
							onClick={() => setEditing(true)}
							className="mt-2 self-start rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:mt-0 sm:self-auto"
						>
							Edit Profile
						</button>
					</div>
				</div>

				{/* Bio */}
				<div className="mt-5 rounded-2xl bg-white px-6 py-5 shadow-sm">
					<h2 className="text-base font-bold text-slate-700">About</h2>
					{editing ? (
						<div className="mt-2">
							<textarea
								value={draftBio}
								onChange={(e) => setDraftBio(e.target.value)}
								rows={3}
								className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none focus:border-rose-500"
							/>
							<div className="mt-2 flex gap-2">
								<button
									onClick={handleSave}
									className="rounded-lg bg-rose-600 px-4 py-1.5 text-sm font-bold text-white transition hover:bg-rose-700"
								>
									Save
								</button>
								<button
									onClick={handleCancel}
									className="rounded-lg border border-slate-300 px-4 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
								>
									Cancel
								</button>
							</div>
						</div>
					) : (
						<p className="mt-2 text-sm leading-6 text-slate-600">{bio}</p>
					)}

					<div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
						<span className="flex items-center gap-1">
							<span>📍</span> {MOCK_USER.location}
						</span>
						<span className="flex items-center gap-1">
							<span>📅</span> Joined {MOCK_USER.joined}
						</span>
					</div>
				</div>

				{/* Stats */}
				<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
					<StatCard value={MOCK_USER.stats.connections} label="Connections" />
					<StatCard value={MOCK_USER.stats.sessionsAttended} label="Sessions" />
					<StatCard value={MOCK_USER.stats.forumPosts} label="Forum Posts" />
					<StatCard value={MOCK_USER.stats.resourcesShared} label="Resources Shared" />
				</div>

				{/* Badges */}
				<div className="mt-6 rounded-2xl bg-white px-6 py-5 shadow-sm">
					<h2 className="text-base font-bold text-slate-700">Badges</h2>
					<div className="mt-3 flex flex-wrap gap-3">
						{MOCK_USER.badges.map((badge) => (
							<span
								key={badge.label}
								className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold ${badge.color}`}
							>
								<span>{badge.icon}</span>
								{badge.label}
							</span>
						))}
					</div>
				</div>

				{/* Recent activity */}
				<div className="mb-10 mt-6 rounded-2xl bg-white px-6 py-5 shadow-sm">
					<h2 className="text-base font-bold text-slate-700">Recent Activity</h2>
					<ul className="mt-3 divide-y divide-slate-100">
						{MOCK_USER.recentActivity.map((item, idx) => (
							<li key={idx} className="flex items-start gap-3 py-3">
								<span className="mt-0.5 text-xl">{item.icon}</span>
								<div className="flex-1">
									<p className="text-sm text-slate-700">{item.text}</p>
									<p className="mt-0.5 text-xs text-slate-400">{item.time}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
