import React from 'react';
import {
  Users,
  Target,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0A1128] py-24 px-6 text-center text-white">
        <div className="inline-flex items-center bg-[#FF5E14] text-white px-4 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] mb-6">
          About Us
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Our <span className="text-[#FF5E14]">Mission</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto italic">
          PeerSupport ek safe digital space hai jahan mahilayein apne experiences share kar sakti hain, guidance pa sakti hain, aur ek-doosre ko empower kar sakti hain.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
              alt="Women Empowerment"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-10 left-10 bg-[#FF5E14] text-white p-10 rounded-[2.5rem] shadow-2xl max-w-[280px]">
              <p className="text-6xl font-black tracking-tighter italic">10k+</p>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] opacity-90 leading-tight">Women Empowered</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center space-x-3 text-[#FF5E14]">
            <div className="w-12 h-[2px] bg-[#FF5E14]"></div>
            <span className="font-black uppercase tracking-[0.4em] text-[11px]">Who We Are</span>
          </div>
          <h2 className="text-5xl font-black text-[#0A1128] leading-[1.1] tracking-tighter">
            A Community Built <br /> On Trust & Care
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed italic">
            Humara platform ek peer-to-peer support network hai jahan trained volunteers aur experienced mentors milke kaam karte hain. Aapki privacy aur safety hamare liye sabse pehle hai.
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
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <span className="text-[#FF5E14] font-black uppercase tracking-[0.4em] text-[11px]">Our Values</span>
          <h2 className="text-5xl font-black text-[#0A1128] mt-6 tracking-tighter">What We Stand For</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { title: 'Empathy First', icon: <Heart className="w-9 h-9" />, desc: 'Har situation ko samajhne aur feel karne ki koshish karte hain.' },
            { title: 'Safe Space', icon: <ShieldCheck className="w-9 h-9" />, desc: 'Zero judgement policy — yahan sab accepted hain.' },
            { title: 'Collective Growth', icon: <Users className="w-9 h-9" />, desc: 'Ek doosre ki success celebrate karein, saath milkar badhein.' },
          ].map((val, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-12 shadow-xl text-center hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-[#FF5E14]/10 rounded-full flex items-center justify-center text-[#FF5E14] mx-auto mb-8">
                {val.icon}
              </div>
              <h3 className="text-2xl font-black text-[#0A1128] mb-4">{val.title}</h3>
              <p className="text-slate-500 italic leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-[#0A1128] text-white">
        <h2 className="text-4xl font-black tracking-tighter mb-6">
          Hamari Community Join Karein
        </h2>
        <p className="text-slate-400 italic mb-10 max-w-md mx-auto">
          Aaj hi apna pehla kadam uthayein. Hum aapka intezaar kar rahe hain.
        </p>
        <Link
          to="/signup"
          className="inline-flex items-center bg-[#FF5E14] text-white px-10 py-5 rounded font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#FF5E14] transition-all shadow-2xl"
        >
          Join Now <ArrowRight className="ml-3 w-5 h-5" />
        </Link>
      </section>

      <footer className="bg-[#0A1128] border-t border-white/10 text-white py-12 px-6 text-center">
        <p className="text-slate-400 text-sm">© 2024 PeerSupport. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
