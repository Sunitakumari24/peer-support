export default function ResourceCard({ resource }) {
	return (
		<div className="rounded-2xl bg-white px-6 py-6 shadow-sm hover:shadow-md transition-shadow">
			<div className="flex items-start gap-4">
				<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-2xl">
					{resource.icon}
				</div>
				<div className="flex-1 min-w-0">
					<span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
						{resource.category}
					</span>
					<h3 className="mt-1.5 text-base font-bold text-slate-800">{resource.title}</h3>
					<p className="mt-1 text-sm leading-6 text-slate-500">{resource.description}</p>
				</div>
			</div>
			{resource.link ? (
				<a
					href={resource.link}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-rose-200 py-2 text-sm font-bold text-rose-600 transition hover:bg-rose-50"
				>
					Learn More →
				</a>
			) : (
				<button className="mt-4 w-full rounded-lg bg-rose-600 py-2 text-sm font-bold text-white transition hover:bg-rose-700">
					View Resource
				</button>
			)}
		</div>
	)
}
