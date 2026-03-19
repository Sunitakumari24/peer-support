import React, { useMemo, useState } from 'react'
import { Search, BookOpen, Video, Phone, Plus, Tag, Play, X } from 'lucide-react'

// Enhanced Resources page: thumbnails, preview modal and improved cards
export default function Resources() {
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [tagFilter, setTagFilter] = useState('all')
  const [preview, setPreview] = useState(null) // resource to preview

  const resources = useMemo(() => [
    {
      id: 1,
      title: 'How to support a friend in crisis',
      excerpt: 'Practical steps and dos/don’ts when someone you care about is struggling.',
      type: 'article',
      media: 'image',
      img: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80',
      tags: ['crisis', 'friendship'],
      link: 'https://example.com/article/1'
    },
    {
      id: 2,
      title: 'Mindfulness for beginners (video)',
      excerpt: 'A short guided mindfulness session you can do anywhere.',
      type: 'video',
      media: 'video',
      // we'll use a youtube id for preview
      videoId: 'iLnmTe5Q2Qw',
      img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      tags: ['mindfulness', 'stress'],
      link: 'https://www.youtube.com/watch?v=iLnmTe5Q2Qw'
    },
    {
      id: 3,
      title: 'Local helplines & emergency contacts',
      excerpt: 'Numbers and services to contact in different situations.',
      type: 'helpline',
      media: 'none',
      img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80',
      tags: ['emergency'],
      link: '#'
    },
    {
      id: 4,
      title: 'Managing exam stress – short guide',
      excerpt: 'Quick techniques students can use during high-pressure times.',
      type: 'article',
      media: 'image',
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      tags: ['students', 'stress'],
      link: '#'
    }
  ], [])

  const tags = useMemo(() => ['all', 'crisis', 'mindfulness', 'stress', 'students', 'emergency', 'friendship'], [])

  const filtered = resources.filter(r => {
    if (typeFilter !== 'all' && r.type !== typeFilter) return false
    if (tagFilter !== 'all' && !r.tags.includes(tagFilter)) return false
    if (query && !(r.title + r.excerpt).toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white border-b py-8">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-extrabold">Resources</h1>
          <p className="mt-2 text-slate-600">Curated articles, videos, helplines and community resources to help you and your peers.</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
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
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-slate-600">Filter by tag</div>
              <select value={tagFilter} onChange={e => setTagFilter(e.target.value)} className="rounded-lg border border-slate-200 bg-white py-2 px-3 text-sm">
                {tags.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="mt-3 text-sm text-slate-500">Found <span className="font-semibold text-slate-700">{filtered.length}</span> resources</div>
          </div>
        </section>

        {/* Featured + Grid */}
        <section className="mt-8 grid gap-6">
          {filtered.length > 0 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Feature first item as large card */}
              <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-xl">
                <div className="relative flex h-64 items-end p-8">
                  <img src={filtered[0].img} alt="featured" className="absolute inset-0 h-full w-full object-cover opacity-30" />
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-extrabold">{filtered[0].title}</h2>
                    <p className="mt-2 text-slate-100/90">{filtered[0].excerpt}</p>
                    <div className="mt-4 flex gap-3">
                      <button onClick={() => setPreview(filtered[0])} className="rounded-full bg-white/90 px-4 py-2 font-semibold text-rose-600">Preview</button>
                      <a href={filtered[0].link} className="rounded-full border border-white/30 px-4 py-2">Open</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next two as smaller cards */}
              <div className="grid grid-cols-1 gap-6">
                {filtered.slice(1,3).map(r => (
                  <div key={r.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-md">
                    <div className="relative w-36 flex-shrink-0 overflow-hidden rounded-lg">
                      <img src={r.img} alt={r.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {r.media === 'video' && <div className="absolute inset-0 flex items-center justify-center"><div className="rounded-full bg-white/90 p-2"><Play size={20} className="text-rose-600"/></div></div>}
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold">{r.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{r.excerpt}</p>
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <button onClick={() => setPreview(r)} className="rounded-full bg-rose-600 px-3 py-1 text-white text-sm">Preview</button>
                        <a href={r.link} className="text-rose-600 text-sm font-semibold">Open</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grid of all cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map(r => (
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
                      <button onClick={() => setPreview(r)} className="rounded-full bg-rose-600 px-3 py-2 text-sm text-white">Preview</button>
                      <a href={r.link} className="text-rose-600 text-sm font-semibold">Open</a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-rose-600 p-8 text-white">
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

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
            <h4 className="font-bold text-lg">Emergency & Helplines</h4>
            <p className="mt-2 text-sm text-slate-600">If you or someone else is in immediate danger call your local emergency number first. Below are quick links for urgent help.</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center justify-between"><span>National Helpline (India)</span><a className="text-rose-600 font-semibold">1800-123-456</a></li>
              <li className="flex items-center justify-between"><span>Student Support Line</span><a className="text-rose-600 font-semibold">+91 98765 43210</a></li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
            <h4 className="font-bold text-lg">Recommended Reading</h4>
            <ol className="mt-3 list-decimal pl-5 text-sm text-slate-600 space-y-2">
              <li><a className="text-rose-600 font-semibold">Understanding anxiety</a> — short primer</li>
              <li><a className="text-rose-600 font-semibold">Building resilience</a> — practical workbook</li>
            </ol>
          </div>
        </section>

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
    </div>
  )
}
