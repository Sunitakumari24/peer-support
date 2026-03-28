import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, Link } from 'react-router-dom';
import { Heart, Sparkles, Zap, BookOpen, Shield, ShieldCheck, Scale, Info, GraduationCap } from 'lucide-react';

const resourceDetails = {
  1: {
    title: 'Stress & Anxiety Toolkit',
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Stress & Anxiety Toolkit</h2>
        <p className="mb-4">
          Yahan aapko breathing, grounding, aur daily calm rehne ki practices milengi. In exercises ko follow karke aap apne stress ko kam kar sakte hain. Stress aur anxiety aaj ke samay me bahut common hai, lekin sahi tarike apna kar aap apne mind ko relax kar sakte hain. Jab bhi aapko lage ki aap overwhelmed feel kar rahe hain, toh yeh toolkit aapke liye ek quick help ho sakta hai. Yeh techniques scientifically proven hain aur har age group ke liye safe hain. Apne routine me inhe shamil karne se aap apne mood, focus, aur overall well-being ko improve kar sakte hain. 
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Deep Breathing Exercise</li>
          <li>5-4-3-2-1 Grounding Technique</li>
          <li>Daily Affirmations</li>
        </ul>
        <p className="mb-6">Har din 5 minute nikal kar inme se koi bhi ek practice try karein! Agar aap regular practice karte hain toh aapko khud me positive changes mehsoos honge.</p>

      </>
    ),
    icon: <Heart className="text-rose-500" size={32} />,
  },
  2: {
    title: 'Self-Care Checklist',
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Self-Care Checklist</h2>
        <p className="mb-4">Rozana apna khayal rakhne ke liye yeh choti-choti self-care routines follow karein:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Subah uthte hi paani piyein</li>
          <li>Apne liye 10 minute ka "me-time" rakhein</li>
          <li>Din me ek baar apne kisi dost se baat karein</li>
        </ul>
      </>
    ),
    icon: <Sparkles className="text-yellow-500" size={32} />,
  },
  // ...baaki resources yahan add kar sakte hain
};

const ResourceDetail = () => {
  const { id } = useParams();
  const detail = resourceDetails[id];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <Link to="/resources" className="text-rose-600 underline mb-4 inline-block">← Back to Resources</Link>
        <div className="flex items-center gap-3 mb-6">
          {detail?.icon}
          <h1 className="text-3xl font-extrabold">{detail?.title}</h1>
        </div>
        <div className="text-slate-700 text-lg">
          {detail?.content || <p>Resource not found.</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourceDetail;
