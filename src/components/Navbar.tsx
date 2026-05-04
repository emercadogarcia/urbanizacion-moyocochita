'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 glass ${
        scrolled ? 'py-2 shadow-2xl' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-black text-blue-900 text-sm sm:text-base">
            M
          </div>
          <span className="font-extrabold text-sm sm:text-xl tracking-tighter text-blue-900 uppercase">
            Urbanizacion<br className="hidden sm:block" /> Moyocochita
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 sm:space-x-8 items-center text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900">
          <a href="#inicio" className="hover:text-yellow-500 transition">
            Inicio
          </a>
          <a href="#beneficios" className="hover:text-yellow-500 transition">
            Beneficios
          </a>
          <a href="#galeria" className="hover:text-yellow-500 transition">
            Lotes
          </a>
          <a
            href="https://wa.me/59164531013?text=Me%20interesa%20obtener%20información%20sobre%20los%20lotes" target="_blank" rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-blue-800 transition shadow-lg"
          >
            Contactar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#inicio"
              className="block text-blue-900 font-bold uppercase text-sm py-2 hover:text-yellow-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#beneficios"
              className="block text-blue-900 font-bold uppercase text-sm py-2 hover:text-yellow-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#galeria"
              className="block text-blue-900 font-bold uppercase text-sm py-2 hover:text-yellow-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lotes
            </a>
            <a
              href="https://wa.me/59164531013?text=Me%20interesa%20obtener%20información%20sobre%20los%20lotes" target="_blank" rel="noopener noreferrer"
              className="block bg-blue-900 text-white text-center font-bold uppercase text-sm py-3 rounded-full hover:bg-blue-800 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
