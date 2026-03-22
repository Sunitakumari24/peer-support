// import React, { useState, useEffect } from 'react';
// // hero image will be served from public/images/hero-screenshot.png

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
//   Play,
//   Pause,
//   RotateCcw,
//   X,
  // PenLine,
  // Wind,
  // Music,
//   Wind,
//   Moon,
//   Music
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
  // const [showMentalHealth, setShowMentalHealth] = useState(false);


// // --- Modal + BreathingExercise components (red/black themed) ---
// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;
//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
//         onClick={onClose}
//       >
//         <motion.div
//           initial={{ scale: 0.95, opacity: 0, y: 20 }}
//           animate={{ scale: 1, opacity: 1, y: 0 }}
//           exit={{ scale: 0.95, opacity: 0, y: 20 }}
//           className="relative w-full max-w-2xl overflow-hidden bg-black/90 rounded-2xl shadow-2xl border border-white/10"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 transition-colors z-10"
//           >
//             <X className="w-6 h-6 text-white/70" />
//           </button>
//           {children}
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// const BreathingExercise = () => {
//   const [mode, setMode] = useState('breathing');
//   const [timeLeft, setTimeLeft] = useState(120);
//   const [isActive, setIsActive] = useState(true);
//   const [breathPhase, setBreathPhase] = useState('Inhale');

//   useEffect(() => {
//     if (mode !== 'breathing' || !isActive) return;
//     const cycle = setInterval(() => {
//       setBreathPhase(prev => {
//         if (prev === 'Inhale') return 'Hold';
//         if (prev === 'Hold') return 'Exhale';
//         return 'Inhale';
//       });
//     }, 4000);
//     return () => clearInterval(cycle);
//   }, [mode, isActive]);

//   useEffect(() => {
//     let interval = null;
//     if (isActive && timeLeft > 0) {
//       interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
//     } else if (timeLeft === 0) {
//       setIsActive(false);
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, timeLeft]);

//   const formatTime = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
//   const resetSession = (secs, newMode) => { setMode(newMode); setTimeLeft(secs); setIsActive(true); setBreathPhase('Inhale'); };

//   return (
//     <div className="p-8 md:p-12 flex flex-col items-center text-center min-h-[420px]">
//       <div className="flex bg-white/5 p-1 rounded-2xl mb-6">
//         <button onClick={() => resetSession(120,'breathing')} className={`px-4 py-2 rounded-xl text-sm ${mode==='breathing' ? 'bg-red-700 text-white' : 'text-white/70'}`}>Breathing (2m)</button>
//         <button onClick={() => resetSession(300,'meditation')} className={`px-4 py-2 rounded-xl text-sm ${mode==='meditation' ? 'bg-red-700 text-white' : 'text-white/70'}`}>Meditation (5m)</button>
//         <button onClick={() => setMode('music')} className={`px-4 py-2 rounded-xl text-sm ${mode==='music' ? 'bg-red-700 text-white' : 'text-white/70'}`}>Calm Music</button>
//       </div>

//       {mode === 'music' ? (
//         <div className="flex-1 flex flex-col items-center justify-center space-y-6">
//           <div className="w-28 h-28 bg-red-800/40 rounded-full flex items-center justify-center animate-pulse">
//             <Music className="w-12 h-12 text-red-400" />
//           </div>
//           <h3 className="text-2xl font-semibold">Lofi Rain & Piano</h3>
//           <p className="text-white/70 max-w-xs">Relaxing ambient tones to help you focus or drift off.</p>
//           <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full"> <Play className="w-5 h-5"/> Play Audio</button>
//         </div>
//       ) : (
//         <>
//           <div className="relative flex items-center justify-center mb-8">
//             <motion.div animate={{ scale: isActive && mode==='breathing' ? (breathPhase==='Inhale' ? 1.45 : breathPhase==='Hold' ? 1.45 : 1) : 1 }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute w-48 h-48 bg-red-700/20 rounded-full blur-2xl" />
//             <motion.div animate={{ scale: isActive && mode==='breathing' ? (breathPhase==='Inhale' ? 1.35 : breathPhase==='Hold' ? 1.35 : 1) : 1 }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="w-48 h-48 border-2 border-red-700/30 rounded-full flex items-center justify-center">
//               <div className="text-3xl font-light text-red-300">{formatTime(timeLeft)}</div>
//             </motion.div>
//           </div>

