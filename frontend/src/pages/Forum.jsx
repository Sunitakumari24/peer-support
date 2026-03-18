import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../services/api';
import { useAuth } from './useAuth';

function Forum() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/forum').then(({ data }) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/forum', { title, content });
    setPosts([data, ...posts]);
    setTitle('');
    setContent('');
  };

  const handleLike = async (id) => {
    const { data } = await api.put(`/forum/${id}/like`);
    setPosts(posts.map((p) => (p._id === id ? data : p)));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-extrabold text-rose-600">Community Forum</h1>

        {user && (
          <form onSubmit={handleSubmit} className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold">Share Something</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Post title"
              className="mb-3 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={3}
              placeholder="What's on your mind?"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-rose-500"
            />
            <button
              type="submit"
              className="mt-3 rounded-lg bg-rose-600 px-6 py-2 text-sm font-bold text-white hover:bg-rose-700"
            >
              Post
            </button>
          </form>
        )}

        {loading ? (
          <p className="text-slate-500">Loading posts…</p>
        ) : posts.length === 0 ? (
          <p className="text-slate-500">No posts yet. Be the first to share!</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post._id} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="mb-1 text-xs text-slate-400">
                  {post.author?.name} · {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <h3 className="text-lg font-bold text-slate-800">{post.title}</h3>
                <p className="mt-2 text-slate-600">{post.content}</p>
                <button
                  onClick={() => user && handleLike(post._id)}
                  className="mt-3 text-sm font-semibold text-rose-500 hover:text-rose-700"
                >
                  ♥ {post.likes?.length ?? 0} Likes
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Forum;
