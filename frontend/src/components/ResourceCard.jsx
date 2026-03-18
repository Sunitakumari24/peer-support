function ResourceCard({ resource, canDelete, onDelete }) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="text-base font-extrabold text-slate-800">{resource.title}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-500">{resource.description}</p>
      <div className="mt-3 flex items-center justify-between">
        {resource.url ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-rose-600 hover:underline"
          >
            Visit →
          </a>
        ) : (
          <span />
        )}
        {canDelete && (
          <button
            onClick={() => onDelete(resource._id)}
            className="text-xs text-slate-400 hover:text-red-500"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default ResourceCard;
