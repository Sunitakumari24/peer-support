import React, { useState } from 'react';
import { 
  Search, 
  Bookmark, 
  MessageCircle, 
  Heart, 
  Shield, 
  BookOpen, 
  User, 
  Star, 
  ChevronRight,
  Bell,
  Home,
  Compass,
  Zap,
  GraduationCap,
  Scale,
  Sparkles,
  PlayCircle
} from 'lucide-react';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // use neutral/dark cards with red accents for consistent theme
  const categories = [
    { title: "Mental Health", desc: "Stress & Anxiety", icon: <Heart size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
    { title: "Body & Health", desc: "Periods & Puberty", icon: <Zap size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
    { title: "Confidence", desc: "Self-esteem", icon: <Sparkles size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
    { title: "Safety", desc: "Online & Offline", icon: <Shield size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
    { title: "Your Rights", desc: "Legal Advocacy", icon: <Scale size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
    { title: "Education", desc: "Career Goals", icon: <GraduationCap size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
  ];

  const popular = [
    { id: 1, title: "Exam Stress Hacks", desc: "5-minute routines to stay calm during finals.", category: "Education", color: "bg-emerald-100/40" },
    { id: 2, title: "Healthy Boundaries", desc: "Learn how to say 'No' without feeling guilty.", category: "Social", color: "bg-indigo-100/40" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white font-sans selection:bg-red-600">
      <div className="w-full max-w-7xl mx-auto min-h-screen relative overflow-hidden flex flex-col px-6 py-12">
        
  {/* Aesthetic Background Accents */}
  <div className="absolute -top-10 -right-10 w-80 h-80 bg-red-700/20 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute -left-20 bottom-10 w-72 h-72 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <header className="w-full z-10 sticky top-0 bg-black/40 backdrop-blur-md px-4 py-6 rounded-b-xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] mb-1">Aura Care</p>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Resources</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2.5 bg-white/5 border border-white/10 rounded-2xl shadow-sm text-white/60 hover:text-red-300 transition-colors">
                <Bell size={20} />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, videos, mentors..." 
              className="w-full bg-black/30 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-red-700/30 focus:bg-black/20 transition-all outline-none text-sm shadow-inner placeholder:text-white/40 text-white"
            />
          </div>
        </header>

        {/* Scrollable Content Area */}
  <div className="flex-1 overflow-y-auto pb-36 hide-scrollbar px-2 sm:px-6 relative z-10 space-y-10">
          
          {/* Featured Video / Daily Quote */}
          <section className="mt-2">
            <div className="bg-gradient-to-br from-black/80 via-red-900/60 to-red-800 rounded-2xl p-6 text-white relative overflow-hidden group shadow-2xl shadow-black/60">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2 border border-white/10">
                  <PlayCircle size={12} className="text-pink-400" /> Watch Now
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">Calm techniques to reduce stress</h2>
                <p className="text-white/70 text-sm mb-6">Quick, guided practices to help you reset and focus.</p>
                <button className="bg-red-600 text-white px-6 py-2.5 rounded-2xl text-sm font-bold hover:bg-red-700 transition-colors active:scale-95">
                  Start Relaxing
                </button>
              </div>
            </div>
          </section>

          {/* Quick Categories */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-white">Browse Topics</h3>
              <button className="text-[10px] font-bold text-red-400 uppercase tracking-widest hover:underline">Explore All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className={`${cat.bg} ${cat.border} p-6 rounded-2xl hover:shadow-xl transition-all cursor-pointer group border`}>
                  <div className={`bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">{cat.title}</h4>
                  <p className="text-[12px] text-white/70 font-medium leading-tight">{cat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Horizontal Scroller */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-5">Personalized for You</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Yoga for Anxiety", min: "10", color: "bg-rose-100/50" },
                { title: "Mindful Eating", min: "5", color: "bg-sky-100/50" },
                { title: "Leadership 101", min: "15", color: "bg-emerald-100/50" }
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group`}>{/* card */}
                  <div className="bg-white/10 absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-30" />
                  <h4 className="font-bold text-sm text-white mb-2 leading-tight">{item.title}</h4>
                  <p className="text-[12px] text-white/70 font-medium flex items-center gap-2"><Star size={12} className="text-yellow-400" /> {item.min} min</p>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Resource Cards */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-5">Popular Articles</h3>
            {popular.map((item) => (
              <div key={item.id} className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-all flex gap-4 group cursor-pointer active:scale-[0.98]">
                <div className={`w-24 h-24 ${item.color} rounded-xl flex-shrink-0 flex items-center justify-center transition-transform`}>
                  <BookOpen size={28} className="text-white/70" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest mb-1">{item.category}</span>
                  <h4 className="font-bold text-sm text-white leading-tight mb-2">{item.title}</h4>
                  <p className="text-[12px] text-white/70 line-clamp-2 leading-relaxed mb-3">{item.desc}</p>
                  <button className="text-red-300 text-[12px] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Read Guide <ChevronRight size={14} className="text-red-300" />
                  </button>
                </div>
                <div className="pt-1">
                  <Bookmark size={18} className="text-white/50 hover:text-red-300 cursor-pointer transition-colors" />
                </div>
              </div>
            ))}
          </section>

          {/* Ultra Clean Support Card */}
          <section className="pb-8">
            <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-8 rounded-[44px] text-white shadow-[0_20px_50px_-15px_rgba(168,85,247,0.4)] text-center relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="bg-white/20 w-fit mx-auto p-3 rounded-full mb-4 border border-white/20">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Feeling Overwhelmed?</h3>
                <p className="text-white/80 text-xs mb-8 max-w-[200px] mx-auto leading-relaxed font-medium">Connect with a peer mentor who really gets it. Anonymous & safe.</p>
                <button className="w-full bg-white text-purple-600 font-black py-4 rounded-[22px] text-sm shadow-xl active:scale-95 transition-transform">
                  Talk to a Mentor
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Floating / Desktop Navigation: visible on all sizes but responsive */}
        <div className="mt-8">
          <nav className="w-full bg-black/30 border border-white/5 rounded-2xl py-3 px-6 flex justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Home size={22} className="text-white/60 hover:text-red-300 cursor-pointer" />
              <Compass size={22} className="text-white/60 hover:text-red-300 cursor-pointer" />
            </div>
            <div className="flex items-center gap-4">
              <MessageCircle size={22} className="text-white/60 hover:text-red-300 cursor-pointer" />
              <User size={22} className="text-white/60 hover:text-red-300 cursor-pointer" />
            </div>
          </nav>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;