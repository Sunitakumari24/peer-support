// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Search,
//   Bookmark,
//   MessageCircle,
//   Heart,
//   Shield,
//   BookOpen,
//   User,
//   Star,
//   ChevronRight,
//   Bell,
//   Home,
//   Compass,
//   Zap,
//   GraduationCap,
//   Scale,
//   Sparkles,
//   PlayCircle,
//   Play
// } from 'lucide-react';


// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   // use neutral/dark cards with red accents for consistent theme
//   const categories = [
//     { title: "Mental Health", desc: "Stress & Anxiety", icon: <Heart size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
//     { title: "Body & Health", desc: "Periods & Puberty", icon: <Zap size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
//     { title: "Confidence", desc: "Self-esteem", icon: <Sparkles size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
//     { title: "Safety", desc: "Online & Offline", icon: <Shield size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
//     { title: "Your Rights", desc: "Legal Advocacy", icon: <Scale size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
//     { title: "Education", desc: "Career Goals", icon: <GraduationCap size={20} />, color: "text-red-400", bg: "bg-white/5", border: "border-white/10" },
//   ];

//   const popular = [
//     { id: 1, title: "Exam Stress Hacks", desc: "5-minute routines to stay calm during finals.", category: "Education", color: "bg-emerald-100/40" },
//     { id: 2, title: "Healthy Boundaries", desc: "Learn how to say 'No' without feeling guilty.", category: "Social", color: "bg-indigo-100/40" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 text-white font-sans selection:bg-red-600">
//       <div className="w-full max-w-7xl mx-auto min-h-screen relative overflow-hidden flex flex-col px-6 py-12">
        
//   {/* Aesthetic Background Accents */}
//   <div className="absolute -top-10 -right-10 w-80 h-80 bg-red-700/20 rounded-full blur-3xl pointer-events-none" />
//   <div className="absolute -left-20 bottom-10 w-72 h-72 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />

//         {/* Top Header */}
//         <header className="w-full z-10 sticky top-0 bg-black/40 backdrop-blur-md px-4 py-6 rounded-b-xl">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <p className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] mb-1">Aura Care</p>
//               <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Resources</h1>
//             </div>
//             <div className="flex items-center gap-2">
//               <button className="p-2.5 bg-white/5 border border-white/10 rounded-2xl shadow-sm text-white/60 hover:text-red-300 transition-colors">
//                 <Bell size={20} />
//               </button>
//             </div>
//           </div>
          
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
//             <input 
//               type="text" 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search topics, videos, mentors..." 
//               className="w-full bg-black/30 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-red-700/30 focus:bg-black/20 transition-all outline-none text-sm shadow-inner placeholder:text-white/40 text-white"
//             />
//           </div>
//         </header>

//         {/* Featured Hero Section (red hero matching screenshot) */}
//         <section className="relative mt-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-900 via-red-700 to-red-600 p-8 md:p-12 text-white shadow-2xl"
//           >
//             {/* Decorative shapes */}
//             <div className="absolute top-[-8%] right-[-6%] w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
//             <div className="absolute bottom-[-12%] left-[-6%] w-60 h-60 bg-black/20 rounded-full blur-3xl pointer-events-none" />

//             <div className="relative z-10 max-w-4xl">
//               <div className="inline-flex items-center gap-2 px-4 py-1 bg-black/30 rounded-full text-xs font-semibold mb-4">
//                 <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse inline-block" /> WATCH NOW
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
//                 Calm techniques to reduce stress
//               </h2>

//               <p className="text-sm md:text-base text-white/80 mb-8 max-w-2xl">
//                 Quick, guided practices to help you reset and focus.
//               </p>

//               <div className="flex items-center gap-4">
//                 <button
//                   onClick={() => { /* TODO: wire modal open */ }}
//                   className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-6 py-3 shadow-lg transition transform active:scale-[0.98]"
//                 >
//                   Start Relaxing
//                 </button>

//                 <button
//                   onClick={() => {/* optional preview action */}}
//                   className="inline-flex items-center gap-2 bg-black/20 text-white text-sm rounded-full px-4 py-2 border border-white/10 hover:bg-black/30 transition"
//                 >
//                   <Play className="w-4 h-4" /> Watch preview
//                 </button>
//               </div>
//             </div>

//             {/* Right-side rounded accent image (use public image at /images/hero-screenshot.png) */}
//             <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
//               <div className="w-96 h-44 rounded-[1.5rem] overflow-hidden shadow-inner border border-white/10 bg-black/20">
//                 <img src="/images/hero-screenshot.png" alt="hero" className="w-full h-full object-cover" />
//               </div>
//             </div>
//           </motion.div>
//         </section>

//           {/* Detailed Resource Cards */}
//           <section className="space-y-4">
//             <h3 className="text-lg font-bold text-white mb-5">Popular Articles</h3>

