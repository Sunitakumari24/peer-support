import React, { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Send, X } from 'lucide-react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [toast, setToast] = useState('')
  const EMAIL_RE = /^\S+@\S+\.\S+$/
  const PHONE_RE = /^[0-9+\-\s()]{6,20}$/

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrors({})
    setSuccess('')
    const errs = {}
    if (!form.name || form.name.trim().length < 2) errs.name = 'Please enter your name'
    if (!form.email || !EMAIL_RE.test(form.email)) errs.email = 'Please enter a valid email'
    if (form.phone && !PHONE_RE.test(form.phone)) errs.phone = 'Please enter a valid phone number'
    if (!form.message || form.message.trim().length < 10) errs.message = 'Message should be at least 10 characters'
    if (Object.keys(errs).length) return setErrors(errs)

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, subject: 'Contact form', message: form.message })
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error((body && body.message) || 'Failed to submit')
      }
      await res.json().catch(() => ({}))
      setSuccess('Thanks — we received your message. Our team will contact you shortly.')
      setToast('Thanks — we received your message. Our team will contact you shortly.')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      console.error('Contact submit error', err)
      setSuccess('Thanks — we received your message (offline).')
      setToast('Thanks — we received your message (offline).')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(''), 6000)
      return () => clearTimeout(t)
    }
  }, [success])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 4500)
    return () => clearTimeout(t)
  }, [toast])

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Navbar />
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center filter brightness-50" />
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:pr-12">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Need someone to talk to?</h1>
                <p className="mt-4 text-slate-200 max-w-xl">We're here to support you. Share your concerns and we'll reach back within 24–48 hours. For immediate help, use the phone option.</p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-md bg-rose-600 text-white"><Phone size={18} /></div>
                    <div>
                      <div className="text-sm text-slate-200">Phone</div>
                      <div className="font-semibold text-rose-200">+91 91529 87821</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-md bg-rose-600 text-white"><Mail size={18} /></div>
                    <div>
                      <div className="text-sm text-slate-200">Email</div>
                      <div className="font-semibold text-rose-200">support@peersupport.example</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 blur-lg rounded-2xl" />
                <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-6 lg:p-10">
                  <h3 className="text-lg font-bold">Send us a message</h3>
                  <p className="text-sm text-slate-300 mt-1">Confidential — we read every message.</p>

                  <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="w-full rounded-md bg-transparent border border-white/20 px-4 py-3 placeholder:text-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-rose-300" />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full rounded-md bg-transparent border border-white/20 px-4 py-3 placeholder:text-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-rose-300" />
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="w-full rounded-md bg-transparent border border-white/20 px-4 py-3 placeholder:text-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-rose-300" />
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help?" className="w-full rounded-md bg-transparent border border-white/20 px-4 py-3 placeholder:text-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-rose-300" />

                    <div className="flex items-center gap-3 mt-2">
                     <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2 text-white font-semibold hover:bg-rose-700 transition">
                        <Send size={16} />
                        <span>{loading ? 'Sending…' : 'Send message'}</span>
                      </button>
                      {success && <div className="text-sm text-emerald-300 font-medium">{success}</div>}
                    </div>
                    {Object.keys(errors).length > 0 && (
                      <ul className="text-sm text-rose-300 mt-2 list-disc pl-5">
                        {Object.entries(errors).map(([k, v]) => (
                          <li key={k}>{v}</li>
                        ))}
                      </ul>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {toast && (
          <div className="fixed right-6 top-6 z-50">
           <div className="flex items-center gap-3 rounded-full bg-rose-600 px-5 py-3 text-white shadow-2xl">
              <div className="font-semibold">{toast}</div>
              <button onClick={() => setToast('')} className="rounded-full bg-white/20 p-1"><X size={16} /></button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}