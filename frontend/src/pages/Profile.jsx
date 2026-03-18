function Profile({ onNavigate }) {
	const user = {
		name: 'Alex Johnson',
		handle: '@alexj',
		avatarInitials: 'AJ',
		joinedDate: 'March 2024',
		bio: 'Advocate for mental wellness and peer-to-peer support. Here to listen, share, and grow together.',
		location: 'Alexandria, VA',
		supportedPeers: 42,
		postsCount: 18,
		groupsCount: 5,
	}

	const recentActivity = [
		{
			id: 1,
			type: 'post',
			title: 'How journaling helped me manage anxiety',
			date: 'Mar 14, 2026',
			replies: 7,
		},
		{
			id: 2,
			type: 'reply',
			title: 'Re: Finding balance while working from home',
			date: 'Mar 12, 2026',
			replies: 3,
		},
		{
			id: 3,
			type: 'post',
			title: 'Resources for first-time therapy seekers',
			date: 'Mar 9, 2026',
			replies: 11,
		},
	]

	const groups = [
		{ id: 1, name: 'Anxiety Support', members: 214, icon: '🧘' },
		{ id: 2, name: 'Work-Life Balance', members: 98, icon: '⚖️' },
		{ id: 3, name: 'Mindfulness Daily', members: 157, icon: '🌿' },
		{ id: 4, name: 'Young Professionals', members: 73, icon: '💼' },
		{ id: 5, name: 'Creative Expression', members: 45, icon: '🎨' },
	]

	return (
		<div className="min-h-screen bg-slate-50 text-slate-800">
			{/* Top bar */}
			<header className="flex h-auto flex-col items-center justify-between gap-1 bg-slate-100 px-4 py-2 text-sm text-slate-700 sm:h-10 sm:flex-row sm:px-[6vw] sm:py-0">
				<span>peer.support@gmail.com</span>
				<span>24x7 Community Support</span>
			</header>

			{/* Navigation */}
			<nav className="sticky top-0 z-50 flex h-auto flex-col items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm sm:h-18.5 sm:flex-row sm:px-[6vw] sm:py-0">
				<div className="text-xl font-extrabold tracking-wide text-rose-600">PEER SUPPORT</div>
				<ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold sm:gap-8 sm:text-base">
					<li
						className="cursor-pointer transition hover:text-rose-600"
						onClick={() => onNavigate && onNavigate('home')}
					>
						Home
					</li>
					<li className="cursor-pointer transition hover:text-rose-600">Forum</li>
					<li className="cursor-pointer transition hover:text-rose-600">Groups</li>
					<li className="cursor-pointer transition hover:text-rose-600">Resources</li>
					<li className="cursor-pointer font-bold text-rose-600">Profile</li>
				</ul>
			</nav>

			{/* Profile header banner */}
			<div className="h-36 bg-gradient-to-r from-rose-700 via-rose-500 to-rose-400 sm:h-48" />

			<div className="mx-auto max-w-5xl px-4 sm:px-[6vw]">
				{/* Avatar + name row */}
				<div className="-mt-16 flex flex-col items-start gap-4 sm:-mt-20 sm:flex-row sm:items-end sm:gap-6">
					<div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-rose-600 text-3xl font-extrabold text-white shadow-lg sm:h-36 sm:w-36 sm:text-4xl">
						{user.avatarInitials}
					</div>

					<div className="flex-1 pb-2">
						<h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{user.name}</h1>
						<p className="text-sm text-slate-500 sm:text-base">
							{user.handle} · Joined {user.joinedDate}
						</p>
					</div>

					<button className="mb-2 cursor-pointer rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700">
						Edit Profile
					</button>
				</div>

				{/* Stats row */}
				<div className="mt-6 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl bg-white px-4 py-5 shadow-sm">
					<div className="px-4 text-center">
						<p className="text-2xl font-extrabold text-rose-600">{user.postsCount}</p>
						<p className="mt-1 text-sm text-slate-500">Posts</p>
					</div>
					<div className="px-4 text-center">
						<p className="text-2xl font-extrabold text-rose-600">{user.supportedPeers}</p>
						<p className="mt-1 text-sm text-slate-500">Peers Supported</p>
					</div>
					<div className="px-4 text-center">
						<p className="text-2xl font-extrabold text-rose-600">{user.groupsCount}</p>
						<p className="mt-1 text-sm text-slate-500">Groups</p>
					</div>
				</div>

				{/* Main content grid */}
				<div className="mt-6 grid grid-cols-1 gap-6 pb-16 lg:grid-cols-3">
					{/* Left: About */}
					<div className="space-y-6 lg:col-span-1">
						<div className="rounded-2xl bg-white p-6 shadow-sm">
							<h2 className="text-lg font-extrabold text-slate-800">About</h2>
							<p className="mt-3 text-sm leading-6 text-slate-600">{user.bio}</p>
							<div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
								<span>📍</span>
								<span>{user.location}</span>
							</div>
						</div>

						{/* Groups */}
						<div className="rounded-2xl bg-white p-6 shadow-sm">
							<h2 className="text-lg font-extrabold text-slate-800">My Groups</h2>
							<ul className="mt-3 space-y-3">
								{groups.map((group) => (
									<li
										key={group.id}
										className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-rose-50"
									>
										<div className="flex items-center gap-3">
											<span className="text-xl">{group.icon}</span>
											<div>
												<p className="text-sm font-semibold text-slate-800">{group.name}</p>
												<p className="text-xs text-slate-500">{group.members} members</p>
											</div>
										</div>
										<span className="text-xs font-bold text-rose-600">View</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Right: Recent activity */}
					<div className="space-y-6 lg:col-span-2">
						<div className="rounded-2xl bg-white p-6 shadow-sm">
							<div className="flex items-center justify-between">
								<h2 className="text-lg font-extrabold text-slate-800">Recent Activity</h2>
								<button className="cursor-pointer rounded-lg bg-rose-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-rose-700">
									+ New Post
								</button>
							</div>

							<ul className="mt-4 space-y-4">
								{recentActivity.map((item) => (
									<li
										key={item.id}
										className="rounded-xl border border-slate-100 px-5 py-4 transition hover:border-rose-200 hover:shadow-sm"
									>
										<div className="flex items-start justify-between gap-4">
											<div className="flex-1">
												<div className="flex items-center gap-2">
													<span
														className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase ${item.type === 'post' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'}`}
													>
														{item.type}
													</span>
												</div>
												<p className="mt-2 text-sm font-semibold text-slate-800">{item.title}</p>
												<p className="mt-1 text-xs text-slate-400">
													{item.date} · {item.replies} replies
												</p>
											</div>
											<button className="cursor-pointer text-xs font-bold text-rose-500 transition hover:text-rose-700">
												View →
											</button>
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* Settings card */}
						<div className="rounded-2xl bg-white p-6 shadow-sm">
							<h2 className="text-lg font-extrabold text-slate-800">Account Settings</h2>
							<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
								{[
									{ label: 'Full Name', value: user.name },
									{ label: 'Handle', value: user.handle },
									{ label: 'Email', value: 'alex.j@example.com' },
									{ label: 'Location', value: user.location },
								].map((field) => (
									<div key={field.label}>
										<label className="text-xs font-bold uppercase tracking-wide text-slate-500">
											{field.label}
										</label>
										<input
											type="text"
											defaultValue={field.value}
											className="mt-1 w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-rose-500"
										/>
									</div>
								))}
							</div>
							<button className="mt-5 cursor-pointer rounded-lg bg-rose-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700">
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
