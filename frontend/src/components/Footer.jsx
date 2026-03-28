import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, MessageCircle, Users, Sparkles, X, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email || !/\S+@\S+\.\S+/.test(email)) return
    // send to backend
    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    }).then(async (res) => {
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error((body && body.message) || 'Failed to subscribe')
      }
      setSubscribed(true)
      setEmail('')
    }).catch((err) => {
      console.error('Subscribe error', err)
      // still show subscribed to not block UX, but you can change behavior if desired
      setSubscribed(true)
      setEmail('')
    })
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="border-t border-slate-700 bg-slate-900 px-5 pb-8 pt-10 text-white sm:px-[6vw]">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-extrabold">PEER SUPPORT</h3>
            <address className="mt-4 not-italic max-w-md text-lg leading-8 text-white/90">
              500 Montgomery Street, Suite 820
              <br />
              Alexandria, VA 22314
              <br />
              <a className="underline" href="tel:+17036847722">(703) 684.7722</a>
              <br />
              <a className="underline" href="tel:+18009696642">Toll Free: (800) 969.6642</a>
            </address>
            <p className="mt-6 max-w-md text-base leading-7 text-white/75">
              ©{year} Peer Support. All rights reserved. This site follows privacy and terms policies.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-rose-400">Quick links</h4>
            <ul className="mt-4 space-y-2 text-lg text-white/90">
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/about/financials" className="hover:underline">Financials</Link></li>
              <li><Link to="/news" className="hover:underline">In the news</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-rose-400">Learn</h4>
            <ul className="mt-4 space-y-2 text-lg text-white/90">
              <li><Link to="/resources" className="hover:underline">Mental health hub</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/workplace" className="hover:underline">Workplace learning</Link></li>
              <li><Link to="/research" className="hover:underline">Research & reports</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-rose-400">Get help</h4>
            <ul className="mt-4 space-y-2 text-lg text-white/90">
              <li><a href="tel:988" className="hover:underline">Call or text 988</a></li>
              <li><Link to="/crisis" className="hover:underline">Crisis services</Link></li>
              <li><Link to="/self-check" className="hover:underline">Take a mental health test</Link></li>
              <li><Link to="/treatment" className="hover:underline">Explore treatment options</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 justify-center">
              <a href="mailto:help@peersupport.example" aria-label="Email" className="flex items-center gap-2 text-white/90 hover:text-white">
                <Mail className="w-5 h-5" /> <span className="sr-only">Email</span>
              </a>
              <a href="tel:+17036847722" aria-label="Phone" className="flex items-center gap-2 text-white/90 hover:text-white">
                <Phone className="w-5 h-5" /> <span className="sr-only">Phone</span>
              </a>
              <Link to="/chat" state={{ initialActiveId: 1 }} aria-label="Chat" className="flex items-center gap-2 text-white/90 hover:text-white">
                <MessageCircle className="w-5 h-5" /> <span className="sr-only">Chat</span>
              </Link>
              <a href="/community" aria-label="Community" className="flex items-center gap-2 text-white/90 hover:text-white">
                <Users className="w-5 h-5" /> <span className="sr-only">Community</span>
              </a>
              <a href="https://twitter.com/peersupport" target="_blank" rel="noreferrer" aria-label="Twitter" className="flex items-center gap-2 text-white/90 hover:text-white">
                <Twitter className="w-5 h-5" /> <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.facebook.com/peersupport" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex items-center gap-2 text-white/90 hover:text-white">
                <Facebook className="w-5 h-5" /> <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/peersupport" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex items-center gap-2 text-white/90 hover:text-white">
                <Instagram className="w-5 h-5" /> <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/peersupport" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 text-white/90 hover:text-white">
                <Linkedin className="w-5 h-5" /> <span className="sr-only">LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  aria-label="Email for newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  type="email"
                  className="rounded-md bg-slate-800 border border-white/10 px-3 py-2 text-sm text-white outline-none"
                />
                <button type="submit" className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold">Subscribe</button>
              </form>
              {subscribed && <div className="text-sm text-green-400">Subscribed — thank you!</div>}
              <button onClick={scrollToTop} aria-label="Back to top" className="ml-4 rounded-full p-2 bg-white/5 hover:bg-white/10">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;