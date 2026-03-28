import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const supportContent = {
  'mental-health': {
    title: 'Mental Health Support',
    text: 'Mental health is just as important as physical health. Sometimes, due to stress, anxiety, or depression, we may feel lonely or troubled. The purpose of this page is to provide you with the right information, support, and guidance. If you need help, you can talk to a trusted person or a professional without any hesitation. Your feelings are important, and you are not alone"',
    helplines: [
      { label: 'NIMHANS', number: '080-46110007' },
      { label: 'Kiran Mental Health', number: '1800-599-0019' }
    ],
    video: 'https://www.youtube.com/embed/wM28GqGzWSM'
  },
  'emotional-support': {
    title: 'Emotional Support',
    text: 'Sometimes in life, due to stress, tension, or emotional problems, we may feel lonely. Our Emotional Support service provides a safe and caring space where women can share their feelings and receive support. We listen without judgment and help you become strong and confident.',
    helplines: [
      { label: 'Snehi', number: '91-22-2772 6771' },
      { label: 'iCall', number: '9152987821' }
    ],
    video: 'https://www.youtube.com/embed/TjK0AA28U10'
  },
  'Period Support': {
    title: 'Period Support',
    text: `Periods are a natural process that occurs every month in girls and women, in which the lining of the uterus is shed from the body in the form of blood. It usually lasts for 3–7 days and repeats every 21–35 days. During this time, there may be weakness, mood swings, and heavy bleeding in the initial days.

It is very important to maintain hygiene during periods, so pads should be changed every 4–6 hours and the body should be kept clean. Taking rest, avoiding heavy work, and doing light exercise can be helpful. In case of pain, using a hot water bag and doing light stretching can provide relief.

Maintaining a healthy diet is important, and one should avoid junk food and stress. And remember, periods are not a disease.`,
    helplines: [
      { label: 'Vandrevala Foundation', number: '9999666555' }
    ],
    video: 'https://www.youtube.com/embed/iaUdkwlmulQ'
  },
  'community-support': {
    title: 'Community Support',
    text: 'Do you ever feel lonely or are you looking for a group where people understand your situation? Community Support is a platform where women can connect with each other, share their experiences, and provide emotional and practical support. Here, you will find a caring community that will listen to you, understand you, and stand by you in difficult times. Through group discussions, support sessions, and community activities, you can meet new people, boost your confidence, and grow in a positive environment. Whether you want guidance, want to share your story, or just want to be part of a supportive group — our community welcomes you!',
    helplines: [
      { label: 'Connecting Trust', number: '9922001122' }
    ],
    video: 'https://www.youtube.com/embed/sVXp2IXQxdE?si=mFy3wH3DHBFX3dQ1'
  },
  'educational-resources': {
    title: 'Educational Resources',
    text: `Education is the foundation for a brighter future. It empowers you to think critically, solve problems, and make informed decisions in life. Through education, you gain knowledge, develop new skills, and open doors to better career and personal growth opportunities. Whether you are a student, a professional, or someone looking to learn something new, education helps you become more confident and independent. Our Educational Resources section offers articles, guides, and learning materials on a variety of topics—such as health, career guidance, skill development, and self-improvement. Remember, learning is a lifelong journey, and every step you take brings you closer to your dreams. Invest in your education and unlock your true potential!`,
    helplines: [
      { label: 'Kiran Mental Health', number: '1800-599-0019' }
    ],
    video: 'https://www.youtube.com/embed/fxA-cRcpBXI?si=z5OYtR8cgJh0Z3RH'
  },
  'self-care-tools': {
    title: 'Self-Care Tools',
    text: 'Do you feel stress, fatigue, or emotional pressure in your daily life? The Self-Care Tools section provides you with simple and practical ways to take care of your mental and emotional well-being. Here, you will find easy-to-use tools and tips — such as relaxation exercises, mood tracking, breathing techniques, and daily self-care routines — that will help you stay calm, maintain a positive mindset, and better manage your health. Whether you are stressed due to a busy schedule or just want some peaceful time for yourself — these tools will guide you to take small daily steps so you can feel healthy, balanced, and confident!',
    helplines: [
      { label: 'iCall', number: '9152987821' }
    ],
    video: 'https://www.youtube.com/embed/FXkY8mkoG7g?si=hXKGBGX5Fn1i1Ezn'
  }
};

const Support = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const type = params.get('type');
  const content = supportContent[type] || supportContent['mental-health'];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col items-center py-8 px-2 relative">
      {/* Back to Services button in the absolute top-left corner */}
      <button
        onClick={() => navigate('/services')}
        className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full shadow transition-all fixed top-6 left-6 z-50"
        style={{ position: 'fixed', top: '1.5rem', left: '1.5rem', zIndex: 50 }}
      >
        ← Back to Services
      </button>
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-2">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 text-center w-full">{content.title}</h1>
        <blockquote className="border-l-4 border-rose-400 pl-4 italic text-slate-700 mb-6 text-center whitespace-pre-line text-lg font-medium max-w-2xl mx-auto w-full">{content.text}</blockquote>
        <div className="mb-8 w-full flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-lg flex items-center gap-2 text-slate-800 mb-2 justify-center text-center w-full"><span className="text-rose-600">&#128222;</span> Helpline Numbers</h2>
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            {content.helplines.map((h, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-3 flex flex-col sm:flex-row items-center justify-center border border-slate-200 w-full max-w-md mx-auto">
                <span className="font-semibold text-slate-800 text-center w-full">{h.label}: <span className="text-slate-900">{h.number}</span></span>
                <a href={`tel:${h.number}`} className="bg-green-100 text-green-700 rounded-full p-2 hover:bg-green-200 transition ml-0 sm:ml-2 mt-2 sm:mt-0" title="Call">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 w-full flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-xl flex items-center gap-2 text-rose-600 mb-4 justify-center text-center w-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0020 6.382V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1.382a2 2 0 00.447 1.342L9 10m6 0v4m0 0l-4.553 2.276A2 2 0 016 17.618V19a2 2 0 002 2h8a2 2 0 002-2v-1.382a2 2 0 00-.447-1.342L15 14zm0 0V10" /></svg> Helpful Video Resources</h2>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg flex justify-center items-center">
            <iframe
              width="100%"
              height="400"
              src={content.video}
              title="Support Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;