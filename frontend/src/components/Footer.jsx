import React from 'react';

const Footer = () => (
  <footer className="w-full bg-slate-100 text-slate-600 py-6 text-center mt-12 border-t border-slate-200">
    <div className="text-sm">&copy; {new Date().getFullYear()} Peer Support. All rights reserved.</div>
  </footer>
);

export default Footer;
