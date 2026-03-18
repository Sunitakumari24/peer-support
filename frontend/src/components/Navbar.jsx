import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, LayoutGrid, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/resources', label: 'Resources' },
    { to: '/groups', label: 'Groups' },
    { to: '/forum', label: 'Forum' },
    { to: '/chat', label: 'Chat' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#FF5E14] rounded-full flex items-center justify-center shadow-lg shadow-orange-200">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#0A1128]">PeerSupport</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-bold text-sm uppercase tracking-widest transition-colors ${
                location.pathname === link.to
                  ? 'text-[#FF5E14] border-b-2 border-[#FF5E14] pb-1'
                  : 'text-slate-600 hover:text-[#FF5E14]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4 pr-6 border-r border-slate-200">
            <Search className="w-5 h-5 text-slate-400 cursor-pointer hover:text-[#FF5E14] transition-colors" />
            <LayoutGrid className="w-5 h-5 text-slate-400 cursor-pointer hover:text-[#FF5E14] transition-colors" />
          </div>
          <div className="hidden lg:flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <Phone className="w-5 h-5 text-[#FF5E14]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-none mb-1">Call Anytime</span>
              <span className="text-sm font-black text-[#0A1128] leading-none tracking-tight">+91 98765 43210</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 ml-4">
            <Link to="/login" className="hidden md:inline-block px-4 py-2 text-xs font-black uppercase tracking-widest text-[#0A1128] border-2 border-[#0A1128] rounded hover:bg-[#0A1128] hover:text-white transition-all">
              Login
            </Link>
            <Link to="/signup" className="hidden md:inline-block px-4 py-2 text-xs font-black uppercase tracking-widest bg-[#FF5E14] text-white rounded hover:bg-[#e65512] transition-all">
              Sign Up
            </Link>
            <button
              className="md:hidden text-slate-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-slate-100 pt-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2 font-bold text-sm uppercase tracking-widest ${
                location.pathname === link.to ? 'text-[#FF5E14]' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex space-x-3 px-4 pt-2">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-xs font-black uppercase border-2 border-[#0A1128] rounded text-[#0A1128]">Login</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="px-4 py-2 text-xs font-black uppercase bg-[#FF5E14] text-white rounded">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
