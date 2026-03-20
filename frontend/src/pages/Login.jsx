import React, { useState } from 'react';
import { 
  Eye, 
  EyeOff, 
  ChevronRight,
  Phone,
  MapPin,
  Truck
} from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForgotPassword = () => {
    const email = formData.email || "your registered email";
    alert(`Password reset link has been sent to ${email}. Please check your inbox.`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Error: Passwords do not match!");
      return;
    }
    alert(`Registration Successful!\nWelcome ${formData.fullName} to Deal Packers & Movers.`);
  };

  const handleSocialLogin = (platform) => {
    alert(`Connecting to ${platform}...`);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4 font-sans antialiased relative overflow-hidden select-none">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#E12D2D]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-slate-300 rounded-full blur-3xl"></div>
      </div>

      {/* Main Card - Original Neomorphic Style */}
      <div className="w-full max-w-md bg-[#F0F2F5] rounded-[3rem] shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff] p-10 md:p-14 relative z-10 border border-white/50 animate-in fade-in zoom-in duration-500">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tight uppercase">User Registration</h2>
          <div className="w-12 h-1 bg-[#E12D2D] mx-auto mt-2 mb-4 rounded-full"></div>
          <p className="text-slate-400 text-[11px] font-bold leading-relaxed tracking-wide">
            JOIN DEAL PACKERS & MOVERS <br/> TO MANAGE YOUR RELOCATION.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inputs with Inset Shadows */}
          <div className="relative group">
            <input 
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-6 py-4 bg-[#F0F2F5] rounded-2xl outline-none shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] focus:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all text-sm font-bold text-slate-600 placeholder:text-slate-300 border-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative group">
            <input 
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 bg-[#F0F2F5] rounded-2xl outline-none shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] focus:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all text-sm font-bold text-slate-600 placeholder:text-slate-300 border-none"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-6 py-4 bg-[#F0F2F5] rounded-2xl outline-none shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] focus:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all text-sm font-bold text-slate-600 placeholder:text-slate-300 border-none"
              onChange={handleChange}
              required
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#E12D2D] p-2 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-6 py-4 bg-[#F0F2F5] rounded-2xl outline-none shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] focus:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all text-sm font-bold text-slate-600 placeholder:text-slate-300 border-none"
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Forgot Password Link - Left Aligned */}
            <div className="flex justify-start px-2">
              <button 
                type="button"
                onClick={handleForgotPassword}
                className="text-[10px] font-black text-slate-400 hover:text-[#E12D2D] uppercase tracking-widest transition-colors cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Register Button - Clickable */}
          <button 
            type="submit"
            className="w-full bg-[#E12D2D] hover:bg-[#C21D1D] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[8px_8px_16px_rgba(225,45,45,0.2),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-all active:scale-[0.97] flex items-center justify-center space-x-2 mt-4 cursor-pointer"
          >
            <span>Register Account</span>
            <ChevronRight size={18} />
          </button>
        </form>

        {/* Social Options - Apple, Facebook, Google */}
        <div className="mt-12 text-center">
          <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] mb-6 italic">- Or Sign In With -</p>
          
          <div className="flex justify-center space-x-4">
            {/* Apple Button */}
            <button 
              onClick={() => handleSocialLogin('Apple')}
              className="flex items-center space-x-2 px-4 py-2 bg-[#F0F2F5] rounded-xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff] transition-all active:scale-95 group"
            >
               <img src="https://www.svgrepo.com/show/511330/apple-173.svg" className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" alt="apple" />
               <span className="text-[10px] font-bold text-slate-500">Apple Id</span>
            </button>

            {/* Facebook Button */}
            <button 
              onClick={() => handleSocialLogin('Facebook')}
              className="flex items-center space-x-2 px-4 py-2 bg-[#F0F2F5] rounded-xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff] transition-all active:scale-95 group"
            >
               <img src="https://www.svgrepo.com/show/448224/facebook.svg" className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" alt="fb" />
               <span className="text-[10px] font-bold text-slate-500">Facebook</span>
            </button>

            {/* Google Button */}
            <button 
              onClick={() => handleSocialLogin('Google')}
              className="flex items-center space-x-2 px-4 py-2 bg-[#F0F2F5] rounded-xl shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[2px_2px_5px_#bebebe,-2px_-2px_5px_#ffffff] transition-all active:scale-95 group"
            >
               <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="google" />
               <span className="text-[10px] font-bold text-slate-500">Google</span>
            </button>
          </div>
        </div>

        {/* Login Toggle */}
        <div className="mt-10 text-center">
          <p className="text-[10px] font-bold text-slate-400">
            ALREADY HAVE AN ACCOUNT? <button onClick={() => alert('Switching to Login...')} className="text-[#E12D2D] font-black ml-1 hover:underline cursor-pointer">LOGIN HERE</button>
          </p>
        </div>
      </div>

      {/* Footer Details */}
      <div className="absolute bottom-8 flex flex-col items-center space-y-3">
         <div className="flex items-center space-x-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">
            <button onClick={() => alert('Dialing...')} className="flex items-center hover:text-[#E12D2D] transition-colors"><Phone size={12} className="mr-1.5"/> +91 9674448002</button>
            <div className="w-\[1px\] h-3 bg-slate-300"></div>
            <button onClick={() => alert('Opening Location...')} className="flex items-center hover:text-[#E12D2D] transition-colors"><MapPin size={12} className="mr-1.5"/> PAN INDIA SERVICE</button>
         </div>
         <p className="text-slate-300 text-[8px] font-bold uppercase tracking-[0.4em] text-center">
           Deal Packers & Movers • Trusted Since 2005
         </p>
      </div>

    </div>
  );
};

export default Login;                                                                            