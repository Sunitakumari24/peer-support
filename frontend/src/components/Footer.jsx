import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 px-5 pb-8 pt-10 text-white sm:px-[6vw]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Subscribe to our</h2>
            <h2 className="text-4xl font-extrabold leading-tight">newsletter</h2>
          </div>

          <form className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <input
              type="text"
              placeholder="First Name *"
              className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
            />
            <input
              type="email"
              placeholder="Email *"
              className="rounded-full border border-white/45 bg-white/5 px-5 py-3 text-white placeholder:text-white/70 outline-none focus:border-rose-400"
            />
            <button className="rounded-full bg-rose-600 px-5 py-3 text-lg font-bold text-white transition hover:bg-rose-700">
              Submit
            </button>
          </form>
        </div>

        <div className="mt-10 h-px bg-white/20" />

        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-extrabold">PEER SUPPORT</h3>
            <p className="mt-4 max-w-md text-lg leading-8 text-white/90">
              500 Montgomery Street, Suite 820
              <br />
              Alexandria, VA 22314
              <br />
              Phone: (703) 684.7722
              <br />
              Toll Free: (800) 969.6642
            </p>
            <p className="mt-6 max-w-md text-base leading-7 text-white/75">
              ©2026 Peer Support. All rights reserved. This site is protected by
              privacy and terms policies.
            </p>
          </div>

          <div>
            <h4 className="text-4xl/none font-extrabold text-rose-400">Quick links</h4>
            <ul className="mt-4 space-y-3 text-lg text-white/90">
              <li>Contact</li>
              <li>Donate</li>
              <li>Careers</li>
              <li>Financials</li>
              <li>In the news</li>
            </ul>
          </div>

          <div>
            <h4 className="text-4xl/none font-extrabold text-rose-400">Learn</h4>
            <ul className="mt-4 space-y-3 text-lg text-white/90">
              <li>Mental health learning hub</li>
              <li>Blog</li>
              <li>Workplace learning hub</li>
              <li>Research & reports</li>
            </ul>
          </div>

          <div>
            <h4 className="text-4xl/none font-extrabold text-rose-400">Get help</h4>
            <ul className="mt-4 space-y-3 text-lg text-white/90">
              <li>Call or text 988</li>
              <li>Crisis services</li>
              <li>Take a mental health test</li>
              <li>Explore treatment options</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/20 pt-6 text-base text-white/80 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-lg text-rose-400">
            <span>f</span>
            <span>X</span>
            <span>▶</span>
            <span>◎</span>
            <span>in</span>
          </div>
          <div className="flex flex-wrap gap-5">
            <span>Privacy policy</span>
            <span>Terms of use</span>
            <span>Site by Great Believer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
