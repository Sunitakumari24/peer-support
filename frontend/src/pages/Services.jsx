import React, { useState } from 'react';
import { ArrowUpRight, Check, Play, Users, Heart, MessageSquare, Shield, Smile, Coffee, Brain, Sparkles, X } from 'lucide-react';

const ServicesPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const serviceCards = [
    {
      title: "One-on-One Peer Support",
      desc: "Humare trained mentors ke saath personal aur private baat-cheet.",
      icon: <Users className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isHighlight: false
    },
    {
      title: "Group Counseling",
      desc: "Ek safe space jahan aap apne jaise logon se jud sakte hain.",
      icon: <MessageSquare className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isHighlight: true
    },
    {
      title: "Emotional Well-being",
      desc: "Stress aur anxiety ko manage karne ke liye expert guidance.",
      icon: <Heart className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isHighlight: false
    },
    {
      title: "Mindfulness Sessions",
      desc: "Dhyan aur meditation se apne mann ko shant rakhein.",
      icon: <Brain className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isHighlight: false
    },
    {
      title: "Crisis Intervention",
      desc: "Mushkil samay mein turant madad aur emotional support.",
      icon: <Shield className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isHighlight: false
    },
    {
      title: "Youth Mentorship",
      desc: "Students aur young adults ke liye career aur personal advice.",
      icon: <Sparkles className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isHighlight: false
    },
    {
      title: "Community Outreach",
      desc: "Social programs ke zariye logon mein jagrukta failana.",
      icon: <Smile className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isHighlight: false
    },
    {
      title: "Daily Check-ins",
      desc: "Halki-fulki baatein aur ek pyari si 'Coffee Chat' session.",
      icon: <Coffee className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isHighlight: false
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 overflow-x-hidden">
      {/* --- Simplified Navbar --- */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-50">
       <div className="flex items-center gap-2">
       <div className="w-8 h-8 bg-rose-600 rotate-45 flex items-center justify-center">
         <div className="w-4 h-4 bg-slate-900 -rotate-45"></div>
       </div>
       <span className="text-2xl font-black tracking-tighter uppercase">PEER <span className="text-rose-500">SUPPORT</span></span>
        </div>
        <div>
          <button className="bg-slate-900 text-white px-8 py-2.5 rounded-full flex items-center gap-2 hover:bg-lime-500 hover:text-slate-900 transition duration-300 font-semibold text-sm shadow-lg">
            Services Page <ArrowUpRight size={18} />
          </button>
        </div>
      </nav>

      {/* --- Hero Banner (Enhanced with Full Background Image) --- */}
      <section className="relative h-[450px] mx-4 my-4 rounded-[40px] overflow-hidden shadow-2xl group">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
          alt="Peer Support Hero" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Modern Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent flex flex-col items-start justify-center px-12 sm:px-20 text-white">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block py-1 px-4 bg-rose-600 text-slate-900 text-xs font-bold rounded-full uppercase tracking-widest animate-fade-in">
              Our Professional Services
            </span>
            <h1 className="text-5xl sm:text-7xl font-black leading-tight tracking-tighter">
              Healing <br />
              <span className="text-rose-400 italic">Together.</span>
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-200 font-medium">
              <span className="hover:text-lime-400 cursor-pointer transition">Home</span> 
              <span className="text-lime-400">/</span> 
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Introduction Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
            <span className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-widest text-sm">
            <div className="w-2 h-2 bg-lime-500"></div> What we do
          </span>
          <h2 className="text-5xl font-bold leading-tight">
            Empowering You to <br/>
            <span className="text-slate-400 italic font-medium">Live Your Best Life</span> & Achieve Lasting Transformation
          </h2>
        </div>
        <div className="space-y-6 text-gray-500 leading-relaxed pt-8 text-lg">
          <p>
            Peer Support Project ka maqsad hai har kisi ko ek aisa sathi dena jo unhein samajh sake. Hum experts nahi, hum aap jaise hi log hain jo ek dusre ka hath tham kar aage badhne mein vishwas rakhte hain.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Personal Growth & Mindset', 'Relationship Transformation', 'Health & Wellness Coaching', 'Career Success', 'Goal Achievement'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-800 font-bold">
                <Check className="text-rose-600 w-5 h-5 stroke-[3px]" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section with Video --- */}
      <section className="bg-slate-50 py-24 rounded-[60px] mx-4 mb-20 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="flex items-center gap-2 text-rose-600 font-bold uppercase tracking-widest text-sm">
              <div className="w-2 h-2 bg-lime-500"></div> Why Choose Us?
            </span>
            <h2 className="text-4xl font-bold">Why Choose Us for <span className="text-slate-500">Your Personal Transformation Journey?</span></h2>
            
            <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516302796627-d2015574cc9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Community Group Video" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button 
                  onClick={() => setShowVideo(true)}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-2xl hover:scale-110 hover:bg-rose-600 transition-all active:scale-95 z-10"
                >
                  <Play fill="currentColor" size={28} className="ml-1" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl text-white text-sm">
                Watch how we help communities thrive together.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { title: "Certified Expert Coaching", desc: "Work with professionals committed to your growth.", color: "bg-rose-600" },
              { title: "Proven Success Stories", desc: "Join hundreds who have transformed their lives.", color: "bg-white" },
              { title: "Customized Action Plans", desc: "Get coaching tailored to your unique goals.", color: "bg-white" },
              { title: "Supportive Environment", desc: "A judgment-free space to move forward.", color: "bg-white" }
            ].map((feature, idx) => (
              <div key={idx} className={`${feature.color} p-8 rounded-3xl border border-gray-100 flex items-start gap-6 shadow-sm hover:shadow-md transition cursor-default group`}>
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition">
                  <Check size={20} className="stroke-[3px]" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-600 leading-snug">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Tailored Services Grid --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-4">
          <span className="flex items-center justify-center gap-2 text-lime-600 font-bold uppercase tracking-widest text-sm">
            <div className="w-2 h-2 bg-lime-500"></div> Our Services
          </span>
          <h2 className="text-4xl font-bold">Tailored Services to <span className="text-slate-400 font-medium italic">Empower Your Future</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card, idx) => (
            <div key={idx} className={`group relative rounded-[45px] overflow-hidden p-7 transition-all duration-500 shadow-sm border border-gray-100 flex flex-col ${card.isHighlight ? 'bg-lime-400 scale-105 z-10 shadow-xl' : 'bg-white hover:shadow-2xl hover:-translate-y-2'}`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-full ${card.isHighlight ? 'bg-slate-900 text-white' : 'bg-lime-50 text-lime-700'}`}>
                  {card.icon}
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${card.isHighlight ? 'border-slate-800 text-slate-900' : 'border-gray-100 text-gray-400'} group-hover:bg-slate-900 group-hover:text-white transition-all`}>
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 h-14 leading-tight">{card.title}</h3>
              <p className={`text-sm mb-8 h-12 leading-tight ${card.isHighlight ? 'text-slate-800 font-medium' : 'text-gray-500'}`}>
                {card.desc}
              </p>

              <div className="relative h-52 rounded-[35px] overflow-hidden mt-auto shadow-inner">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Video Modal --- */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-lg">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-lime-400">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full text-slate-900 hover:bg-lime-400 transition z-20"
            >
              <X size={24} />
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="Peer Support Story"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* --- Simple Footer Bar --- */}
      <div className="text-center py-12 text-gray-400 text-sm border-t border-gray-50 bg-slate-50">
        © 2024 Peer Support Project. Helping you find your way.
      </div>
    </div>
  );
};

export default ServicesPage;

