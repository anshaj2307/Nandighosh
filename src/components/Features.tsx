import React, { useState, useEffect } from 'react';
import { Snowflake, Smartphone, Clock, Sparkles, Wifi, Shield, Coffee, Star, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Snowflake,
    title: 'AC Sleeper Coaches',
    description: 'Travel in comfort with our fully air-conditioned sleeper coaches designed for long-distance journeys.',
    color: 'from-blue-500 to-cyan-500',
    stats: '18°C Perfect Temperature'
  },
  {
    icon: Smartphone,
    title: 'Smart Booking',
    description: 'Book your tickets instantly through our AI-powered platform with real-time seat selection.',
    color: 'from-purple-500 to-pink-500',
    stats: '30 Sec Average Booking'
  },
  {
    icon: Clock,
    title: 'Timely Departure',
    description: 'We pride ourselves on punctuality. Our buses depart and arrive on time, every time.',
    color: 'from-green-500 to-emerald-500',
    stats: '99.2% On-Time Record'
  },
  {
    icon: Sparkles,
    title: 'Premium Hygiene',
    description: 'Sanitized interiors and well-maintained restroom facilities for your comfort during the journey.',
    color: 'from-orange-500 to-red-500',
    stats: 'Cleaned Every 2 Hours'
  }
];

const additionalFeatures = [
  { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout your journey' },
  { icon: Shield, title: 'GPS Tracking', description: 'Real-time location tracking for safety' },
  { icon: Coffee, title: 'Refreshments', description: 'Complimentary snacks and beverages' },
  { icon: Star, title: '24/7 Support', description: 'Round-the-clock customer assistance' }
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedStats(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-2 rounded-full text-sm font-semibold animate-bounce">
              ✨ Premium Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Nandighosh?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of bus travel with cutting-edge technology and unmatched comfort
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                activeFeature === index ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                {activeFeature === index && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl opacity-50 animate-pulse"></div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Stats */}
                <div className="bg-white/5 rounded-lg p-3 group-hover:bg-white/10 transition-all duration-300">
                  <div className="text-sm font-semibold text-cyan-400">{feature.stats}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Interactive Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: '24/7', label: 'Customer Support', icon: '🎧' },
            { number: 'GPS', label: 'Live Tracking', icon: '📍' },
            { number: 'Safe', label: 'Secure Journey', icon: '🛡️' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-500 transform hover:scale-105 hover:bg-white/10 cursor-pointer ${
                animatedStats ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Carousel */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            More Reasons to Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex items-center space-x-4 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}