//           <motion.h2 initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} className="text-3xl font-semibold mb-4">{mode==='meditation' ? 'Be Present' : breathPhase + '...'}</motion.h2>
//           <p className="text-white/70 mb-8 max-w-md">{mode==='breathing' ? 'Follow the circle. Inhale as it grows, exhale as it shrinks.' : 'Close your eyes and focus on your heartbeat.'}</p>

//           <div className="flex gap-4">
//             <button onClick={() => setIsActive(!isActive)} className="p-3 rounded-full bg-white/5">{isActive ? <Pause className="w-5 h-5"/> : <Play className="w-5 h-5"/>}</button>
//             <button onClick={() => resetSession(mode==='breathing'?120:300, mode)} className="p-3 rounded-full bg-white/5"><RotateCcw className="w-5 h-5"/></button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };



// // --- Main Resources Page ---
// export default function Resources() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isRelaxOpen, setIsRelaxOpen] = useState(false);

//   // Colors matched to Home page: rose-600, white, slate-900, slate-200, slate-800, slate-600
//   const categories = [
//     { title: 'Mental Health', desc: 'Stress & Anxiety', icon: <Heart size={18} />, color: 'text-rose-600' },
//     { title: 'Body & Health', desc: 'Periods & Puberty', icon: <Zap size={18} />, color: 'text-rose-600' },
//     { title: 'Confidence', desc: 'Self-esteem', icon: <Sparkles size={18} />, color: 'text-rose-600' },
//     { title: 'Safety', desc: 'Online & Offline', icon: <Shield size={18} />, color: 'text-rose-600' },
//     { title: 'Your Rights', desc: 'Legal Advocacy', icon: <Scale size={18} />, color: 'text-rose-600' },
//     { title: 'Education', desc: 'Career Goals', icon: <GraduationCap size={18} />, color: 'text-rose-600' }
//   ];

//   const popular = [
//     { id: 1, title: 'Exam Stress Hacks', desc: '5-minute routines to stay calm during finals.', category: 'Education' },
//     { id: 2, title: 'Healthy Boundaries', desc: "Learn how to say 'No' without feeling guilty.", category: 'Social' }
//   ];

//   return (
//   <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-rose-200">
//   <div className="w-full max-w-7xl mx-auto px-6 py-12">
//         {/* Header */}
//         <header className="flex items-center justify-between mb-8">
//           <div>
//             <p className="text-xs font-bold text-rose-600 uppercase tracking-widest">Aura Care</p>
//             <h1 className="text-4xl font-extrabold text-white">Resources</h1>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <Search className="absolute left-3 top-3 text-rose-400 w-4 h-4" />
//               <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 pr-4 py-3 rounded-2xl bg-white/90 border border-rose-100 text-slate-900 placeholder-rose-400"
//                 placeholder="Search topics, videos..." />
//             </div>
//             <button className="p-2.5 bg-rose-600 border border-rose-100 rounded-2xl"><Bell size={18} className="text-white" /></button>
//           </div>
//         </header>

