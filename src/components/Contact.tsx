import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Download, Star, Send, User, Calendar, Route } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    route: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', phone: '', route: '', message: '' });
    
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold animate-bounce">
              💬 Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help you plan your perfect journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', details: ['+91 9876543210', '+91 9876543211'], color: 'from-green-500 to-emerald-500' },
                { icon: Mail, title: 'Email', details: ['info@nandighoshbus.com', 'booking@nandighoshbus.com'], color: 'from-blue-500 to-cyan-500' },
                { icon: MapPin, title: 'Address', details: ['123 Bus Terminal Road', 'Balasore, Odisha 756001'], color: 'from-purple-500 to-pink-500' }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`bg-gradient-to-r ${contact.color} p-4 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {contact.title}
                    </h4>
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Chat on WhatsApp</h4>
                  <p className="text-green-100">Get instant support 24/7</p>
                </div>
                <div className="ml-auto">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl">💬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                      activeInput === 'name' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setActiveInput('name')}
                      onBlur={() => setActiveInput(null)}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        activeInput === 'name' 
                          ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                      activeInput === 'phone' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setActiveInput('phone')}
                      onBlur={() => setActiveInput(null)}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                        activeInput === 'phone' 
                          ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Route Select */}
                <div className="relative">
                  <label htmlFor="route" className="block text-sm font-semibold text-gray-700 mb-2">
                    Route Interest
                  </label>
                  <div className="relative">
                    <Route className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                      activeInput === 'route' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <select
                      id="route"
                      name="route"
                      value={formData.route}
                      onChange={handleInputChange}
                      onFocus={() => setActiveInput('route')}
                      onBlur={() => setActiveInput(null)}
                      className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none appearance-none ${
                        activeInput === 'route' 
                          ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    >
                      <option value="">Select a route</option>
                      <option value="balasore-sambalpur">Balasore to Sambalpur</option>
                      <option value="balasore-jamshedpur">Balasore to Jamshedpur</option>
                      <option value="balasore-berhampur">Balasore to Berhampur</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setActiveInput('message')}
                    onBlur={() => setActiveInput(null)}
                    rows={4}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 focus:outline-none resize-none ${
                      activeInput === 'message' 
                        ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Tell us about your travel requirements"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : submitSuccess
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitSuccess ? (
                    <>
                      <span>✅ Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-6xl animate-bounce">📱</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Download Our Mobile App</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Book tickets, track your bus, and manage your journey - all from your mobile device with our award-winning app
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3">
                <Download className="h-6 w-6 group-hover:animate-bounce" />
                <span>Download for Android</span>
              </button>
              <button className="group bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-3">
                <Download className="h-6 w-6 group-hover:animate-bounce" />
                <span>Download for iOS</span>
              </button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-blue-200">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <Star className="h-5 w-5 fill-current text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">4.8 Rating</span>
              </div>
              <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
              <div className="font-semibold">10K+ Downloads</div>
              <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
              <div className="font-semibold">Featured App</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}