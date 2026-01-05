
import React from 'react';

const HowItWorks: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick }) => {
  const steps = [
    { 
      icon: 'edit_note', 
      title: 'Create a profile (2 minutes)', 
      text: 'We make it simple to share what you love doing and what kind of companionship you’re looking for.' 
    },
    { 
      icon: 'recommend', 
      title: 'Browse verified seniors', 
      text: 'View clear, large photos of people your age in your local area. No bots, no scammers, just real neighbors.' 
    },
    { 
      icon: 'volunteer_activism', 
      title: 'Say hello when ready', 
      text: 'Start with a simple "hello" on your own terms. Our safe messaging system keeps your personal details private.' 
    }
  ];

  return (
    <section id="how-it-works" className="w-full bg-white py-20 lg:py-32 border-y border-primary/5">
      <div className="w-full max-w-[1280px] px-8 md:px-12 mx-auto">
        <div className="text-center mb-16 lg:mb-24 space-y-4">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Philosophy</span>
          <h2 className="font-serif text-text-main text-4xl md:text-5xl font-black tracking-tight">Companionship made simple.</h2>
          <p className="text-text-sub text-xl max-w-2xl mx-auto">Designed to feel like meeting a friend at a local coffee shop.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="group flex flex-col items-center lg:items-start text-center lg:text-left transition-all">
              <div className="bg-heritage w-20 h-20 rounded-3xl flex items-center justify-center text-primary mb-8 shadow-xl shadow-primary/5 border border-primary/5 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>{step.icon}</span>
              </div>
              <h3 className="font-serif text-text-main text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-text-sub text-lg leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        {/* SOFT CTA STRIP */}
        <div className="flex flex-col items-center gap-4 py-12 border-t border-heritage">
          <button 
            onClick={onCtaClick}
            className="h-16 px-10 rounded-full border-2 border-primary text-primary font-black text-xl hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            See Who’s Waiting Near Me
          </button>
          <p className="text-sm font-black text-text-sub/70 uppercase tracking-[0.2em]">
            Free • Verified • Ages 65–85
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
