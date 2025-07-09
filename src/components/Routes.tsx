import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, MapPin, Star, Zap, Wifi, Coffee, Shield } from 'lucide-react';

const routes = [
  {
    from: 'Balasore',
    to: 'Sambalpur',
    duration: '8h 30m',
    price: '₹650',
    originalPrice: '₹750',
    rating: 4.8,
    reviews: 234,
    features: ['AC Sleeper', 'GPS Tracking', 'Free Wi-Fi', 'Entertainment'],
    color: 'from-blue-500 to-blue-600',
    popular: true
  },
  {
    from: 'Balasore',
    to: 'Jamshedpur',
    duration: '5h 45m',
    price: '₹450',
    originalPrice: '₹520',
    rating: 4.9,
    reviews: 189,
    features: ['AC Seater', 'Charging Port', 'Snacks', 'Safety'],
    color: 'from-green-500 to-green-600',
    popular: false
  },
  {
    from: 'Balasore',
    to: 'Berhampur',
    duration: '6h 15m',
    price: '₹520',
    originalPrice: '₹600',
    rating: 4.7,
    reviews: 156,
    features: ['AC Sleeper', 'Entertainment', 'Blanket', 'Meals'],
    color: 'from-purple-500 to-purple-600',
    popular: false
  }
];

const featureIcons = {
  'AC Sleeper': Zap,
  'GPS Tracking': MapPin,
  'Free Wi-Fi': Wifi,
  'Entertainment': Coffee,
  'AC Seater': Zap,
  'Charging Port': Zap,
  'Snacks': Coffee,
  'Safety': Shield,
  'Blanket': Coffee,
  'Meals': Coffee
};

export default function Routes() {
  const [hoveredRoute, setHoveredRoute] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
  const [animatedPrices, setAnimatedPrices] = useState<number[]>([]);

  useEffect(() => {
    // Animate prices on load
    const prices = routes.map(route => parseInt(route.price.replace('₹', '')));
    let step = 0;
    const steps = 30;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedPrices(prices.map(price => Math.floor(price * progress)));
      
      if (step >= steps) {
        clearInterval(interval);
        setAnimatedPrices(prices);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="routes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              🚌 Popular Routes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Experience premium comfort with our carefully curated routes across Odisha
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                selectedRoute === index ? 'ring-4 ring-blue-400 scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredRoute(index)}
              onMouseLeave={() => setHoveredRoute(null)}
              onClick={() => setSelectedRoute(selectedRoute === index ? null : index)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {route.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    🔥 POPULAR
                  </span>
                </div>
              )}

              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${route.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
                <div className="relative z-10">
                  {/* Route Path */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <span className="font-bold text-lg">{route.from}</span>
                    </div>
                    <div className="flex-1 mx-4 relative">
                      <div className="h-0.5 bg-white/50 relative">
                        <div className={`absolute inset-0 bg-white transform origin-left transition-all duration-1000 ${
                          hoveredRoute === index ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                      </div>
                      <ArrowRight className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 transition-all duration-300 ${
                        hoveredRoute === index ? 'translate-x-2' : ''
                      }`} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-lg">{route.to}</span>
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>

                  {/* Duration and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">{route.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current text-yellow-300" />
                      <span className="text-sm font-medium">{route.rating}</span>
                      <span className="text-xs opacity-75">({route.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    {route.features.map((feature, idx) => {
                      const IconComponent = featureIcons[feature] || Coffee;
                      return (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2 group-hover:bg-blue-50 transition-colors duration-300"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          <IconComponent className="h-4 w-4 text-blue-600" />
                          <span className="text-xs font-medium text-gray-700">{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{animatedPrices[index] || route.price.replace('₹', '')}
                      </span>
                      <span className="text-sm text-gray-500 line-through">{route.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      Save ₹{parseInt(route.originalPrice.replace('₹', '')) - parseInt(route.price.replace('₹', ''))}
                    </div>
                  </div>
                  
                  <button className={`bg-gradient-to-r ${route.color} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl`}>
                    <span className="group-hover:hidden">Book Now</span>
                    <span className="hidden group-hover:inline-flex items-center space-x-1">
                      <span>Let's Go</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${route.color} opacity-0 group-hover:opacity-5 transition-all duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Interactive Route Map Teaser */}
        <div className="mt-16 text-center">
          <button className="group bg-white border-2 border-blue-200 hover:border-blue-400 rounded-2xl px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-blue-600 group-hover:animate-bounce" />
              <span className="text-lg font-semibold text-gray-900">View Interactive Route Map</span>
              <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}