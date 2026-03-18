import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  BarChart3,
  SearchCheck,
  Heart,
} from 'lucide-react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1128]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center bg-[#FF5E14] text-white px-4 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em]">
              Empowering Women
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tighter">
              Guiding Your Path <br />
              <span className="text-[#FF5E14]">To Success</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-lg leading-relaxed italic">
              Humare mentors aapke har kadam par saath hain, taaki aap be-jhijhak apni baat rakh sakein aur sahi rasta chun sakein.
            </p>
            <Link
              to="/about"
              className="bg-[#FF5E14] hover:bg-[#e65512] text-white px-10 py-5 rounded font-black text-xs uppercase tracking-[0.2em] transition-all inline-flex items-center group shadow-xl shadow-orange-600/20"
            >
              Start Journey Today
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature Cards Overlap */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-7xl px-6 hidden lg:grid grid-cols-3 gap-8">
          {[
            { title: 'Safe & Secure', icon: <ShieldCheck className="w-9 h-9" /> },
            { title: 'Peer Mentorship', icon: <Users className="w-9 h-9" /> },
            { title: 'Mental Guidance', icon: <Target className="w-9 h-9" /> },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-12 rounded-xl shadow-2xl flex items-start space-x-6 border-b-[6px] border-[#FF5E14] hover:-translate-y-3 transition-transform duration-300"
            >
              <div className="p-4 bg-slate-50 rounded-lg text-[#FF5E14]">{card.icon}</div>
              <div>
                <h3 className="font-black text-2xl text-[#0A1128] tracking-tight">{card.title}</h3>
                <p className="text-sm text-slate-500 mt-2 font-medium italic">
                  Empowering your personal growth through safe support.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Committed Section */}
      <section className="py-40 mt-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
              alt="Mentorship"
              className="w-full h-[580px] object-cover"
            />
            <div className="absolute bottom-10 left-10 bg-[#FF5E14] text-white p-10 rounded-[2.5rem] shadow-2xl max-w-[280px]">
              <p className="text-6xl font-black tracking-tighter italic">10k+</p>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] opacity-90 leading-tight">
                Women Empowered Worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center space-x-3 text-[#FF5E14]">
            <div className="w-12 h-[2px] bg-[#FF5E14]"></div>
            <span className="font-black uppercase tracking-[0.4em] text-[11px]">About Project</span>
          </div>
          <h2 className="text-5xl font-black text-[#0A1128] leading-[1.1] tracking-tighter">
            Committed To Your <br />
            Mental Success
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed italic">
            Humara maksad aapko ek safe space dena hai jahan aap bina kisi darr ke baat kar sakein. Humari community
            aapke growth ke liye dedicated hai.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Expert Mentors', 'Safe Community', 'Growth Track', 'Privacy Focus'].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-[#FF5E14] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="font-black text-[#0A1128] text-sm tracking-tight">{item}</span>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center text-[#0A1128] font-black uppercase text-xs tracking-[0.3em] border-b-4 border-[#0A1128] pb-2 pt-4 hover:text-[#FF5E14] hover:border-[#FF5E14] transition-all"
          >
            Learn More <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="space-y-4">
              <span className="text-[#FF5E14] font-black uppercase tracking-[0.4em] text-[11px]">Our Services</span>
              <h2 className="text-5xl font-black text-[#0A1128] tracking-tighter">Supportive Solutions</h2>
            </div>
            <p className="max-w-md text-slate-500 text-sm italic font-medium leading-relaxed border-l-4 border-[#FF5E14] pl-8">
              Aapki journey unique hai, isliye humare support methods bhi aapki zarurat ke mutabik customized hain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Mental Health',
                img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
                icon: <Heart />,
                to: '/resources',
              },
              {
                title: 'Group Chat',
                img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400',
                icon: <MessageSquare />,
                to: '/groups',
              },
              {
                title: 'Career Path',
                img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
                icon: <Target />,
                to: '/forum',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-6 right-6 w-14 h-14 bg-[#0A1128] text-[#FF5E14] rounded-2xl flex items-center justify-center border-4 border-white transform group-hover:-rotate-12 transition-transform shadow-xl">
                    {item.icon}
                  </div>
                </div>
                <div className="p-10 space-y-6">
                  <h3 className="font-black text-2xl text-[#0A1128] tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    Hum situation analyze karke resources aur community support provide karte hain.
                  </p>
                  <Link
                    to={item.to}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-[#FF5E14] flex items-center transition-colors"
                  >
                    Read More <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 text-center">
        <span className="text-[#FF5E14] font-black uppercase tracking-[0.4em] text-[11px]">Process</span>
        <h2 className="text-5xl font-black text-[#0A1128] mt-6 mb-28 tracking-tighter">How We Operate</h2>

        <div className="relative grid md:grid-cols-4 gap-16">
          <div className="absolute top-[48px] left-[10%] w-[80%] h-[2px] bg-slate-100 -z-10 hidden md:block"></div>

          {[
            { step: '01', title: 'Connect', icon: <SearchCheck /> },
            { step: '02', title: 'Consult', icon: <BarChart3 /> },
            { step: '03', title: 'Growth', icon: <ShieldCheck /> },
            { step: '04', title: 'Empower', icon: <ClipboardList /> },
          ].map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center text-[#FF5E14] relative border border-slate-50 group-hover:bg-[#FF5E14] group-hover:text-white transition-all duration-500">
                <div className="absolute -top-1 -right-1 w-9 h-9 bg-[#FF5E14] text-white rounded-full text-[10px] font-black flex items-center justify-center border-4 border-white shadow-lg group-hover:bg-[#0A1128]">
                  {item.step}
                </div>
                {React.cloneElement(item.icon, { className: 'w-10 h-10' })}
              </div>
              <h3 className="font-black text-xl text-[#0A1128] mt-8 tracking-tight">{item.title}</h3>
              <p className="text-slate-400 text-xs italic font-bold mt-3 px-6">Expert guidance for your journey.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Form */}
      <section className="mx-6 mb-24 grid lg:grid-cols-2 rounded-[4rem] overflow-hidden shadow-2xl">
        <div className="h-[500px] lg:h-auto relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
            alt="Consult"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#FF5E14]/20 mix-blend-overlay"></div>
        </div>
        <div className="bg-[#0A1128] p-16 lg:p-24 space-y-12">
          <div className="space-y-4">
            <span className="text-[#FF5E14] font-black uppercase tracking-[0.4em] text-[11px]">Support</span>
            <h2 className="text-5xl font-black text-white leading-tight tracking-tighter">
              Get Private <br /> Consultation
            </h2>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-slate-500 focus:border-[#FF5E14] outline-none transition-all font-bold text-xs uppercase tracking-widest"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-slate-500 focus:border-[#FF5E14] outline-none transition-all font-bold text-xs uppercase tracking-widest"
            />
            <textarea
              placeholder="How can we help?"
              className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-5 h-44 text-white placeholder:text-slate-500 focus:border-[#FF5E14] outline-none transition-all font-bold text-xs uppercase tracking-widest resize-none"
            ></textarea>
            <button className="md:col-span-2 bg-[#FF5E14] hover:bg-white hover:text-[#FF5E14] text-white font-black py-6 rounded-xl transition-all shadow-2xl uppercase tracking-[0.3em] text-xs">
              Send Message Now
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1128] text-white py-12 px-6 text-center">
        <p className="text-slate-400 text-sm">
          © 2024 PeerSupport. All rights reserved. |{' '}
          <Link to="/about" className="hover:text-[#FF5E14] transition-colors">
            About
          </Link>{' '}
          |{' '}
          <Link to="/resources" className="hover:text-[#FF5E14] transition-colors">
            Resources
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
