export default function GroupCard({ group, onJoin }) {
	return (
		<div className="rounded-2xl bg-white px-6 py-6 shadow-sm">
			<div className="flex items-start gap-4">
				<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-2xl">
					{group.icon}
				</div>
				<div className="flex-1 min-w-0">
					<h3 className="truncate text-lg font-bold text-slate-800">{group.name}</h3>
					<p className="mt-1 text-sm leading-6 text-slate-500">{group.description}</p>
					<div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
						<span>👥 {group.members} members</span>
						<span>•</span>
						<span>{group.category}</span>
					</div>
				</div>
			</div>
			<button
				onClick={() => onJoin(group)}
				className="mt-4 w-full rounded-lg bg-rose-600 py-2 text-sm font-bold text-white transition hover:bg-rose-700"
			>
				Join Group
			</button>
		</div>
	)
}
