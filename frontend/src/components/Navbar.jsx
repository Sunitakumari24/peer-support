import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24" style={{minWidth:'20px'}}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);

const ImportantNote = () => (
  <div className="w-full bg-[#222] text-center py-2 text-[15px] font-bold text-rose-100 border-b border-black flex items-center justify-center gap-2">
    <WarningIcon />
    <span className="text-rose-100">
      Important note :- Keep your <b>*cash, jewellery, mobile phones, and mobile accessories*</b> in your custody we are not responsible during shifting
    </span>
    <WarningIcon />
  </div>
);


const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Resources', to: '/resources' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <>
      <ImportantNote />
      <nav className="sticky top-0 z-50 flex h-auto flex-col items-center justify-between gap-2 border-b border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm sm:h-18.5 sm:flex-row sm:px-[6vw] sm:py-0">
        <div className="text-xl font-extrabold tracking-wide text-rose-600">PEER SUPPORT</div>
        <ul className="flex flex-wrap items-center justify-center gap-4 font-bold sm:gap-8" style={{ fontSize: '1rem' }}>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={
                  (location.pathname === link.to
                    ? 'text-rose-600 border-b-2 border-rose-600 pb-0.5 font-bold'
                    : 'text-slate-800 font-bold hover:text-rose-600 transition-colors')
                  + ' text-base md:text-base lg:text-base xl:text-base'
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
