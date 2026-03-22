import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const supportContent = {
  'mental-health': {
    title: 'Mental Health Support',
    text: '"Mental health utni hi zaruri hai jitni physical health. Kabhi-kabhi stress, anxiety, ya depression ki wajah se hum akela ya pareshan mehsoos kar sakte hain. Is page ka purpose hai aapko sahi information, support, aur guidance dena. Agar aapko help ki zarurat ho, to aap bina hesitation ke kisi trusted insaan ya professional se baat kar sakte hain. Aapki feelings important hain aur aap akela nahi hain.!"',
    helplines: [
      { label: 'NIMHANS', number: '080-46110007' },
      { label: 'Kiran Mental Health', number: '1800-599-0019' }
    ],
    video: 'https://www.youtube.com/embed/wM28GqGzWSM'
  },
  'emotional-support': {
    title: 'Emotional Support',
    text: '"Kabhi-kabhi life me stress, tension, ya emotional problems ki wajah se hum akela mehsoos kar sakte hain. Hamara Emotional Support service ek safe aur caring space provide karta hai jahan women apni feelings share kar sakti hain aur support paa sakti hain. Hum bina judgment ke sunte hain aur aapko strong aur confident banne me madad karte hain.!"',
    helplines: [
      { label: 'Snehi', number: '91-22-2772 6771' },
      { label: 'iCall', number: '9152987821' }
    ],
    video: 'https://www.youtube.com/embed/TjK0AA28U10'
  },
  'Period Support': {
    title: 'Period Support',
    text: '"Period ek natural process hai jo ladkiyon aur mahilaon me har mahine hota hai, jisme uterus ki lining blood ke roop me body se bahar nikalti hai Ye aam taur par 3–7 din tak chalta hai aur 21–35 din me repeat hota hai Is dauran weakness, mood swings aur starting days me heavy bleeding ho sakti hai Period ke time safai ka dhyan rakhna bahut zaruri hai, isliye har 4–6 ghante me pad change karna chahiye aur body clean rakhni chahiye Aaram karna, heavy kaam avoid karna aur halka exercise karna helpful hota hai Dard hone par hot water bag aur light stretching se relief milta hai Healthy diet lena zaruri hai, junk food aur stress se bachna chahiye, aur yaad rakhein period koi bimari nahi hai.!"',
    helplines: [
      { label: 'Vandrevala Foundation', number: '9999666555' }
    ],
    video: 'https://www.youtube.com/embed/iaUdkwlmulQ'
  },
  'community-support': {
    title: 'Community Support',
    text: '"Kya aap kabhi akela mehsoos karte hain ya kisi aise group ki talash me hain jahan log aapki situation ko samjhein? Community Support ek aisa platform hai jahan women ek dusre se connect kar sakti hain, apne experiences share kar sakti hain, aur ek dusre ko emotional aur practical support de sakti hain Yahan aapko ek caring community milegi jo aapko sunegi, samjhegi, aur mushkil waqt me aapke saath khadi rahegi. Group discussions, support sessions, aur community activities ke through aap naye logon se mil sakte hain, apna confidence badha sakte hain, aur positive environment me grow kar sakte hain Chahe aap guidance chahte ho, apni story share karna chahte ho, ya sirf kisi supportive group ka hissa banna chahte ho — hamari community aapko welcome karti hai.!"',
    helplines: [
      { label: 'Connecting Trust', number: '9922001122' }
    ],
    video: 'https://www.youtube.com/embed/sVXp2IXQxdE?si=mFy3wH3DHBFX3dQ1'
  },
  'educational-resources': {
    title: 'Educational Resources',
    text: '"Kya aap apni knowledge badhana chahte hain aur life me better opportunities paana chahte hain? Educational Resources section aapko useful information, learning materials, aur practical guidance provide karta hai jo aapki personal aur professional growth me madad karega Yahan aapko different topics par easy-to-understand articles, guides, aur learning resources milenge — jaise health awareness, career guidance, skill development, aur self-improvement. Ye resources aapko naye skills seekhne, apne goals achieve karne, aur apne future ko strong banane me support karenge Chahe aap study me help chahte ho, career ke liye guidance dhoond rahe ho, ya apni daily life ko better banana chahte ho — yahan aapko sahi information aur tools milenge jo aapko confident aur independent banayenge.!"',
    helplines: [
      { label: 'Kiran Mental Health', number: '1800-599-0019' }
    ],
    video: 'https://www.youtube.com/embed/fxA-cRcpBXI?si=z5OYtR8cgJh0Z3RH'
  },
  'self-care-tools': {
    title: 'Self-Care Tools',
    text: '" Kya aap apni daily life me stress, thakan, ya emotional pressure feel karte hain? Self-Care Tools section aapko simple aur practical tarike provide karta hai jisse aap apni mental aur emotional well-being ka khayal rakh sakte hain Yahan aapko easy-to-use tools aur tips milenge — jaise relaxation exercises, mood tracking, breathing techniques, aur daily self-care routines — jo aapko calm rehne, positive soch banaye rakhne, aur apni health ko better manage karne me madad karengeChahe aap busy schedule ki wajah se stressed ho, ya apne liye thoda peaceful time chahte ho — ye tools aapko small daily steps lene me guide karenge jisse aap khud ko healthy, balanced, aur confident feel kar sakein.!"',
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
