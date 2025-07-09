import React, { useState, useEffect } from 'react';
import { Bus, Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Animated Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Bus className={`h-8 w-8 transition-all duration-300 group-hover:scale-110 ${
                scrolled ? 'text-blue-700' : 'text-white'
              }`} />
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-300"></div>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Nandighosh Bus
            </span>
          </div>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden md:flex space-x-8">
            {['Routes', 'Features', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative py-2 transition-all duration-300 hover:scale-105 ${
                  scrolled ? 'text-gray-700 hover:text-blue-700' : 'text-white hover:text-blue-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Emergency Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                scrolled 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Emergency</span>
            </a>
          </div>

          {/* Animated Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-all duration-300 hover:scale-110 ${
              scrolled 
                ? 'text-gray-700 hover:text-blue-700 hover:bg-gray-100' 
                : 'text-white hover:text-blue-200 hover:bg-white/10'
            }`}
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
              <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
            </div>
          </button>
        </div>

        {/* Animated Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {['Routes', 'Why Choose Us', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}