import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Heart, 
  Users, 
  BookOpen, 
  ShieldAlert, 
  Sparkles, 
  MessageCircle, 
  ArrowRight,
  PhoneCall,
  Smile,
  Meh,
  Frown
} from 'lucide-react';

const Services = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const services = [
    {
      title: "Emotional Support",
      description: "A safe, anonymous space to share your feelings and receive empathy from those who understand.",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      action: "Get Support",
      color: "bg-pink-50",
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Counseling & Guidance",
      description: "Connect with mentors and experienced peers to navigate life's challenges and career paths.",
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />,
      action: "Find a Mentor",
      color: "bg-purple-50",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Support",
      description: "Join our discussion forums to share experiences and build lasting bonds with other young women.",
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      action: "Join Forum",
      color: "bg-indigo-50",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Educational Resources",
      description: "Access curated articles, videos, and tips on mental health, safety, and personal growth.",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      action: "Browse Library",
      color: "bg-blue-50",
      imageUrl: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Self-Care Tools",
      description: "Daily affirmations, journaling prompts, and tools designed to help you stay grounded.",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      action: "Try Tools",
      color: "bg-amber-50",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Emergency Help",
      description: "Immediate access to professional helplines and crisis support when you need it most.",
      icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
      action: "Call Now",
      color: "bg-red-50",
      imageUrl: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const moods = [
    { label: 'Sad', icon: <Frown className="w-5 h-5 md:w-6 md:h-6" />, color: 'hover:bg-blue-100 text-blue-600' },
    { label: 'Neutral', icon: <Meh className="w-5 h-5 md:w-6 md:h-6" />, color: 'hover:bg-gray-100 text-gray-600' },
    { label: 'Happy', icon: <Smile className="w-5 h-5 md:w-6 md:h-6" />, color: 'hover:bg-green-100 text-green-600' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <Navbar />
      <main className="flex-1 pb-12">
        {/* Hero Section */}
        <section className="relative h-[250px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/50 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-sm md:text-base text-white/90 font-light italic leading-relaxed">
              “We are here to support, guide and empower you 💜”
            </p>
          </div>
        </section>

        {/* Daily Check-in Card */}
        <section className="max-w-3xl mx-auto -mt-8 relative z-20 px-4 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-5 border border-purple-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-purple-900 leading-tight">How are you feeling today?</h3>
                <p className="text-slate-500 text-[11px] mt-0.5">Your daily check-in helps us understand you better.</p>
              </div>
              <div className="flex gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-lg transition-all border ${
                      selectedMood === mood.label 
                        ? 'bg-purple-50 border-purple-400 shadow-inner' 
                        : 'border-slate-50 bg-slate-50/50'
                    } ${mood.color}`}
                  >
                    {mood.icon}
                    <span className="text-[9px] md:text-[10px] font-semibold mt-1">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid with Images */}
        <section className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Empowering You Every Step</h2>
            <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden"
              >
                {/* Half Image Section */}
                <div className="h-40 w-full overflow-hidden relative">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 p-2 rounded-xl bg-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-xs mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-purple-600 text-xs font-bold hover:gap-3 transition-all uppercase tracking-wider">
                    {service.action} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-4 mt-16 mb-12">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 py-10 px-6 rounded-2xl text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">Need Help Now?</h2>
              <p className="text-purple-100 text-xs mb-6 max-w-lg mx-auto leading-relaxed">
                Don't hesitate to reach out. Our support team is ready to listen to you 24/7.
              </p>
              <button className="bg-white text-purple-700 px-8 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto text-xs">
                <PhoneCall className="w-4 h-4" /> Talk to Someone
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;