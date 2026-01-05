
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SimpleStepsStrip from './components/SimpleStepsStrip';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Safety from './components/Safety';
import Testimonial from './components/Testimonial';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import ConciergeModal from './components/ConciergeModal';
import MicroAffirmations from './components/MicroAffirmations';
import Recognition from './components/Recognition';
import Permission from './components/Permission';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConcierge, setShowConcierge] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleFormSubmitted = () => {
    setIsModalOpen(false);
    setShowConcierge(true);
  };

  return (
    <div className={`flex flex-col min-h-screen relative ${showConcierge ? 'overflow-hidden' : ''}`}>
      <Navbar onJoinClick={openModal} onLoginClick={openModal} />
      
      <main className="flex-grow">
        {/* Step 1: Recognition & Hero */}
        <Hero onCtaClick={openModal} />
        
        {/* Visual Simplicity Reassurance */}
        <SimpleStepsStrip onCtaClick={openModal} />
        
        <div className="reveal-on-scroll">
          <Recognition onCtaClick={openModal} />
        </div>
        
        {/* Step 2: Safety & Trust */}
        <div className="reveal-on-scroll">
          <Safety onCtaClick={openModal} />
        </div>

        <div className="reveal-on-scroll">
          <TrustBar onCtaClick={openModal} />
        </div>
        
        {/* Step 3: Visualization (How it works is re-framed as Outcome) */}
        <div className="reveal-on-scroll">
          <HowItWorks onCtaClick={openModal} />
        </div>
        
        {/* Step 4: Belonging */}
        <div className="reveal-on-scroll">
          <Testimonial onCtaClick={openModal} />
        </div>
        
        {/* Step 5: Permission */}
        <div className="reveal-on-scroll">
          <Permission onCtaClick={openModal} />
        </div>

        {/* Step 6: Final Action */}
        <div className="reveal-on-scroll">
          <FinalCTA onCtaClick={openModal} />
        </div>
      </main>

      <MicroAffirmations />
      <Footer onCtaClick={openModal} />
      
      {isModalOpen && (
        <SignupModal 
          onClose={closeModal} 
          onSuccess={handleFormSubmitted} 
        />
      )}
      {showConcierge && <ConciergeModal onClose={() => setShowConcierge(false)} />}
    </div>
  );
};

export default App;
