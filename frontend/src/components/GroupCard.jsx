function GroupCard({ group }) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
      <span className="mb-2 inline-block w-fit rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-600">
        {group.category}
      </span>
      <h3 className="text-lg font-extrabold text-slate-800">{group.name}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-500">{group.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-400">👥 {group.members} members</span>
        <button className="rounded-lg bg-rose-600 px-4 py-1.5 text-sm font-bold text-white hover:bg-rose-700">
          Join Group
        </button>
      </div>
    </div>
  );
}

export default GroupCard;
