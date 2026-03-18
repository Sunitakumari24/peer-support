function GroupCard({ group }) {
	return (
		<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
			<div className="flex items-center gap-3">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-3xl">
					{group.emoji}
				</div>
				<div>
					<h3 className="text-lg font-bold text-slate-800">{group.name}</h3>
					<span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
						{group.category}
					</span>
				</div>
			</div>
			<p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{group.description}</p>
			<div className="mt-5 flex items-center justify-between">
				<span className="text-sm text-slate-500">👥 {group.members} members</span>
				<button className="rounded-lg bg-rose-600 px-4 py-1.5 text-sm font-bold text-white transition hover:bg-rose-700">
					Join Group
				</button>
			</div>
		</div>
	)
}

export default GroupCard
