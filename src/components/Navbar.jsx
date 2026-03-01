import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const links = [
    { name: "How We Work", to: "/Howwework" },
    { name: "Our Services", to: "/services" }, 
    { name: "Contact Us", to: "/Contact" },   // ✅ FIXED
  ];

  const ctaText = "Start Your Project";

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Dim background */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Top Navbar */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          bg-white backdrop-blur-md border-t-2
          transition-all duration-500 rounded-b-3xl
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        `}
        
   
    style={{
      backgroundImage: "url('/navbg.jpg')",
      // filter: "blur(px)",
      //     opacity: 1.0,

    }}

      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo */}
             <Link to="/" className="flex items-center">
              <img
                src="/logo2.png"
                alt="Apeiron Exhibition"
                className="h-12 sm:h-18 w-auto"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-md uppercase font-bold text-black hover:text-blue-400 transition relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition origin-left rounded-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
             to={"https://wa.me/7498155141"} 
             target="_blank"
  rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-green-500 text-white text-md font-semibold rounded-full shadow-lg shadow-blue-500/40 hover:bg-blue-400 transition hover:-translate-y-0.5"
            >
              WhatsApp
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-black hover:text-blue-400 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed top-16 sm:top-20 left-0 right-0 z-50
          transition-all duration-300
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="bg-transparent backdrop-blur-xl border-b border-slate-800 shadow-lg">
          <div className="pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={closeMenu}
                className="block px-5 py-3 text-sm font-medium text-black hover:bg-slate-900 hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to={"https://wa.me/7498155141"}
              target="_blank"
  rel="noopener noreferrer"
              onClick={closeMenu}
              className="block mx-5 mt-3 mb-2 px-4 py-2.5 text-center bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-blue-400 transition"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
