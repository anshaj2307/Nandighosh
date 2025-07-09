import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Routes from './components/Routes';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Routes />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;