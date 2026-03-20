
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Heart } from 'lucide-react';


// Home page color scheme reference:
// - Main background: bg-white, bg-slate-900/55 overlay
// - Primary accent: bg-rose-600, text-rose-500, text-rose-600, border-rose-100
// - Secondary: bg-rose-100, text-slate-800, text-slate-200, text-slate-700, text-slate-900
// - Button: bg-rose-600 (primary), hover:bg-rose-700, border-white/50
// - Section: border-t-8 border-rose-100, bg-white
// - Form: border-slate-300, focus:border-rose-500

const About = () => {
  // Design theme colors based on the image provided
  const colors = {
    primary: '#B18E63', // Golden/Brown button color (About page custom)
    bg: '#FDF8F3',      // Light Cream background (About page custom)
    darkText: '#1a1a1a',
    // Home page reference: rose-600, rose-500, rose-100, slate-900, slate-800, slate-700, slate-200
  };

  return (
    <div className="min-h-screen font-serif bg-white">
      <Navbar />
      {/* Hero Section - Gap completely removed (No margins or absolute offsets) */}
      <header className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden w-full p-0 m-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
          alt="Sisterhood Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mt-12">
          <h1 className="text-3xl md:text-5xl font-serif mb-4 tracking-widest leading-tight uppercase">
            Hamara Peer Support <br/> Experience
          </h1>
          <p className="text-xs md:text-sm font-sans font-light max-w-2xl mx-auto opacity-90 leading-relaxed tracking-wide mb-6">
            Ek surakshit aur sunehra space jo young women ke liye banaya gaya hai.
          </p>
          <button 
            className="px-8 py-3 text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all hover:scale-105"
            style={{ backgroundColor: colors.primary }}
          >
            Get Started
          </button>
        </div>
      </header>
      {/* Intro Section - Discover the Essence style */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center"> 
        <span className="text-[9px] tracking-[0.5em] uppercase text-[#B18E63] font-bold block mb-4">Welcome</span>
        <h2 className="text-3xl md:text-4xl font-serif mb-10 text-gray-900 uppercase tracking-[0.2em]">
          Hamare Peer Support Ki Pehchan
        </h2>
        <div className="space-y-6 text-sm font-sans leading-[1.8] text-gray-600 tracking-wide">
          <p>
            Sisterhood App young women ke liye ek aisi digital duniya hai jahan wo bina kisi darr ke apni baat share kar sakti hain. Humne isse tab shuru kiya jab humne mehsoos kiya ki aaj ki bhag-daur mein ek sacchi community ki kitni zaroorat hai. Humara mission ladkiyon ko ek dusre ke tajurbe se seekhne aur badhne ka mauka dena hai.
          </p>
          <p>
            Yahan har baat confidential hai aur har connection dil se juda hai. Hum sirf ek app nahi, ek emotion hain jo aapko ehsas dilata hai ki aap akeli nahi hain. Humari community mein aapko milenge mentors, dost aur wo sahar jo aap dhoond rahi hain.
          </p>
        </div>
        <button 
          className="mt-12 px-10 py-3 text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all"
          style={{ backgroundColor: colors.primary }}
        >
          Read More
        </button>
      </section>
      <Footer />

      {/* Features Grid - 3-step detailed layout */}
      <section className="pb-24 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-0">
          
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-stretch border-b border-gray-100 md:border-b-0">
            <div className="md:w-1/2 h-\[400px\]">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Personalized Support" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-[#FDF8F3]">
              <span className="text-[10px] font-sans font-bold text-gray-400 mb-4 uppercase tracking-widest">01</span>
              <h3 className="text-2xl font-serif mb-6 uppercase tracking-[0.15em] text-gray-800 leading-snug">
                Personalized <br/> Peer Matching
              </h3>
              <p className="text-sm font-sans text-gray-600 mb-8 leading-relaxed tracking-wide">
                Hum aapko un logon se connect karte hain jo aapke interests aur challenges ko samajhte hain, taki aapko sahi guidance mil sake.
              </p>
              <button className="flex items-center text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-gray-900 group">
                Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-stretch border-b border-gray-100 md:border-b-0">
            <div className="md:w-1/2 h-\[400px\]">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000" 
                alt="Group Circles" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white">
              <span className="text-[10px] font-sans font-bold text-gray-400 mb-4 uppercase tracking-widest">02</span>
              <h3 className="text-2xl font-serif mb-6 uppercase tracking-[0.15em] text-gray-800 leading-snug">
                Group Support <br/> Circles
              </h3>
              <p className="text-sm font-sans text-gray-600 mb-8 leading-relaxed tracking-wide">
                Haftawar online meetings jahan aap dusri ladkiyon ke saath milkar apne dil ki baat kar sakti hain aur ek saath grow kar sakti hain.
              </p>
              <button className="flex items-center text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-gray-900 group">
                Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="md:w-1/2 h-\[400px\]">
              <img 
                src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=1000" 
                alt="Workshops" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-[#FDF8F3]">
              <span className="text-[10px] font-sans font-bold text-gray-400 mb-4 uppercase tracking-widest">03</span>
              <h3 className="text-2xl font-serif mb-6 uppercase tracking-[0.15em] text-gray-800 leading-snug">
                Mindset & <br/> Growth Workshops
              </h3>
              <p className="text-sm font-sans text-gray-600 mb-8 leading-relaxed tracking-wide">
                Humari workshops aapko self-love, career building aur mental wellness ke liye naye tools aur techniques sikhati hain.
              </p>
              <button className="flex items-center text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-gray-900 group">
                Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Offerings Banner */}
      <section className="bg-gray-100 py-16 text-center">
         <span className="text-[9px] tracking-[0.4em] uppercase text-gray-400 font-bold block mb-4">Facilities and Amenities</span>
         <h2 className="text-2xl font-serif uppercase tracking-[0.2em] text-gray-800">Our Premium Offerings</h2>
      </section>

      {/* Grid Bottom Items */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 mb-4">
        <div className="relative h-64 group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover brightness-50" alt="Program" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <h4 className="text-sm uppercase tracking-widest font-serif mb-2">Tailored Coaching</h4>
            <p className="text-[10px] opacity-70">Customized programs designed for your unique needs.</p>
          </div>
        </div>
        <div className="relative h-64 group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover brightness-50" alt="Design" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <h4 className="text-sm uppercase tracking-widest font-serif mb-2">Safe Digital Space</h4>
            <p className="text-[10px] opacity-70">A beautiful and secure platform for your journey.</p>
          </div>
        </div>
        <div className="relative h-64 group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover brightness-50" alt="Support" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <h4 className="text-sm uppercase tracking-widest font-serif mb-2">24/7 Peer Support</h4>
            <p className="text-[10px] opacity-70">Always connected with sisters who care for you.</p>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default About;