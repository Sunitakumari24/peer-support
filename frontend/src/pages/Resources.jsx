import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ResourceCard from '../components/ResourceCard';
import api from '../services/api';
import { useAuth } from './useAuth';

function Resources() {
  const { user } = useAuth();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    api.get('/resources').then(({ data }) => {
      setResources(data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/resources', { title, description, url });
    setResources([data, ...resources]);
    setTitle('');
    setDescription('');
    setUrl('');
  };

  const handleDelete = async (id) => {
    await api.delete(`/resources/${id}`);
    setResources(resources.filter((r) => r._id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="mb-2 text-3xl font-extrabold text-rose-600">Resources</h1>
        <p className="mb-8 text-slate-500">Helpful links and guides shared by the community.</p>

        {user && (
          <form onSubmit={handleSubmit} className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold">Add a Resource</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Title"
                className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
              />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="URL (optional)"
                className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={2}
                placeholder="Short description"
                className="rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500 sm:col-span-2"
              />
            </div>
            <button
              type="submit"
              className="mt-3 rounded-lg bg-rose-600 px-6 py-2 text-sm font-bold text-white hover:bg-rose-700"
            >
              Add Resource
            </button>
          </form>
        )}

        {loading ? (
          <p className="text-slate-500">Loading resources…</p>
        ) : resources.length === 0 ? (
          <p className="text-slate-500">No resources yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {resources.map((r) => (
              <ResourceCard
                key={r._id}
                resource={r}
                canDelete={user && r.postedBy?._id === user._id}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;
