import React from 'react';
import { Users, ArrowRight, Lock } from 'lucide-react';

const GroupCard = ({ name, members, desc, isPrivate, onJoin }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-[#FF5E14]/10 rounded-xl flex items-center justify-center text-[#FF5E14]">
            <Users className="w-6 h-6" />
          </div>
          {isPrivate && (
            <div className="flex items-center space-x-1 text-xs font-bold text-slate-400">
              <Lock className="w-3 h-3" />
              <span>Private</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-black text-[#0A1128]">{name}</h3>
        <p className="text-slate-500 text-sm italic leading-relaxed">{desc}</p>
        <p className="text-xs font-bold text-[#FF5E14]">{members} members</p>
      </div>
      <button
        onClick={onJoin}
        className="mt-8 w-full py-3 bg-[#0A1128] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#FF5E14] transition-all flex items-center justify-center"
      >
        Join Group <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};

export default GroupCard;
