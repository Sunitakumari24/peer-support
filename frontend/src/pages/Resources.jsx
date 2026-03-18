import React, { useState } from 'react';
import { ArrowRight, BookOpen, Heart, Phone, Globe, PlayCircle, FileText, Search } from 'lucide-react';
import Navbar from '../components/Navbar';

const resources = [
  {
    category: 'Mental Health',
    icon: <Heart className="w-6 h-6" />,
    color: '#FF5E14',
    items: [
      {
        title: 'Understanding Anxiety & Depression',
        desc: 'Anxiety aur depression ke baare mein jankari aur coping strategies.',
        type: 'Article',
        link: '#',
      },
      {
        title: 'Mindfulness Meditation Guide',
        desc: 'Roz 10 minute ki mindfulness practice se stress kam karein.',
        type: 'Guide',
        link: '#',
      },
      {
        title: 'Self-Care Toolkit',
        desc: 'Apna khayal rakhne ke liye practical tips aur tools.',
        type: 'Toolkit',
        link: '#',
      },
    ],
  },
  {
    category: 'Career & Education',
    icon: <BookOpen className="w-6 h-6" />,
    color: '#0A1128',
    items: [
      {
        title: 'Resume Building Workshop',
        desc: 'Ek strong resume banane ke liye step-by-step guide.',
        type: 'Workshop',
        link: '#',
      },
      {
        title: 'Scholarship Opportunities for Women',
        desc: 'India mein mahilaon ke liye available scholarships ki list.',
        type: 'List',
        link: '#',
      },
      {
        title: 'Interview Preparation Tips',
        desc: 'Confidence ke saath interview dene ki preparation kaise karein.',
        type: 'Article',
        link: '#',
      },
    ],
  },
  {
    category: 'Safety & Legal',
    icon: <FileText className="w-6 h-6" />,
    color: '#FF5E14',
    items: [
      {
        title: 'Know Your Rights',
        desc: 'Mahilaon ke kanuni adhikar aur unka upyog kaise karein.',
        type: 'Guide',
        link: '#',
      },
      {
        title: 'Reporting Harassment',
        desc: 'Workplace ya school mein harassment report karne ka tarika.',
        type: 'Article',
        link: '#',
      },
      {
        title: 'Emergency Contacts & Helplines',
        desc: 'Crisis situations mein immediate help ke liye contacts.',
        type: 'List',
        link: '#',
      },
    ],
  },
  {
    category: 'Helplines',
    icon: <Phone className="w-6 h-6" />,
    color: '#0A1128',
    items: [
      {
        title: 'iCall — 9152987821',
        desc: 'Free mental health counselling by TISS. Mon–Sat, 8am–10pm.',
        type: 'Helpline',
        link: 'tel:9152987821',
      },
      {
        title: 'Vandrevala Foundation — 1860-2662-345',
        desc: '24/7 crisis support helpline.',
        type: 'Helpline',
        link: 'tel:18602662345',
      },
      {
        title: 'Women Helpline — 181',
        desc: 'Government helpline for women in distress.',
        type: 'Helpline',
        link: 'tel:181',
      },
    ],
  },
];

const typeIcons = {
  Article: <FileText className="w-4 h-4" />,
  Guide: <BookOpen className="w-4 h-4" />,
  Toolkit: <Globe className="w-4 h-4" />,
  Workshop: <PlayCircle className="w-4 h-4" />,
  List: <FileText className="w-4 h-4" />,
  Helpline: <Phone className="w-4 h-4" />,
};

const Resources = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...resources.map((r) => r.category)];

  const filtered = resources
    .filter((r) => activeCategory === 'All' || r.category === activeCategory)
    .map((r) => ({
      ...r,
      items: r.items.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.desc.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((r) => r.items.length > 0);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0A1128] py-24 px-6 text-center text-white">
        <div className="inline-flex items-center bg-[#FF5E14] text-white px-4 py-1 rounded text-[11px] font-black uppercase tracking-[0.3em] mb-6">
          Resources
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
          Your Support <span className="text-[#FF5E14]">Library</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-xl mx-auto italic">
          Mental health, career guidance, legal rights — sab kuch ek jagah. Aapki zarurat ke mutabik resources dhundhe.
        </p>

        {/* Search */}
        <div className="mt-10 max-w-lg mx-auto relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-6 py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:border-[#FF5E14] outline-none font-bold text-sm"
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] z-40 bg-white border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? 'bg-[#FF5E14] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Resource Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg italic">Koi resource nahi mila. Doosra keyword try karein.</p>
          </div>
        ) : (
          filtered.map((section) => (
            <div key={section.category}>
              <div className="flex items-center space-x-4 mb-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: section.color }}
                >
                  {section.icon}
                </div>
                <h2 className="text-3xl font-black text-[#0A1128] tracking-tighter">{section.category}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {section.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#FF5E14]">
                        {typeIcons[item.type] || <FileText className="w-4 h-4" />}
                        <span>{item.type}</span>
                      </div>
                      <h3 className="text-xl font-black text-[#0A1128] tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed italic">{item.desc}</p>
                    </div>
                    <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-[#FF5E14] transition-colors">
                      {item.type === 'Helpline' ? 'Call Now' : 'Read More'}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#FF5E14] py-24 px-6 text-center text-white">
        <h2 className="text-4xl font-black tracking-tighter mb-4">
          Aur Madad Chahiye?
        </h2>
        <p className="text-orange-100 italic mb-10 max-w-md mx-auto">
          Hamare peer mentors se directly baat karein. Hum aapke liye available hain.
        </p>
        <a
          href="/chat"
          className="inline-flex items-center bg-white text-[#FF5E14] px-10 py-5 rounded font-black text-xs uppercase tracking-[0.2em] hover:bg-[#0A1128] hover:text-white transition-all shadow-2xl"
        >
          Chat With A Mentor <ArrowRight className="ml-3 w-5 h-5" />
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1128] text-white py-12 px-6 text-center">
        <p className="text-slate-400 text-sm">© 2024 PeerSupport. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resources;
