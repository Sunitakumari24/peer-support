const CATEGORY_COLORS = {
	article: 'bg-blue-100 text-blue-700',
	video: 'bg-purple-100 text-purple-700',
	hotline: 'bg-red-100 text-red-700',
	tool: 'bg-green-100 text-green-700',
	other: 'bg-slate-100 text-slate-700',
}

function ResourceCard({ resource }) {
	return (
		<div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
			<span
				className={`self-start rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider ${CATEGORY_COLORS[resource.category] || CATEGORY_COLORS.other}`}
			>
				{resource.category}
			</span>
			<h3 className="mt-3 text-lg font-bold text-slate-800">{resource.title}</h3>
			<p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{resource.description}</p>
			{resource.url && (
				<a
					href={resource.url}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-5 inline-block rounded-lg border border-rose-600 px-4 py-1.5 text-sm font-bold text-rose-600 transition hover:bg-rose-50"
				>
					Learn More →
				</a>
			)}
		</div>
	)
}

export default ResourceCard
