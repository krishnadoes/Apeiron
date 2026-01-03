import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const links = [
    { name: "How We Work", href: "/Howwework" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "/Contact" },
  ];
  const ctaText = "Start Your Project";

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Dim background when mobile menu open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Top nav bar */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          bg-gradient-to-r bg-black backdrop-blur-md border-t-2 
          transition-all duration-500 rounded-b-3xl 
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link
              to={"/"}
              className="flex items-center space-x-2 text-xl sm:text-2xl font-extrabold text-white hover:text-blue-400 transition-colors"
            >
              <TrendingUp size={26} className="text-blue-400" />
              <span>APEIRON</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-10">
              {links.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-white hover:text-blue-400 transition duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="/HowWeWork"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-500/40 hover:bg-blue-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              {ctaText}
              <ArrowRight size={18} className="ml-2" />
            </a>

            {/* Mobile burger */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-slate-100 hover:text-blue-400 focus:outline-none transition-transform duration-200"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown (separate fixed panel, no layout shift) */}
      <div
        className={`
          md:hidden fixed top-16 sm:top-20 left-0 right-0 z-50
          transform transition-all duration-250 origin-top
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-lg">
          <div className="pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block px-5 py-3 text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-blue-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="block mx-5 mt-3 mb-2 px-4 py-2.5 text-center bg-blue-500 text-white text-sm font-semibold rounded-full hover:bg-blue-400 transition-colors duration-300"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;