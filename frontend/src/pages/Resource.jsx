import React, { useMemo, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, BookOpen, Video, Phone, Plus, Tag, Play, X } from 'lucide-react'

// Enhanced Resources page: thumbnails, preview modal and improved cards
function Resources() {
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [preview, setPreview] = useState(null) // resource to preview

  const resources = useMemo(() => [
    {
      id: 1,
      title: 'How to support a friend in crisis',
      excerpt: 'Practical steps and dos/don’ts when someone you care about is struggling.',
      type: 'article',
      media: 'image',
      img: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80',
      tags: ['crisis', 'friendship', 'relationship'],
      link: 'https://www.mind.org.uk/information-support/helping-someone-else/friendship-support/'
    },
    {
      id: 9,
      title: 'Study Tips for Students',
      excerpt: 'Effective study habits and exam strategies for students.',
      type: 'article',
      media: 'image',
      img: '/study-tips.png',
      tags: ['study', 'students'],
      link: 'https://www.topuniversities.com/student-info/health-and-support/exam-preparation-ten-study-tips'
    },
    {
      id: 10,
      title: 'Understanding Mental Health',
      excerpt: 'What is mental health? Signs, symptoms, and how to seek help.',
      type: 'article',
      media: 'image',
      img: '/mental.png',
      tags: ['mental health'],
      link: 'https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/mental-health'
    },
    {
      id: 11,
      title: 'Period Myths & Facts',
      excerpt: 'Common myths about periods and the real facts you should know.',
      type: 'article',
      media: 'image',
      img: '/periods-myths.png',
      tags: ['period', 'health support'],
      link: 'https://flo.health/menstrual-cycle/health/period/how-to-make-your-period-end-faster'
    },
    {
      id: 12,
      title: 'Building Community Support',
      excerpt: 'How to find and build a supportive community around you.',
      type: 'article',
      media: 'image',
      img: '/community1.png',
      tags: ['community support', 'community'],
      link: 'https://www.psychologytoday.com/us/blog/the-moment-youth/201902/the-importance-community-support'
    },
    {
      id: 13,
      title: 'Friendship & Mental Wellbeing',
      excerpt: 'Why friendships matter for your mental health and happiness.',
      type: 'article',
      media: 'image',
      img: '/friendship.png',
      tags: ['friendship', 'mental health'],
      link: 'https://www.mentalhealth.org.uk/explore-mental-health/a-z-topics/friendship-and-mental-health'
    },
    {
      id: 14,
      title: 'Healthy Relationships: A Guide',
      excerpt: 'Tips for building and maintaining healthy relationships.',
      type: 'article',
      media: 'image',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      tags: ['relationship', 'mental health'],
      link: 'https://www.helpguide.org/relationships/social-connection/relationship-help'
    },
    // Period Support Video
    {
      id: 2,
      title: 'Period Support: Myths & Facts',
      excerpt: 'Learn about periods, bust myths, and get support for menstrual health.',
      type: 'video',
      media: 'video',
      videoId: 'jExnwGYzlN8',
      img: '/period.png',
      tags: ['period', 'health support'],
      link: 'https://youtu.be/iY50OjU436E?si=IyobjGk3V5XXmQfR'
    },
    // Study Support Video
    {
      id: 3,
      title: 'Study Support: Focus & Motivation',
      excerpt: 'Tips and techniques to stay focused and motivated during studies.',
      type: 'video',
      media: 'video',
      videoId: '3pg0nzainMo',
      img: '/exam-study.png',
      tags: ['study support', 'students'],
      link: 'https://youtu.be/3pg0nzainMo?si=HbvEXi3ieOrGgO_B'
    },
    // Community Support Video
    {
      id: 4,
      title: 'Community Support: Finding Your Circle',
      excerpt: 'How to find and build a supportive community around you.',
      type: 'video',
      media: 'video',
      videoId: 'lTTajzrSkCw',
      img: '/community.png',
      tags: ['community support'],
      link: 'https://www.youtube.com/watch?v=lTTajzrSkCw'
    },
    // Health Support Video
    {
      id: 5,
      title: 'Health Support: Self-Care Basics',
      excerpt: 'Essential self-care tips for your physical and mental health.',
      type: 'video',
      media: 'video',
      videoId: 'hTWKbfoikeg',
      img: '/health.png',
      tags: ['health support', 'self-care'],
      link: 'https://www.youtube.com/watch?v=hTWKbfoikeg'
    },
    // Mindfulness Video (existing)
    {
      id: 6,
      title: 'Mindfulness ',
      excerpt: 'A short guided mindfulness session you can do anywhere.',
      type: 'video',
      media: 'video',
      videoId: 'iLnmTe5Q2Qw',
      img: '/mindfulness.png',
      tags: ['mindfulness', 'stress'],
      link: 'https://www.youtube.com/watch?v=iLnmTe5Q2Qw'
    },
    // Helpline Example
    {
      id: 7,
      title: 'Local helplines & emergency contacts',
      excerpt: 'Numbers and services to contact in different situations.',
      type: 'helpline',
      media: 'none',
      img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80',
      tags: ['emergency'],
      link: 'https://www.incredibleindia.gov.in/en/emergency'
    },
    // Article Example
    {
      id: 8,
      title: 'Managing exam stress – short guide',
      excerpt: 'Quick techniques students can use during high-pressure times.',
      type: 'article',
      media: 'image',
      img: '/focus.png',
      tags: ['students', 'stress'],
      link: 'https://www2.hse.ie/mental-health/life-situations-events/exam-s'
    }
  ], [])


  const filtered = resources.filter(r => {
    if (typeFilter !== 'all' && r.type !== typeFilter) return false
    if (query && !(r.title + r.excerpt).toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />
      <header className="bg-white border-b py-8">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-extrabold">Resources</h1>
          <p className="mt-2 text-slate-600">Find helpful articles, videos, helplines, and support for your journey. Explore, learn, and connect with your community!</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 flex-1">
        <section className="grid gap-6 md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <label className="relative block">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400"><Search size={18} /></span>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search resources, topics, or keywords"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => { setTypeFilter('all') }} className={`rounded-full px-3 py-1 text-sm ${typeFilter==='all' ? 'bg-rose-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}><BookOpen size={14} className="inline-block mr-2"/>All</button>
              <button onClick={() => { setTypeFilter('article') }} className={`rounded-full px-3 py-1 text-sm ${typeFilter==='article' ? 'bg-rose-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}><BookOpen size={14} className="inline-block mr-2"/>Articles</button>
              <button onClick={() => { setTypeFilter('video') }} className={`rounded-full px-3 py-1 text-sm ${typeFilter==='video' ? 'bg-rose-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}><Video size={14} className="inline-block mr-2"/>Videos</button>
              <button onClick={() => { setTypeFilter('helpline') }} className={`rounded-full px-3 py-1 text-sm ${typeFilter==='helpline' ? 'bg-rose-600 text-white' : 'bg-white text-slate-700 border border-slate-200'}`}><Phone size={14} className="inline-block mr-2"/>Helplines</button>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <div className="mt-3 text-sm text-slate-500">Found <span className="font-semibold text-slate-700">{filtered.length}</span> resources</div>
          </div>
        </section>

        {/* Featured + Grid */}
        <section className="mt-8 rounded-2xl bg-rose-600 p-8 text-white">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-2xl font-bold">Have a resource to share?</h4>
              <p className="mt-1 text-sm text-rose-100">Submit articles, videos or local services to help the community.</p>
            </div>
            <div className="mt-3 md:mt-0">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-rose-600"><Plus size={16}/> Submit a resource</button>
            </div>
          </div>
        </section>
        <section className="mt-8 grid gap-6">
          {/* Featured card removed as requested. Only grid of filtered cards remains. */}

          {/* Grid of filtered cards by type */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.filter(r => typeFilter === 'all' ? true : r.type === typeFilter).length === 0 ? (
              <div className="col-span-full text-center text-rose-500 font-bold text-lg">No resources found.</div>
            ) : (
              filtered
                .filter(r => typeFilter === 'all' ? true : r.type === typeFilter)
                .map(r => (
                  <article key={r.id} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-transform hover:-translate-y-2">
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-t-3xl">
                      <img src={r.img} alt={r.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">{r.title}</h3>
                        <span className="text-xs rounded-full bg-slate-100 px-2 py-1 text-slate-700">{r.type}</span>
                      </div>
                      <p className="mt-3 text-sm text-slate-600 line-clamp-3">{r.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {r.tags.map(tag => <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{tag}</span>)}
                        </div>
                        <div className="flex items-center gap-3">
                          {r.media === 'video' ? (
                            <button onClick={() => setPreview(r)} className="rounded-full bg-rose-600 px-3 py-2 text-sm text-white">Preview</button>
                          ) : null}
                          <a href={r.link} className="text-rose-600 text-sm font-semibold" target="_blank" rel="noopener noreferrer">
                            {r.type === 'article' ? 'Read Article' : 'Open'}
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
            )}
          </div>
        </section>

        {/* (Section moved above) */}



        {/* Preview modal */}
        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
            <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-bold">{preview.title}</h3>
                <button onClick={() => setPreview(null)} className="rounded-full bg-slate-100 p-2"><X size={18} /></button>
              </div>
              <div className="p-4">
                {preview.media === 'video' ? (
                  <div className="aspect-video w-full">
                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${preview.videoId}`} title={preview.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                ) : (
                  <div>
                    <img src={preview.img} alt={preview.title} className="w-full rounded-md object-cover" />
                    <p className="mt-4 text-slate-700">{preview.excerpt}</p>
                    <div className="mt-4"><a href={preview.link} className="text-rose-600 font-semibold">Open full resource</a></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  )
}

function AnonymousVentBoard() {
  const [category, setCategory] = useState('mental health');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { category: 'mental health', text: 'I feel stressed about exams.' },
    { category: 'period', text: 'Is it normal to have cramps for 3 days?' },
    { category: 'community', text: 'How do I make new friends in college?' }
  ]);

  const categories = [
    'mental health',
    'period',
    'study',
    'community',
    'relationship',
    'health support'
  ];

  function handleSend(e) {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, { category, text: message }]);
    setMessage('');
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <form onSubmit={handleSend} className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <label className="text-xs font-semibold">Category:</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="rounded-md border border-slate-300 px-2 py-1 text-xs">
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="rounded-md border border-slate-300 px-3 py-2 text-sm resize-none"
          rows={2}
        />
        <button type="submit" className="self-end bg-rose-600 text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-rose-700">Send</button>
      </form>
      <div className="mt-4 max-h-40 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-md px-3 py-2 text-xs">
            <span className="font-bold text-rose-600 mr-2">[{msg.category}]</span>
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Resources;