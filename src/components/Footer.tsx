import React from 'react';
import { Bus, Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Bus className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Nandighosh Bus
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner for comfortable and reliable bus travel across Odisha. 
              Connecting cities with comfort, safety, and punctuality since 2020.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mb-6">
              {[
                { icon: Facebook, color: 'hover:text-blue-400', label: 'Facebook' },
                { icon: Twitter, color: 'hover:text-cyan-400', label: 'Twitter' },
                { icon: Instagram, color: 'hover:text-pink-400', label: 'Instagram' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-white/10 p-3 rounded-full ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-white/20 group`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:animate-bounce" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-300">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Routes', href: '#routes' },
                { name: 'Why Choose Us', href: '#features' },
                { name: 'Contact', href: '#contact' },
                { name: 'Terms & Conditions', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Refund Policy', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-300">Contact Info</h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '+91 9876543210', color: 'text-green-400' },
                { icon: Mail, text: 'info@nandighoshbus.com', color: 'text-blue-400' },
                { icon: MapPin, text: 'Balasore, Odisha 756001', color: 'text-purple-400' }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                    <contact.icon className={`h-4 w-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 bg-red-500/20 border border-red-500/30 rounded-xl p-4">
              <h4 className="font-semibold text-red-300 mb-2">Emergency Contact</h4>
              <p className="text-red-200 text-sm">24/7 Support: +91 9876543210</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; 2024 Nandighosh Bus. Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>in Odisha</span>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}