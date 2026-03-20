<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  PlayCircle,
  Play
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

        {/* Featured Hero Section (red hero matching screenshot) */}
        <section className="relative mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-900 via-red-700 to-red-600 p-8 md:p-12 text-white shadow-2xl"
          >
            {/* Decorative shapes */}
            <div className="absolute top-[-8%] right-[-6%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-12%] left-[-6%] w-60 h-60 bg-black/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/30 rounded-full text-xs font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse inline-block" /> WATCH NOW
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                Calm techniques to reduce stress
              </h2>

              <p className="text-sm md:text-base text-white/80 mb-8 max-w-2xl">
                Quick, guided practices to help you reset and focus.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => { /* TODO: wire modal open */ }}
                  className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-6 py-3 shadow-lg transition transform active:scale-[0.98]"
                >
                  Start Relaxing
                </button>

                <button
                  onClick={() => {/* optional preview action */}}
                  className="inline-flex items-center gap-2 bg-black/20 text-white text-sm rounded-full px-4 py-2 border border-white/10 hover:bg-black/30 transition"
                >
                  <Play className="w-4 h-4" /> Watch preview
                </button>
              </div>
            </div>

            {/* Right-side rounded accent image (use public image at /images/hero-screenshot.png) */}
            <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
              <div className="w-96 h-44 rounded-[1.5rem] overflow-hidden shadow-inner border border-white/10 bg-black/20">
                <img src="/images/hero-screenshot.png" alt="hero" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
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
=======
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  Brain, 
  Briefcase, 
  Scale, 
  Wallet, 
  Download, 
  ExternalLink, 
  Bookmark, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  ArrowRight, 
  Phone 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { name: 'All', icon: <Filter className="w-4 h-4" /> },
    { name: 'Mental Health', icon: <Brain className="w-4 h-4" /> },
    { name: 'Career & Skills', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Legal Support', icon: <Scale className="w-4 h-4" /> },
    { name: 'Financial Literacy', icon: <Wallet className="w-4 h-4" /> },
    { name: 'Education', icon: <BookOpen className="w-4 h-4" /> }
  ];

  const resources = [
    {
      id: 1,
      title: "Managing Exam Stress",
      category: "Mental Health",
      desc: "Proven techniques to handle pressure during finals and maintain mental peace.",
      type: "PDF Guide",
      time: "5 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      title: "Women's Property Rights",
      category: "Legal Support",
      desc: "A simplified guide to understanding inheritance and property laws for women.",
      type: "External Link",
      time: "10 min read",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      title: "Resume Building 101",
      category: "Career & Skills",
      desc: "Step-by-step tutorial on creating a professional resume that stands out.",
      type: "Video",
      time: "12 min video",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      title: "Personal Finance Basics",
      category: "Financial Literacy",
      desc: "Learn how to save, invest, and manage your first salary effectively.",
      type: "PDF Guide",
      time: "8 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 5,
      title: "Confidence & Public Speaking",
      category: "Education",
      desc: "Practical tips to overcome stage fear and speak with authority.",
      type: "Video",
      time: "15 min video",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 6,
      title: "Dealing with Workplace Harassment",
      category: "Legal Support",
      desc: "Know your rights and the steps to take for a safe professional environment.",
      type: "PDF Guide",
      time: "7 min read",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const faqs = [
    { 
      q: "Stress aur anxiety ko kaise manage karein?", 
      a: "Daily stress manage karne ke liye mindfulness meditation karein, proper sleep routine rakhein, aur apne thoughts ko journal mein likhein. Zaroorat padne par hamare anonymous peer chat feature ka use karein." 
    },
    { 
      q: "Legal help kahan se milegi?", 
      a: "Aap 'Legal Support' category mein National Commission for Women (NCW) aur verified NGOs ke portals check kar sakte hain." 
    },
    { 
      q: "Sahi career kaise chunein?", 
      a: "Apne interests aur strengths ko pehchanein. Career section mein diye gaye 'Self-Assessment Guide' PDF ko padhein aur mentors se salah lein." 
    },
    { 
      q: "Discrimination face karne par kya karein?", 
      a: "Events ka record rakhein, POSH act ke baare mein jaanein, aur Legal Support section mein bataye gaye process ko follow karein." 
    },
    { 
      q: "Kya ye saare resources free hain?", 
      a: "Ji haan, Peer Support platform par available saare educational materials aur guides bilkul free hain." 
    }
  ];

  const filteredResources = useMemo(() => {
    return resources.filter(r => {
      const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
      const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A1128] antialiased pb-20">
      <Navbar />
      {/* Hero Section */}
      <header className="relative h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Banner" />
          <div className="absolute inset-0 bg-[#0A1128]/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center text-white">
          <div className="inline-block bg-[#FF5E14] px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Empowerment Hub</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Educational Resources</h1>
          <p className="text-slate-300 max-w-xl mx-auto italic text-sm">Apne sapno ko udaan dene ke liye sahi jaankari aur tools ka upyog karein.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Filter and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all whitespace-nowrap border ${
                  activeCategory === cat.name 
                  ? 'bg-[#FF5E14] text-white border-[#FF5E14] shadow-lg shadow-orange-200' 
                  : 'bg-white text-slate-500 border-slate-100 hover:border-[#FF5E14]'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#FF5E14]" />
            <input 
              type="text" 
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-transparent rounded-xl focus:ring-2 focus:ring-[#FF5E14] focus:bg-white outline-none font-bold text-xs tracking-tight transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredResources.length > 0 ? (
            filteredResources.map((res) => (
              <div key={res.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={res.image} alt={res.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[9px] font-black uppercase text-[#FF5E14]">
                    {res.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{res.time}</span>
                    <span className="mx-2">•</span>
                    <span className="text-[#FF5E14] font-black">{res.type}</span>
                  </div>
                  <h3 className="text-lg font-black tracking-tight leading-tight">{res.title}</h3>
                  <p className="text-xs text-slate-500 italic line-clamp-2">{res.desc}</p>
                  
                  <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                    <button className="flex items-center text-[10px] font-black uppercase tracking-widest text-[#0A1128] hover:text-[#FF5E14] transition-all">
                      Details <ArrowRight className="ml-1 w-3 h-3" />
                    </button>
                    <button className="p-2 bg-slate-50 hover:bg-[#FF5E14] hover:text-white rounded-lg text-slate-400 transition-all">
                      {res.type === 'PDF Guide' ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No resources found for "{searchQuery}"</p>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[#FF5E14] font-black uppercase tracking-[0.3em] text-[9px]">Help Center</span>
            <h2 className="text-3xl font-black tracking-tighter mt-2 uppercase">Aksar Puche Jane Wale Sawal</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                >
                  <span className="font-bold text-slate-700 text-sm">{faq.q}</span>
                  {expandedFaq === idx ? <ChevronUp className="w-4 h-4 text-[#FF5E14]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 text-slate-500 text-xs leading-relaxed italic border-t border-slate-200/30 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Suggestion Section */}
        <section className="bg-[#0A1128] rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-[#FF5E14] font-black uppercase tracking-[0.3em] text-[9px]">Feedback</span>
            <h2 className="text-3xl font-black tracking-tighter uppercase">Naye Topics Suggest Karein</h2>
            <p className="text-slate-400 text-xs italic leading-relaxed">Agar aapko koi specific jaankari nahi mil rahi hai, toh humein batayein. Hum jald hi use yahan add karenge.</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <input 
                type="text" 
                placeholder="Topic ka naam likhein..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#FF5E14] text-xs font-bold uppercase tracking-widest transition-all"
              />
              <button className="bg-[#FF5E14] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#FF5E14] transition-all">
                Submit
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5E14]/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8"></div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
>>>>>>> 5685bdf84f25934529ba0b40b8d1e53ec20e5d92
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default Resources;
>>>>>>> 5685bdf84f25934529ba0b40b8d1e53ec20e5d92
