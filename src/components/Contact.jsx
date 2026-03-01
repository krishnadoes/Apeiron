import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Facebook, Phone, Send } from 'lucide-react';

// The main Contact Page component
const Contact = () => {
  // Simple state for handling form input (demonstrates React way)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to an API here.
    console.log('Form Submitted:', formData);
    setStatusMessage('Thank you for your message! We will be in touch shortly.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };
  
  // Use a useEffect to apply the entrance animations after component mounts
  // Note: We use Tailwind classes combined with custom CSS animation utility classes

  return (
    <>
      {/* This style block contains the custom CSS for the blob animations
        and the entrance animations, as complex keyframes are best defined
        in pure CSS, even within a single React component file.
      */}
      <style>
        {`
          /* Custom CSS for Animated Blobs */
          @keyframes floatBlob {
              0% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(40px, -40px) scale(1.05); }
              100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob-float {
              animation: floatBlob 15s infinite ease-in-out alternate;
          }

          /* Entrance Animations from the original CSS (for a classy slide-in) */
          @keyframes slideLeft {
            from { transform: translateX(-60px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideRight {
            from { transform: translateX(60px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideDown {
            from { transform: translateY(-40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .slide-left { animation: slideLeft 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; }
          .slide-right { animation: slideRight 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; }
          .slide-down { animation: slideDown 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; }
          .fade-in { animation: fadeIn 2s ease forwards 0.5s; opacity: 0; }
        `}
      </style>

      {/* Background Animated Blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute w-[400px] h-[400px] rounded-full filter blur-[150px] opacity-30 bg-indigo-600 top-[-100px] left-[-120px] animate-blob-float"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full filter blur-[150px] opacity-30 bg-pink-500 right-[-120px] bottom-[-100px] animate-blob-float delay-[3s]"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full filter blur-[150px] opacity-30 bg-cyan-400 left-[40%] top-[50%] animate-blob-float delay-[6s]"></div>
      </div>

      {/* MAIN CONTACT SECTION */}
      <section className="min-h-screen pt-32 pb-16 px-4 sm:px-8 lg:px-16 text-white bg-slate-950 font-inter">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 slide-down">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 mb-12 fade-in max-w-2xl mx-auto">
            Have questions about our exhibition design or need a custom stall quote? Contact us anytime — We are here to help you build an unforgettable presence.
          </p>

          {/* Status Message */}
          {statusMessage && (
            <div className="bg-green-600/30 text-green-200 p-4 rounded-lg mb-8 max-w-4xl mx-auto border border-green-500/50 fade-in">
              {statusMessage}
            </div>
          )}

          {/* CONTACT CONTAINER (Responsive Flex/Grid) */}
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 mt-8 max-w-6xl mx-auto">

            {/* CONTACT LEFT (INFO) */}
            <div className="w-full lg:w-5/12 p-8 rounded-xl shadow-2xl glass slide-left" style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(70, 130, 180, 0.2)'
            }}>
              <h2 className="text-3xl font-bold mb-4 text-blue-100">Reach Us</h2>
              <p className="mb-8 text-blue-200">
                We organize premium exhibition design and fabrication services for product brands, service organizations, startups, and major events worldwide.
              </p>

              {/* Info Items */}
              <div className="space-y-6">
                <InfoItem icon={Mail} link="mailto:hello@exhibitiondesignco.com" text="hello@exhibitiondesignco.com" />
                <InfoItem icon={Instagram} link="https://instagram.com/exhibitpro" text="Instagram Page" />
                <InfoItem icon={Facebook} link="https://facebook.com/exhibitpro" text="Facebook Page" />
                <InfoItem icon={Phone} text="+91 98765 43210" />
              </div>

            </div>

            {/* CONTACT RIGHT (FORM) */}
            <form onSubmit={handleSubmit} className="w-full lg:w-7/12 flex flex-col p-8 rounded-xl shadow-2xl glass slide-right" style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(70, 130, 180, 0.2)'
            }}>
              <h2 className="text-3xl font-bold mb-6 text-blue-100">Start Your Project</h2>

              <FormInput 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                type="text" 
              />
              <FormInput 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                type="email" 
              />
              <FormTextarea 
                name="message" 
                placeholder="Tell us about your exhibition needs (e.g., location, size, date)" 
                value={formData.message} 
                onChange={handleChange} 
              />

              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 mt-4 px-6 py-3  bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xl rounded-full shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                disabled={!formData.name || !formData.email || !formData.message}
              >
                Send Message <Send size={20} />
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

// Helper component for Contact Info Item
const InfoItem = ({ icon: Icon, link, text }) => (
  <div className="flex items-center text-lg">
    <Icon size={24} className="mr-4 text-blue-400 shrink-0" />
    {link ? (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-blue-300 transition duration-200 underline-offset-4 hover:underline"
      >
        {text}
      </a>
    ) : (
      <span className="text-white">{text}</span>
    )}
  </div>
);

// Helper component for Form Input
const FormInput = ({ name, placeholder, value, onChange, type }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
    className="bg-white/10 border-2 border-transparent focus:border-blue-500/50 p-4 rounded-xl mb-4 text-white text-base transition duration-300 placeholder-blue-200/70 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
  />
);

// Helper component for Textarea
const FormTextarea = ({ name, placeholder, value, onChange }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
    rows={6}
    className="bg-white/10 border-2 border-transparent focus:border-blue-500/50 p-4 rounded-xl mb-6 text-white text-base transition duration-300 resize-none placeholder-blue-200/70 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
  />
);

export default Contact;
