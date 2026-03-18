import React from 'react';
import { Users, ArrowRight, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';

const groups = [
  { name: 'Mental Wellness Circle', members: 128, desc: 'Daily check-ins, meditation tips aur emotional support.' },
  { name: 'Career Women Network', members: 95, desc: 'Career guidance, job tips aur professional growth.' },
  { name: 'Student Support Group', members: 214, desc: 'Academic pressure aur student life ke challenges discuss karein.' },
  { name: 'Survivors Strong', members: 67, desc: 'Safe space for sharing healing journeys. Private group.', private: true },
  { name: 'New Moms Connect', members: 153, desc: 'Motherhood ke challenges share karein aur support paayein.' },
  { name: 'Tech Women India', members: 89, desc: 'Women in tech — networking, opportunities aur upskilling.' },
];

const Groups = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar />
      <section className="bg-[#0A1128] py-24 px-6 text-center text-white">
        <div className="inline-flex items-center bg-[#FF5E14] text-white px-4 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] mb-6">
          Groups
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Find Your <span className="text-[#FF5E14]">Tribe</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-xl mx-auto italic">
          Aisi community join karein jo aapki life situation ko samjhe. Saath milkar stronger banein.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#FF5E14]/10 rounded-xl flex items-center justify-center text-[#FF5E14]">
                    <Users className="w-6 h-6" />
                  </div>
                  {group.private && (
                    <div className="flex items-center space-x-1 text-xs font-bold text-slate-400">
                      <Lock className="w-3 h-3" />
                      <span>Private</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-black text-[#0A1128]">{group.name}</h3>
                <p className="text-slate-500 text-sm italic leading-relaxed">{group.desc}</p>
                <p className="text-xs font-bold text-[#FF5E14]">{group.members} members</p>
              </div>
              <button className="mt-8 w-full py-3 bg-[#0A1128] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#FF5E14] transition-all flex items-center justify-center">
                Join Group <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0A1128] text-white py-12 px-6 text-center">
        <p className="text-slate-400 text-sm">© 2024 PeerSupport. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Groups;
