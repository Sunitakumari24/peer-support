import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const ResourceCard = ({ title, desc, type, link, icon }) => {
  return (
    <a
      href={link || '#'}
      className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#FF5E14]">
          {icon || <FileText className="w-4 h-4" />}
          <span>{type}</span>
        </div>
        <h3 className="text-xl font-black text-[#0A1128] tracking-tight">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed italic">{desc}</p>
      </div>
      <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-[#FF5E14] transition-colors">
        Read More
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
};

export default ResourceCard;
