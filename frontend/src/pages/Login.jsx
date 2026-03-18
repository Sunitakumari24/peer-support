import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { login as loginService } from '../services/authService';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await loginService(form.email, form.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1128] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center space-x-2 mb-10">
          <div className="w-12 h-12 bg-[#FF5E14] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">P</span>
          </div>
          <span className="text-3xl font-black tracking-tighter text-white">PeerSupport</span>
        </Link>

        <div className="bg-white rounded-3xl p-10 shadow-2xl">
          <h1 className="text-3xl font-black text-[#0A1128] mb-2 tracking-tighter">Welcome Back</h1>
          <p className="text-slate-500 text-sm italic mb-8">Apne account mein login karein</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2 block">Email</label>
              <input
                type="email"
                required
                placeholder="aapka@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-slate-200 rounded-xl p-4 text-sm font-bold focus:border-[#FF5E14] outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl p-4 text-sm font-bold focus:border-[#FF5E14] outline-none transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#FF5E14]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF5E14] hover:bg-[#e65512] disabled:opacity-60 text-white font-black py-5 rounded-xl transition-all uppercase tracking-widest text-xs flex items-center justify-center"
            >
              {loading ? 'Logging in...' : <><span>Login</span><ArrowRight className="ml-2 w-4 h-4" /></>}
            </button>
          </form>

          {error && <p className="text-red-500 text-sm text-center mt-4 font-bold">{error}</p>}

          <p className="text-center text-sm text-slate-500 mt-8">
            Account nahi hai?{' '}
            <Link to="/signup" className="font-black text-[#FF5E14] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
