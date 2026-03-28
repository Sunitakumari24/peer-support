import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About({ setPage = () => {} }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />
      <div className="flex-1 px-5 py-12 sm:px-[6vw]">
        <header className="rounded-xl bg-rose-50 p-8 shadow-md">
          <h1 className="text-4xl font-extrabold text-rose-600">About Peer Support</h1>
          <p className="mt-3 text-lg text-slate-700 max-w-3xl">We provide practical, human-first peer support — quick chats, moderated groups, and resource guides that help people take real next steps.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={() => navigate('/chat')} className="rounded-full bg-rose-600 px-6 py-3 text-white shadow hover:bg-rose-700">Start a chat</button>
            <button onClick={() => navigate('/contact')} className="rounded-full border border-rose-600 px-6 py-3 text-rose-600 bg-white hover:bg-rose-50">Contact us</button>
          </div>
        </header>

        <section className="mt-8 rounded-lg bg-white p-6 border shadow-sm">
          <h2 className="text-2xl font-bold">Our mission</h2>
          <p className="mt-3 text-slate-700">Our mission is to make compassionate peer support accessible to everyone — quickly, safely and without judgement. We connect people with trained volunteers and community resources so they can take practical next steps toward recovery and wellbeing.</p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-md border p-3">
              <h4 className="font-semibold">Compassion</h4>
              <p className="text-sm text-slate-600">We listen without judgement and prioritize emotional safety.</p>
            </div>
            <div className="rounded-md border p-3">
              <h4 className="font-semibold">Practical help</h4>
              <p className="text-sm text-slate-600">We offer concrete tools, local services and clear next steps.</p>
            </div>
            <div className="rounded-md border p-3">
              <h4 className="font-semibold">Community</h4>
              <p className="text-sm text-slate-600">We create supportive spaces where people learn from each other.</p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">What we offer</h2>
          <p className="mt-3 text-slate-700">Peer Support offers several ways to get help and connect with others. Pick the option that suits you:</p>
          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li><button onClick={() => navigate('/chat')} className="inline text-rose-600 underline">Immediate Peer Chat</button> — Join anonymous rooms or request a private 1:1 peer.</li>
            <li><button onClick={() => navigate('/chat')} className="inline text-rose-600 underline">Moderated Groups</button> — Small topic-based groups to share experiences and learn coping strategies.</li>
            <li><button onClick={() => setPage('resources')} className="inline text-rose-600 underline">Practical Resources</button> — Guides, local directories and recovery plans.</li>
            <li><button onClick={() => setPage('contact')} className="inline text-rose-600 underline">Referral Help</button> — Directions to professional services and emergency contacts.</li>
            <li><button onClick={() => setPage('resources')} className="inline text-rose-600 underline">Contribute a resource</button> — Share an article, video or local service to help the community.</li>
          </ul>
        </section>

        <section className="mt-10 rounded-lg bg-slate-50 p-6">
          <h3 className="text-2xl font-bold">How to get help now</h3>
          <p className="mt-2 text-slate-600">If you're in immediate danger call your local emergency number. Otherwise follow these steps:</p>
          <ol className="mt-3 list-decimal pl-5 text-slate-600 space-y-2">
            <li>Click <button onClick={() => navigate('/chat')} className="inline text-rose-600 underline">Chat</button> to start a conversation or request a 1:1 peer.</li>
            <li>Use the <button onClick={() => setPage('resources')} className="inline text-rose-600 underline">Resources</button> page for guides and local services.</li>
            <li>Contact us via the <button onClick={() => setPage('contact')} className="inline text-rose-600 underline">Contact</button> page for tailored guidance.</li>
          </ol>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg p-6 bg-white border shadow-sm">
            <h4 className="text-lg font-bold">Quick Actions</h4>
            <p className="mt-2 text-slate-600">If someone is at risk: call emergency services immediately. For local mental health helplines see Resources.</p>
            <div className="mt-4 flex gap-3">
              <button onClick={() => setPage('chat')} className="rounded-full bg-rose-600 px-4 py-2 text-white">Start chat</button>
              <button onClick={() => setPage('contact')} className="rounded-full border border-rose-600 px-4 py-2 text-rose-600">Contact</button>
            </div>
          </div>

          <div className="rounded-lg p-6 bg-white border shadow-sm">
            <h4 className="text-lg font-bold">Get involved</h4>
            <p className="mt-2 text-slate-600">Contribute resources, suggest partners, or help improve listings and moderation. If you'd like to work with us, please get in touch.</p>
            <div className="mt-4">
              <button onClick={() => setPage('resources')} className="rounded-full bg-rose-600 px-4 py-2 text-white">Contribute</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}