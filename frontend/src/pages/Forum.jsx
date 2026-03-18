import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';

const Forum = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar />
      <section className="bg-[#0A1128] py-24 px-6 text-center text-white">
        <div className="inline-flex items-center bg-[#FF5E14] text-white px-4 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] mb-6">
          Community
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Discussion <span className="text-[#FF5E14]">Forum</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-xl mx-auto italic">
          Apne thoughts share karein, sawaal poochhe aur doosron ki madad karein. Yahan har awaaz sunti hai.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-slate-50 rounded-3xl p-20 shadow-inner">
          <MessageSquare className="w-20 h-20 text-[#FF5E14] mx-auto mb-8" />
          <h2 className="text-3xl font-black text-[#0A1128] mb-4">Forum Coming Soon</h2>
          <p className="text-slate-500 italic">
            Hum ek vibrant community forum build kar rahe hain. Abhi ke liye humari groups join karein!
          </p>
          <a
            href="/groups"
            className="inline-flex items-center mt-8 bg-[#FF5E14] text-white px-8 py-4 rounded font-black text-xs uppercase tracking-widest hover:bg-[#e65512] transition-all"
          >
            View Groups <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <footer className="bg-[#0A1128] text-white py-12 px-6 text-center">
        <p className="text-slate-400 text-sm">© 2024 PeerSupport. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Forum;