//             {popular.map((item) => (
//               <div key={item.id} className="bg-white/5 p-4 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-all flex gap-4 group cursor-pointer active:scale-[0.98]">
//                 <div className={`w-24 h-24 ${item.color} rounded-xl flex-shrink-0 flex items-center justify-center transition-transform`}>
//                   <BookOpen size={28} className="text-white/70" />
//                 </div>
//                 <div className="flex flex-col justify-center flex-1">
//                   <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest mb-1">{item.category}</span>
//                   <h4 className="font-bold text-sm text-white leading-tight mb-2">{item.title}</h4>
//                   <p className="text-[12px] text-white/70 line-clamp-2 leading-relaxed mb-3">{item.desc}</p>
//                   <button className="text-red-300 text-[12px] font-bold flex items-center gap-1 hover:gap-2 transition-all">
//                     Read Guide <ChevronRight size={14} className="text-red-300" />
//                   </button>
//                 </div>
//                 <div className="pt-1">
//                   <Bookmark size={18} className="text-white/50 hover:text-red-300 cursor-pointer transition-colors" />
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* Ultra Clean Support Card */}
//           <section className="pb-8">
//             <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-8 rounded-[44px] text-white shadow-[0_20px_50px_-15px_rgba(168,85,247,0.4)] text-center relative overflow-hidden group">
//               <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
//               <div className="relative z-10">
//                 <div className="bg-white/20 w-fit mx-auto p-3 rounded-full mb-4 border border-white/20">
//                   <MessageCircle size={28} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Feeling Overwhelmed?</h3>
//                 <p className="text-white/80 text-xs mb-8 max-w-[200px] mx-auto leading-relaxed font-medium">Connect with a peer mentor who really gets it. Anonymous & safe.</p>
//                 <button className="w-full bg-white text-purple-600 font-black py-4 rounded-[22px] text-sm shadow-xl active:scale-95 transition-transform">
//                   Talk to a Mentor
//                 </button>
//               </div>
//             </div>
//           </section>

//           {/* Floating / Desktop Navigation: visible on all sizes but responsive */}
//           <div className="mt-8">
//             <nav className="w-full bg-black/30 border border-white/5 rounded-2xl py-3 px-6 flex justify-between items-center gap-4">
//               <div className="flex items-center gap-4">
//                 <Home size={22} className="text-white/60 hover:text-red-300 cursor-pointer" />
//                 <Compass size={22} className="text-white/60 hover:text-red-300 cursor-pointer" />
//               </div>
//               <div className="flex items-center gap-4">
//                 <MessageCircle size={22} className="text-white/60 hover:text-red-300 cursor-pointer" />
//                 <User size={22} className="text-white/60 hover:text-red-300 cursor-pointer" />
//               </div>
//             </nav>
//           </div>
//         </div>

//       </div>

//       <style>{`
//         .hide-scrollbar::-webkit-scrollbar { display: none; }
//         .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </div >
//   );
// };

// export default App;
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
  ChevronRight,
  Bell,
  Home,
  Compass,
  Zap,
  GraduationCap,
  Scale,
  Sparkles,
  Play
} from 'lucide-react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

        {/* Background */}
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-red-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 bottom-10 w-72 h-72 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <header className="w-full z-10 sticky top-0 bg-black/40 backdrop-blur-md px-4 py-6 rounded-b-xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em] mb-1">Aura Care</p>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Resources</h1>
            </div>
            <button className="p-2.5 bg-white/5 border border-white/10 rounded-2xl text-white/60 hover:text-red-300">
              <Bell size={20} />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="w-full bg-black/30 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none text-sm text-white"
            />
          </div>
        </header>

        {/* Hero */}
        <section className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-red-700 p-8 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Calm techniques</h2>

            <button className="bg-red-600 px-6 py-2 rounded-full">
              Start Relaxing
            </button>
          </motion.div>
        </section>

        {/* Articles */}
        <section className="space-y-4 mt-6">
          <h3 className="text-lg font-bold">Popular Articles</h3>

          {popular.map((item) => (
            <div key={item.id} className="bg-white/5 p-4 rounded-xl flex gap-4">
              <div className={`w-20 h-20 ${item.color} rounded-lg flex items-center justify-center`}>
                <BookOpen size={24} />
              </div>

              <div className="flex-1">
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>

                <button className="text-red-400 text-sm flex items-center gap-1">
                  Read Guide <ChevronRight size={14} />
                </button>
              </div>

              <Bookmark size={18} />
            </div>
          ))}
        </section>

        {/* Footer Nav */}
        <nav className="mt-8 flex justify-between bg-black/30 p-4 rounded-xl">
          <Home />
          <Compass />
          <MessageCircle />
          <User />
        </nav>

      </div>
    </div>
  );
};

export default App;