//         {/* Hero */}
//         <section className="mb-10">
//           <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
//             className="rounded-3xl bg-gradient-to-br from-rose-600 via-rose-400 to-white p-10 md:p-16 shadow-2xl relative overflow-hidden">
//             <div className="absolute -top-10 -right-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl" />
//             <div className="max-w-3xl">
//               <div className="inline-flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-xs mb-4">
//                 <span className="w-2 h-2 rounded-full bg-rose-600 inline-block animate-pulse" /> WATCH NOW
//               </div>
//               <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Calm techniques to reduce stress</h2>
//               <p className="text-slate-200 mb-8 max-w-2xl">Quick, guided practices to help you reset and focus.</p>
//               <div className="flex items-center gap-4">
//                 <button onClick={() => setIsRelaxOpen(true)}
//                   className="inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-700">Start Relaxing</button>
//                 <button className="inline-flex items-center gap-2 bg-white/80 text-rose-600 px-4 py-2 rounded-full border border-rose-100"><Play className="w-4 h-4"/> Watch preview</button>
//               </div>
//             </div>
//             <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
//               <div className="w-96 h-56 rounded-xl overflow-hidden border border-rose-100 bg-white/80">
//                 <img src="/images/hero-screenshot.png" alt="hero" className="w-full h-full object-cover" />
//               </div>
//             </div>
//           </motion.div>
//         </section>

//         {/* Categories + Popular */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {categories.map((c, i) => (
//                 <div key={i} className="bg-white border border-rose-100 p-5 rounded-2xl">
//                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-rose-100/30 ${c.color}`}>{c.icon}</div>
//                   <h4 className="font-bold text-lg mb-1 text-slate-900">{c.title}</h4>
//                   <p className="text-slate-600 text-sm">{c.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <section className="mt-6">
//               <h3 className="text-lg font-bold mb-4 text-white">Popular Articles</h3>
//               <div className="space-y-4">
//                 {popular.map(item => (
//                   <div key={item.id} className="bg-white p-4 rounded-2xl border border-rose-100 flex items-start gap-4">
//                     <div className="w-20 h-20 bg-rose-100/30 rounded-xl flex items-center justify-center"><BookOpen size={26} className="text-rose-600"/></div>
//                     <div className="flex-1">
//                       <span className="text-xs font-bold text-rose-600 uppercase">{item.category}</span>
//                       <h4 className="font-bold text-slate-900">{item.title}</h4>
//                       <p className="text-slate-600 text-sm">{item.desc}</p>
//                     </div>
//                     <div className="pt-1"><Bookmark size={18} className="text-rose-600"/></div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>

//           <aside className="space-y-6">
//             <div className="bg-white p-6 rounded-2xl border border-rose-100">
//               <h4 className="font-bold mb-2 text-slate-900">Need immediate support?</h4>
//               <p className="text-slate-600 text-sm mb-4">Chat with a peer mentor anonymously. Available 24/7.</p>
//               <button className="w-full bg-rose-600 text-white py-3 rounded-xl font-bold hover:bg-rose-700">Talk to a Mentor</button>
//             </div>
//             <div className="bg-white p-6 rounded-2xl border border-rose-100">
//               <h4 className="font-bold mb-2 text-slate-900">Quick Picks</h4>
//               <ul className="space-y-2 text-slate-800">
//                 <li className="flex items-center justify-between"><span>Yoga for Anxiety</span><span className="text-rose-600">10m</span></li>
//                 <li className="flex items-center justify-between"><span>Mindful Eating</span><span className="text-rose-600">5m</span></li>
//                 <li className="flex items-center justify-between"><span>Leadership 101</span><span className="text-rose-600">15m</span></li>
//               </ul>
//             </div>
//           </aside>
//         </div>

//         {/* Floating Nav */}
//         <div className="mt-10">
//           <nav className="w-full bg-white/80 border border-rose-100 rounded-2xl py-3 px-6 flex justify-between items-center gap-4">
//             <div className="flex items-center gap-4">
//               <Home size={20} className="text-rose-600" />
//               <Compass size={20} className="text-rose-600" />
//             </div>
//             <div className="flex items-center gap-4">
//               <MessageCircle size={20} className="text-rose-600" />
//               <User size={20} className="text-rose-600" />
//             </div>
//           </nav>
//         </div>
//       </div>

