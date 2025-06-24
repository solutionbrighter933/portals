import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import Location from './components/Location';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import CallToAction from './components/CallToAction';
import MapSection from './components/MapSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <Overview />
        <Features />
        <Location />
        <Gallery />
        <VideoSection />
        <CallToAction />
        <MapSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;