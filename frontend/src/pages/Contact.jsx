import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = ({ setPage = () => {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [fieldErrors, setFieldErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const EMAIL_RE = /^\S+@\S+\.\S+$/

  const handleSubmit = (e) => {
    e.preventDefault();
    setFieldErrors({})
    setSuccess('')
    // client-side validation
    const errs = {}
    if (!formData.name || formData.name.trim().length < 2) errs.name = 'Please enter your name'
    if (!formData.email || !EMAIL_RE.test(formData.email)) errs.email = 'Please enter a valid email'
    if (!formData.subject || formData.subject.trim().length < 3) errs.subject = 'Please enter a subject'
    if (!formData.message || formData.message.trim().length < 10) errs.message = 'Message should be at least 10 characters'
    if (Object.keys(errs).length) {
      setFieldErrors(errs)
      return
    }

    // try sending to backend if available, otherwise fall back to local success
    const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
    setLoading(true)
    fetch(`${BACKEND}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      if (!res.ok) {
        // server might not implement this endpoint — show fallback
        const text = await res.text().catch(() => '')
        throw new Error(text || res.statusText || 'Failed to send message')
      }
      return res.json().catch(() => ({}))
    }).then((data) => {
      setSuccess('Thank you — your message was sent. We will contact you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }).catch((err) => {
      // if /api/contact not available, still show success locally
      console.warn('Contact submit warning:', err)
      setSuccess('Thank you — your message was received (local).')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }).finally(() => setLoading(false))
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navbar is provided by the app-level shared Navbar; removed local nav to avoid duplicate */}

      {/* --- Hero Section --- */}
      <section className="relative h-[300px] flex flex-col items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg opacity-90 text-orange-500 font-medium">
            Hamein Khushi Hogi Aapki Help Karke
          </p>
        </div>
      </section>

      {/* --- Main Contact Content --- */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Form */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-500 mb-8 max-w-lg">
            Hum aapki help ke liye hamesha taiyar hain. Neeche diye gaye form ko bharein aur hamari team aapse jald hi sampark karegi.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold uppercase text-gray-500 tracking-wider">Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                placeholder="Apna Naam..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
                onChange={handleChange}
              />
              {fieldErrors.name && <div className="text-xs text-red-500 mt-1">{fieldErrors.name}</div>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold uppercase text-gray-500 tracking-wider">Email</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                placeholder="example@yourmail.com"
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
                onChange={handleChange}
              />
              {fieldErrors.email && <div className="text-xs text-red-500 mt-1">{fieldErrors.email}</div>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold uppercase text-gray-500 tracking-wider">Subject</label>
              <input 
                type="text" 
                id="subject"
                value={formData.subject}
                placeholder="Kis Baare Mein..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                required
                onChange={handleChange}
              />
              {fieldErrors.subject && <div className="text-xs text-red-500 mt-1">{fieldErrors.subject}</div>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold uppercase text-gray-500 tracking-wider">Message</label>
              <textarea 
                id="message"
                rows="4"
                value={formData.message}
                placeholder="Apna Message Likhein..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
                required
                onChange={handleChange}
              ></textarea>
              {fieldErrors.message && <div className="text-xs text-red-500 mt-1">{fieldErrors.message}</div>}
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full sm:w-auto px-12 py-4 bg-orange-600 text-white font-bold rounded shadow-lg hover:bg-orange-700 hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Sending...' : <>Send Now <Send size={18} /></>}
              </button>
              {success && <div className="text-green-600 font-medium">{success}</div>}
            </div>
          </form>
        </div>

        {/* Right Side: Info Cards */}
        <div className="flex flex-col gap-6">
          {/* Phone Card */}
          <div className="bg-gray-50 p-8 rounded shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-white p-4 rounded-full text-orange-600 shadow-sm mb-4 border border-gray-100">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Phone Number</h3>
            <p className="text-gray-600 font-medium">207-8767-452</p>
          </div>

          {/* Email Card */}
          <div className="bg-gray-50 p-8 rounded shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-white p-4 rounded-full text-orange-600 shadow-sm mb-4 border border-gray-100">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Email Address</h3>
            <p className="text-gray-600 font-medium">support@yoursite.com</p>
          </div>

          {/* Location Card */}
          <div className="bg-gray-50 p-8 rounded shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-white p-4 rounded-full text-orange-600 shadow-sm mb-4 border border-gray-100">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Our Location</h3>
            <p className="text-gray-600 font-medium">2443 Oak Ridge, Omaha, QA 45065</p>
          </div>
        </div>
      </main>

      {/* --- Map Section --- */}
      <section className="w-full h-[450px] bg-gray-200 mt-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.150381922348!2d-77.03847382415174!3d38.8976763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b725!2sThe%20White%20House!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-700"
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
      
      {/* Footer is rendered at the app level via `components/Footer.jsx` */}
    </div>
  );
};

export default ContactPage;
