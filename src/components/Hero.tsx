import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Play, Users, Award, Clock, Bus } from 'lucide-react';

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({ routes: 0, customers: 0, performance: 0 });

  const stats = [
    { icon: MapPin, value: 50, suffix: '+', label: 'Routes Available', color: 'text-blue-600' },
    { icon: Users, value: 10000, suffix: '+', label: 'Happy Customers', color: 'text-green-600' },
    { icon: Award, value: 99, suffix: '%', label: 'On-Time Performance', color: 'text-orange-600' }
  ];

  // Animated counter effect
  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setAnimatedNumbers({
          routes: Math.floor(50 * progress),
          customers: Math.floor(10000 * progress),
          performance: Math.floor(99 * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setAnimatedNumbers({ routes: 50, customers: 10000, performance: 99 });
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateNumbers, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Rotating stats highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Floating Bus Animation */}
      <div className="absolute top-1/4 right-10 opacity-20">
        <div className="animate-bounce" style={{ animationDuration: '3s' }}>
          <Bus className="h-24 w-24 text-white transform rotate-12" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Animated Logo and Brand */}
          <div className="flex justify-center items-center space-x-4 mb-8 group">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                <MapPin className="h-10 w-10 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Nandighosh
              </span>
              <br />
              <span className="text-orange-400">Bus</span>
            </h1>
          </div>

          {/* Animated Tagline */}
          <div className="mb-8 overflow-hidden">
            <p className="text-2xl md:text-4xl text-blue-100 font-light animate-slide-up" style={{ animationDelay: '0.5s' }}>
              Connecting Odisha,
              <span className="text-orange-300 font-semibold"> Comfortably</span>
            </p>
          </div>

          {/* Interactive Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
              Experience the future of bus travel with our premium fleet, cutting-edge technology, 
              and unmatched comfort. Your journey matters to us.
            </p>
          </div>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3 animate-bounce-in"
              style={{ animationDelay: '1.5s' }}
              href="routes"
            >
              <span>Book Your Seat</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
            </a>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20 inline-flex items-center space-x-3 animate-bounce-in" style={{ animationDelay: '1.7s' }}>
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Interactive Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 transform hover:scale-105 hover:bg-white/20 cursor-pointer ${
                  currentStat === index ? 'ring-2 ring-orange-400 scale-105' : ''
                }`}
                style={{ animationDelay: `${2 + index * 0.2}s` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 ${
                    currentStat === index ? 'animate-pulse' : ''
                  }`}>
                    <stat.icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                    {index === 0 && `${animatedNumbers.routes}${stat.suffix}`}
                    {index === 1 && `${animatedNumbers.customers.toLocaleString()}${stat.suffix}`}
                    {index === 2 && `${animatedNumbers.performance}${stat.suffix}`}
                  </div>
                  <div className="text-blue-200 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 to-orange-400/0 group-hover:from-orange-400/10 group-hover:to-orange-400/20 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}