//       <Modal isOpen={isRelaxOpen} onClose={() => setIsRelaxOpen(false)}>
//         <BreathingExercise />
//       </Modal>

//       <style>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
//     </div>
//   );
// }

  

import React, { useState } from 'react';
import StressAnxietyScreen from '../components/StressAnxietyScreen';
import HealthCard from '../components/HealthCard';
import HealthScreen from '../components/HealthScreen';
import ConfidenceCard from '../components/ConfidenceCard';
import ConfidenceModal from '../components/ConfidenceModal';
import SafetyScreen from '../components/SafetyScreen';
import RightsScreen from '../components/RightsScreen';
import EducationScreen from '../components/EducationScreen';
import {
  Search,
  Bookmark,
  MessageCircle,
  Heart,
  Shield,
  BookOpen,
  User,
  Bell,
  Home,
  Compass,
  Zap,
  GraduationCap,
  Scale,
  Sparkles,
  Play,
  Brain,
  Flame,
  Info
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showStressModal, setShowStressModal] = useState(false);
  const [showHealthModal, setShowHealthModal] = useState(false);
  const [showConfidenceModal, setShowConfidenceModal] = useState(false);
  const [showSafetyModal, setShowSafetyModal] = useState(false);
  const [showRightsModal, setShowRightsModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);

  const categories = [
    { title: 'Mental Health', desc: 'Stress & Anxiety' },
    { title: 'Body & Health', desc: 'Periods & Puberty', icon: <Zap size={18} /> },
    { title: 'Confidence', desc: 'Self-esteem', icon: <Sparkles size={18} /> },
    { title: 'Safety', desc: 'Online & Offline', icon: <Shield size={18} /> },
    { title: 'Your Rights', desc: 'Legal Advocacy', icon: <Scale size={18} /> },
    { title: 'Education', desc: 'Career Goals', icon: <GraduationCap size={18} /> }
  ];

  const popular = [
    { id: 1, title: 'Exam Stress Hacks', desc: '5-minute routines to stay calm during finals.', category: 'Education' },
    { id: 2, title: 'Healthy Boundaries', desc: "Learn how to say 'No' without feeling guilty.", category: 'Social' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-rose-600 uppercase tracking-widest">Aura Care</p>
            <h1 className="text-4xl font-extrabold text-white">Resources</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-rose-400 w-4 h-4" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-2xl bg-slate-900/80 text-white placeholder:text-slate-400 border border-white/10"
                placeholder="Search..."
              />
            </div>
            <button className="p-2.5 bg-rose-600 rounded-2xl shadow-md shadow-rose-500/40">
              <Bell size={18} className="text-white" />
            </button>
          </div>
        </header>

        {/* Hero with image on the left and text on the right */}
        <section className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-gradient-to-br from-rose-600 via-rose-500 to-orange-300 p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* subtle glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* LEFT: hero image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-rose-100/60 shadow-xl shadow-rose-500/40 bg-white/80">
                  <img
                    src="/images/team-circle.jpg" // put this file in frontend/public/images/team-circle.jpg
                    alt="Supportive group"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT: text + buttons */}
              <div className="w-full md:w-1/2 max-w-xl">
                <div className="inline-flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-xs mb-4">
                  <span className="w-2 h-2 rounded-full bg-rose-600 inline-block animate-pulse" />
                  WATCH NOW
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
                  Calm techniques to reduce stress
                </h2>
                <p className="text-rose-50/90 mb-6 max-w-xl">
                  Quick, guided practices to help you reset.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setShowStressModal(true)}
                    className="inline-flex items-center gap-2 bg-rose-600 text-white px-6 py-3 rounded-full font-bold hover:bg-rose-700"
                  >
                    Start Relaxing
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white/80 text-rose-700 px-4 py-2 rounded-full border border-rose-100">
                    <Play className="w-4 h-4" />
                    Watch preview
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((c, i) => {
            if (c.title === "Mental Health") {
              // 🔥 PREMIUM CARD
              return (
                <div key={i} className="group relative w-full max-w-[340px] hover:scale-[1.03] transition">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-2xl opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-6 flex justify-between">
                      <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-40 rounded-full"></div>
                        <div className="relative bg-indigo-500/10 p-3 rounded-xl">
                          <Brain className="text-indigo-400" />
                        </div>
                      </div>
                      <div className="text-xs text-indigo-200 bg-white/5 px-3 py-1 rounded-full">
                        Calm Zone
                      </div>
                    </div>
                    <div className="px-6">
                      <h2 className="text-2xl font-bold">Mental Health</h2>
                      <p className="text-indigo-300/60 text-sm">Stress & Anxiety</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                        <Info size={14} />
                        <span>12 exercises • 5 min</span>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <div className="flex justify-between text-xs mb-2">
                        <div className="flex items-center gap-1 text-orange-400">
                          <Flame size={14} />
                          3 day streak
                        </div>
                        <span>40%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div className="h-full w-[40%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <button
                        className="w-full bg-white text-black py-3 rounded-xl flex items-center justify-center gap-2"
                        onClick={() => setShowStressModal(true)}
                      >
                        <Play size={16} />
                        START SESSION
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else if (c.title === "Body & Health") {
              // Replace with custom HealthCard, pass onExplore prop
              return <HealthCard key={i} onExplore={() => setShowHealthModal(true)} />;
            } else if (c.title === "Confidence") {
              // Replace with custom ConfidenceCard, pass onExplore prop
              return <ConfidenceCard key={i} onExplore={() => setShowConfidenceModal(true)} />;
            } else if (c.title === "Safety") {
              // Safety card styled similar to Mental Health premium card, opens Safety modal
              return (
                <div key={i} className="group relative w-full max-w-[340px] hover:scale-[1.03] transition">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-rose-600/20 blur-2xl opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-6 flex justify-between items-start">
                      <div className="relative">
                        <div className="absolute inset-0 bg-rose-500 blur-xl opacity-40 rounded-full"></div>
                        <div className="relative bg-rose-500/10 p-3 rounded-xl">
                          <Shield className="text-rose-400" />
                        </div>
                      </div>
                      <div className="text-[10px] text-rose-200 bg-white/5 px-3 py-1 rounded-full uppercase tracking-widest">
                        Safety Zone
                      </div>
                    </div>
                    <div className="px-6 pb-4">
                      <h2 className="text-2xl font-bold">Safety</h2>
                      <p className="text-rose-200/70 text-sm">Online & Offline</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                        <Info size={14} />
                        <span>Tools • SOS • Grounding</span>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button
                        className="w-full bg-white text-black py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
                        onClick={() => setShowSafetyModal(true)}
                      >
                        <Play size={16} />
                        START SAFETY PLAN
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else if (c.title === "Your Rights") {
              // Premium-style Your Rights card, similar to Mental Health, opens Rights modal
              return (
                <div key={i} className="group relative w-full max-w-[340px] hover:scale-[1.03] transition">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-6 flex justify-between items-start">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-40 rounded-full"></div>
                        <div className="relative bg-emerald-500/10 p-3 rounded-xl">
                          <Scale className="text-emerald-400" />
                        </div>
                      </div>
                      <div className="text-[10px] text-emerald-200 bg-white/5 px-3 py-1 rounded-full uppercase tracking-widest">
                        Rights Zone
                      </div>
                    </div>
                    <div className="px-6 pb-4">
                      <h2 className="text-2xl font-bold">Your Rights</h2>
                      <p className="text-emerald-200/70 text-sm">Legal Advocacy</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                        <Info size={14} />
                        <span>Guides • Help • Protection</span>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button
                        className="w-full bg-white text-black py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
                        onClick={() => setShowRightsModal(true)}
                      >
                        <Play size={16} />
                        LEARN YOUR RIGHTS
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else if (c.title === "Education") {
              // Premium-style Education / Career Goals card, similar to Mental Health, opens Education modal
              return (
                <div key={i} className="group relative w-full max-w-[340px] hover:scale-[1.03] transition cursor-pointer" onClick={() => setShowEducationModal(true)}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-6 flex justify-between items-start">
                      <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-40 rounded-full"></div>
                        <div className="relative bg-indigo-500/10 p-3 rounded-xl">
                          <GraduationCap className="text-indigo-300" />
                        </div>
                      </div>
                      <div className="text-[10px] text-indigo-200 bg-white/5 px-3 py-1 rounded-full uppercase tracking-widest">
                        Future Ready
                      </div>
                    </div>
                    <div className="px-6 pb-4">
                      <h2 className="text-2xl font-bold">Education</h2>
                      <p className="text-indigo-200/70 text-sm">Career Goals</p>
                      <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
                        <Info size={14} />
                        <span>Plans • Skills • Progress</span>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button
                        className="w-full bg-white text-black py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
                      >
                        <Play size={16} />
                        START LEARNING
                      </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              // NORMAL CARD
              return (
                <div key={i} className="bg-white text-black p-5 rounded-2xl">
                  <div className="mb-2">{c.icon}</div>
                  <h4 className="font-bold">{c.title}</h4>
                  <p className="text-sm">{c.desc}</p>
                </div>
              );
            }
          })}
        </div>

        {/* Popular */}
        <section className="mt-10">
              <h3 className="text-lg font-bold mb-4 text-white">Popular Articles</h3>
          {popular.map(item => (
            <div key={item.id} className="bg-slate-900/80 text-white p-4 rounded-xl mb-3 flex gap-4 border border-white/10">
              <BookOpen className="text-rose-400" />
              <div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
              <Bookmark className="text-rose-400" />
            </div>
          ))}
        </section>

        {/* Nav */}
        <nav className="mt-10 flex justify-between bg-slate-900/90 p-4 rounded-xl text-white border border-white/10">
          <Home className="text-rose-400" />
          <Compass className="text-rose-400" />
          <MessageCircle className="text-rose-400" />
          <User className="text-rose-400" />
        </nav>

      </div>
      {/* Modal for Stress & Anxiety */}
      {showStressModal && (
        <StressAnxietyScreen onClose={() => setShowStressModal(false)} />
      )}
      {/* Modal for Body & Health */}
      {showHealthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto rounded-3xl">
            <button onClick={() => setShowHealthModal(false)} className="sticky top-4 right-4 float-right text-slate-400 hover:text-slate-100 text-3xl z-10">&times;</button>
            <HealthScreen />
          </div>
        </div>
      )}
      {/* Modal for Confidence */}
      {showConfidenceModal && (
        <ConfidenceModal isOpen={showConfidenceModal} onClose={() => setShowConfidenceModal(false)} />
      )}
      {/* Modal for Safety */}
      {showSafetyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto rounded-3xl bg-[#020408]">
            <button
              onClick={() => setShowSafetyModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 text-3xl z-10"
            >
              &times;
            </button>
            <SafetyScreen />
          </div>
        </div>
      )}
      {/* Modal for Your Rights */}
      {showRightsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto rounded-3xl bg-[#020408]">
            <button
              onClick={() => setShowRightsModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 text-3xl z-10"
            >
              &times;
            </button>
            <RightsScreen />
          </div>
        </div>
      )}
      {/* Modal for Education / Career Goals */}
      {showEducationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto rounded-3xl bg-[#020408]">
            <button
              onClick={() => setShowEducationModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 text-3xl z-10"
            >
              &times;
            </button>
            <EducationScreen />
          </div>
        </div>
      )}
    </div>
  );
}

