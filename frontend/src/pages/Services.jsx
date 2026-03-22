import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  BookOpen, 
  ShieldAlert, 
  Sparkles, 
  MessageCircle, 
  ArrowRight,
  PhoneCall,
  Smile,
  Meh,
  Frown,
  Send,
  Flag,
  UserX,
  BrainCircuit,
  Wind,
  Info,
  Clock,
  ShieldCheck,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// --- MAIN APP COMPONENT ---
const Services = () => {
  // State for original mood selector
  const [selectedMood, setSelectedMood] = useState(null);
  
  // State for new Mood History (last 7 days)
  const [moodHistory, setMoodHistory] = useState(['Happy', 'Neutral', 'Happy', 'Sad', 'Neutral', 'Happy']);
  
  // State for AI Chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: 'Namaste! Main aapka AI Buddy hoon. Aap kaisa feel kar rahi hain? 💜' }
  ]);
  const [chatInput, setChatInput] = useState("");

  // State for Mental Health Quiz
  const [quizStep, setQuizStep] = useState(0); // 0: start, 1-4: questions, 5: result
  const [quizScore, setQuizScore] = useState(0);

  // State for Anonymous Posts
  const [posts, setPosts] = useState([
    { id: 1, text: "Kya kisi aur ko bhi exams se pehle bahut anxiety hoti hai? 😔", likes: 12 },
    { id: 2, text: "Aaj ka din bahut accha tha, maine meditation try kiya! ✨", likes: 24 }
  ]);
  const [newPostText, setNewPostText] = useState("");

  // 1. Daily Motivation Logic
  const [motivation, setMotivation] = useState("");
  useEffect(() => {
    const quotes = [
      "Aap jitna sochte hain, usse kahin zyada mazboot hain. 💜",
      "Be kind to your mind.",
      "Aapka ek chhota kadam badi tabdeeli la sakta hai.",
      "Believe in yourself, princess. ✨"
    ];
    setMotivation(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // 2. Add Mood Logic
  const handleAddMood = (mood) => {
    setSelectedMood(mood);
    setMoodHistory(prev => [...prev.slice(1), mood]);
  };

  // 3. AI Chat Logic
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = { role: 'user', text: chatInput };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      let response = "Main samajh sakti hoon. Kya aap is baare mein aur batana chahengi?";
      if (chatInput.toLowerCase().includes("sad")) response = "Mujhe bura laga sunkar, par yaad rakhein main aapke saath hoon. 🫂";
      if (chatInput.toLowerCase().includes("help")) response = "Zarur! Aap hamare Emergency section ya Counseling tools ka use kar sakti hain.";
      setChatMessages(prev => [...prev, { role: 'bot', text: response }]);
    }, 800);
  };

  // 4. Mental Health Quiz Logic
  const questions = [
    "Kya aapko neend aane mein mushkil hoti hai?",
    "Kya aap bina wajah chinta mehsoos karti hain?",
    "Kya aapko kaam mein dhyan lagane mein dikkat hoti hai?",
    "Kya aap aksar thaka hua mehsoos karti hain?"
  ];

  const handleQuizAnswer = (ans) => {
    if (ans === 'yes') setQuizScore(quizScore + 1);
    setQuizStep(quizStep + 1);
  };

  const getQuizResult = () => {
    if (quizScore <= 1) return { level: "Low", color: "text-green-600", advice: "Aap acchi sthiti mein hain. Relaxation exercises jari rakhein." };
    if (quizScore === 2) return { level: "Medium", color: "text-amber-600", advice: "Thoda stress ho sakta hai. Deep breathing aur journaling try karein." };
    return { level: "High", color: "text-red-600", advice: "Stress level zyada hai. Professional helpline 1800-XXX-XXXX par call karein." };
  };

  // 5. Services Data (Including NEW Mental Health Support)
  const services = [
    {
      key: 'mental-health',
      title: "Mental Health",
      description: "Take a stress checkup quiz, get personalized tips, and access relaxation exercises for your mind.",
      icon: <BrainCircuit className="w-6 h-6 text-rose-500" />,
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'emotional-support',
      title: "Emotional Support",
      description: "A safe, anonymous space to share your feelings and receive empathy from those who understand.",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      imageUrl: "/Emotional.png"
    },
    {
      key: 'Period Support',
      title: "Period Support",
      description: "Mahavari (periods) ke dauraan pain, mood swings, aur hygiene manage karne ke liye tips aur support. Apne periods ko bina kisi sharm ke samjhein aur manage karein.",
      icon: <ShieldAlert className="w-6 h-6 text-pink-500" />, 
      imageUrl: "/period.png"
    },
    {
      key: 'community-support',
      title: "Community Support",
      description: "Join our discussion forums to share experiences and build lasting bonds with other young women.",
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
    },
    {
      key: 'educational-Support',
      title: "Educational Resources",
      description: "Access curated articles, videos, and tips on mental health, safety, and personal growth.",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      imageUrl: "/eduction.png"
    },
    {
      key: 'self-care Support',
      title: "Self-Care Tools",
      description: "Daily affirmations, journaling prompts, and tools designed to help you stay grounded.",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      imageUrl: "/self-care.png"
    }
 
   ];

  return (

    <>
      <Navbar />
      {/* Back Button removed as requested */}
      {/* Hero Section with background image and centered heading/description */}
      <section className="relative h-[350px] flex flex-col items-center justify-center overflow-hidden mb-4">
        <img 
          src="/src/assets/environment-hero.jpg" 
          alt="Hero" 
          className="w-full max-w-3xl h-48 object-cover rounded-2xl shadow-lg mb-4 border-4 border-white/60" 
          style={{objectPosition: 'center'}}
        />
        <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">Peer Support Services</h1>
          <p className="text-sm md:text-base text-white/90 font-light italic leading-relaxed">“We are here to support, guide and empower you 💜”</p>
        </div>
      </section>

      {/* NEW: Motivation Bar */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="bg-gradient-to-r from-rose-900/60 to-rose-700/40 p-3 rounded-full text-center border border-rose-700/40 shadow-sm">
          <p className="text-rose-100 text-xs md:text-sm font-medium italic">✨ Daily Motivation: "{motivation}"</p>
        </div>
      </div>

      {/* Mood Tracker & History Section */}
      <section className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-800 rounded-2xl shadow-lg p-6 border border-rose-900/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-rose-400">How are you today?</h3>
              <p className="text-slate-300 text-xs mt-1">Select your mood to track your progress.</p>
              <div className="flex gap-4 mt-4">
                {[
                  { label: 'Sad', icon: <Frown className="w-8 h-8" />, color: 'text-blue-500 bg-blue-50' },
                  { label: 'Neutral', icon: <Meh className="w-8 h-8" />, color: 'text-gray-500 bg-gray-50' },
                  { label: 'Happy', icon: <Smile className="w-8 h-8" />, color: 'text-green-500 bg-green-50' }
                ].map((m) => (
                  <button key={m.label} onClick={() => handleAddMood(m.label)} className={`p-4 rounded-2xl transition-all border ${selectedMood === m.label ? 'border-rose-400 shadow-md ring-2 ring-rose-200' : 'border-transparent'} ${m.color}`}>
                    {m.icon}
                    <p className="text-[10px] font-bold mt-1 text-center">{m.label}</p>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Weekly History Chart UI */}
            <div className="w-full md:w-64 bg-slate-700 p-4 rounded-xl border border-rose-900/40">
              <p className="text-[10px] font-bold text-rose-200 uppercase tracking-widest mb-3 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Weekly History
              </p>
              <div className="flex items-end gap-2 h-20">
                {moodHistory.map((m, i) => (
                  <div key={i} className={`flex-1 rounded-t-lg ${m === 'Happy' ? 'h-full bg-green-400' : m === 'Neutral' ? 'h-2/3 bg-gray-400' : 'h-1/3 bg-blue-400'}`} />
                ))}
              </div>
              <div className="flex justify-between mt-1 text-[8px] text-rose-200 font-bold">
                <span>MON</span><span>WED</span><span>FRI</span><span>SUN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mental Health Support Mini-Quiz */}
        <div className="bg-rose-700 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-2">Mental Health Check</h3>
            {quizStep < questions.length ? (
              <div>
                <p className="text-xs text-indigo-100 mb-4">{questions[quizStep]}</p>
                <div className="flex gap-2">
                  <button onClick={() => handleQuizAnswer('yes')} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-xs font-bold">Haan</button>
                  <button onClick={() => handleQuizAnswer('no')} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-xs font-bold">Nahi</button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-xs mb-1">Stress Level: <span className="font-bold underline">{getQuizResult().level}</span></p>
                <p className="text-[10px] text-indigo-100 italic mb-4">"{getQuizResult().advice}"</p>
                <button onClick={() => {setQuizStep(0); setQuizScore(0);}} className="text-[10px] font-bold uppercase tracking-widest bg-white text-indigo-600 px-3 py-1 rounded-full">Reset</button>
              </div>
            )}
            <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
              <Wind className="w-4 h-4 text-white/50 animate-pulse" />
              <p className="text-[9px] italic text-indigo-200">Tip: Take 3 deep breaths right now.</p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        </div>
      </section>

      {/* Services Grid (6 Original + 1 New) */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-rose-400 mb-2">Empowering You Every Step</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.key} className="group bg-slate-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-900/40 flex flex-col overflow-hidden">
              <div className="h-40 w-full overflow-hidden relative">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute top-4 right-4 p-2 rounded-xl bg-white shadow-lg`}>{service.icon}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-rose-300 mb-2">{service.title}</h3>
                <p className="text-slate-200 text-xs mb-6 leading-relaxed flex-grow">{service.description}</p>
                <Link
                  to={`/support?type=${service.key}`}
                  className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-full px-5 py-2 mt-2 transition-all uppercase tracking-wider shadow-md"
                >
                  Get Support <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Anonymous Posting Board */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-rose-400">Anonymous Vent Board</h2>
          <div className="flex items-center gap-2 text-[10px] text-green-300 font-bold bg-green-900/30 px-3 py-1 rounded-full border border-green-700/40">
            <ShieldCheck className="w-3 h-3" /> Identity Protected
          </div>
        </div>
        
        <div className="bg-slate-800 p-4 rounded-2xl shadow-sm border border-rose-900/40 mb-8">
          <textarea 
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            className="w-full border-none focus:ring-0 text-sm p-2 placeholder:text-slate-400 bg-slate-900 text-white"
            placeholder="Share what's on your mind anonymously..."
            rows="2"
          />
          <div className="flex justify-end pt-2 border-t border-rose-900/40">
            <button 
              onClick={() => {
                if(!newPostText) return;
                setPosts([{id: Date.now(), text: newPostText, likes: 0}, ...posts]);
                setNewPostText("");
              }}
              className="bg-rose-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-md hover:bg-rose-700 transition-all"
            >
              Post Anonymously
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map(post => (
            <div key={post.id} className="bg-slate-800 p-5 rounded-2xl border border-rose-900/40 shadow-sm hover:border-rose-400 transition-all group">
              <p className="text-slate-100 text-sm mb-4 leading-relaxed italic">"{post.text}"</p>
              <div className="flex justify-between items-center pt-4 border-t border-rose-900/40">
                <div className="flex gap-4">
                  <span className="text-[10px] font-bold text-pink-400">❤️ {post.likes} Hearts</span>
                  <button className="text-[10px] font-bold text-slate-400 hover:text-rose-400">Reply</button>
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-[10px] font-bold text-slate-300 hover:text-red-500 flex items-center gap-1"><Flag className="w-3 h-3" /> Report</button>
                  <button className="text-[10px] font-bold text-slate-300 hover:text-slate-600 flex items-center gap-1"><UserX className="w-3 h-3" /> Block</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Message */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-center gap-4">
          <Info className="w-5 h-5 text-purple-600 flex-shrink-0" />
          <p className="text-[11px] text-purple-700 leading-relaxed">
            <b>Privacy & Safety:</b> PeerSupport is a strictly safe space. Harassment is not tolerated. Use the Report or Block buttons if you feel unsafe. All anonymous posts are monitored.
          </p>
        </div>
      </div>

      {/* Original CTA Section */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-br from-rose-600 to-rose-700 py-10 px-6 rounded-2xl text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-3">Need Help Now?</h2>
            <p className="text-white/80 text-xs mb-6 max-w-lg mx-auto leading-relaxed">Don't hesitate to reach out. Our support team is ready to listen to you 24/7.</p>
            <button className="bg-white text-rose-700 px-8 py-2.5 rounded-full font-bold shadow-lg hover:bg-rose-100 transition-all flex items-center gap-2 mx-auto text-xs">
              <PhoneCall className="w-4 h-4" /> Talk to Someone
            </button>
          </div>
        </div>
      </section>

      {/* Floating AI Chat Widget */}
      <div className="fixed bottom-6 right-6 z-[100]">
        {isChatOpen && (
          <div className="bg-white w-72 md:w-80 h-96 rounded-2xl shadow-2xl border border-purple-100 flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-5">
            <div className="bg-purple-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold text-xs">AI Support Buddy</span>
              </div>
              <button onClick={() => setIsChatOpen(false)}><X className="w-4 h-4" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {chatMessages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-2 rounded-xl text-[11px] ${m.role === 'user' ? 'bg-purple-600 text-white' : 'bg-white text-slate-700 shadow-sm border border-slate-100'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t bg-white flex gap-2">
              <input 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Talk to AI Buddy..." 
                className="flex-1 text-[11px] border-none bg-slate-100 rounded-full px-4 focus:ring-0" 
              />
              <button onClick={handleSendMessage} className="bg-purple-600 text-white p-2 rounded-full"><Send className="w-3 h-3" /></button>
            </div>
          </div>
        )}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2 font-bold text-sm"
        >
          {isChatOpen ? <X /> : <MessageCircle />}
        </button>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 pt-10 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="text-center md:text-left">
            <h4 className="text-base font-bold text-purple-600">PeerSupport</h4>
            <p className="text-slate-400 text-[10px]">Empowering young women worldwide.</p>
          </div>
          <div className="flex gap-4 text-slate-400 text-[10px] font-medium">
            <a href="#" className="hover:text-purple-600">Privacy</a>
            <a href="#" className="hover:text-purple-600">Terms</a>
            <a href="#" className="hover:text-purple-600">Contact</a>
          </div>
        </div>
        <p className="text-center text-slate-400 text-[9px] pb-4">© 2024 Peer Support App for Young Women. Made with 💜</p>
      </footer>
    </>
  );
};

export default Services;