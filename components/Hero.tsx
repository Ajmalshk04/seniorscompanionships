
import React, { useState, useEffect } from 'react';
import LivingMatches from './LivingMatches';

interface HeroProps {
  onCtaClick: () => void;
}

const locations = [
  'A 68-year-old from Texas joined today',
  'New members today from Florida, Ohio, Arizona',
  'A 72-year-old from California just joined',
  'New connections forming in New York and Illinois'
];

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [locIndex, setLocIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocIndex((prev) => (prev + 1) % locations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(26,66,187,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="w-full max-w-[1280px] px-6 md:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="flex flex-col gap-8 flex-1 text-center lg:text-left z-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/5 rounded-full border border-primary/10">
                <p className="text-primary font-bold text-sm tracking-widest uppercase">
                  Step 1 of 3 — See who’s waiting near you
                </p>
              </div>
              <h1 className="font-serif text-text-main text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                You don’t have to spend your days alone anymore.
              </h1>
              <p className="text-text-sub text-xl md:text-2xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Thousands of verified U.S. seniors are meeting new friends and companions — safely, slowly, and on their own terms.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="flex flex-col w-full sm:w-auto gap-4">
                <button 
                  onClick={onCtaClick}
                  className="relative group overflow-hidden flex items-center justify-center rounded-full h-20 md:h-22 px-14 bg-accent text-white text-2xl md:text-3xl font-black transition-all cta-glow animate-breathing active:scale-95"
                >
                  <div className="absolute inset-0 w-1/3 h-full bg-white/20 -skew-x-45 animate-shimmer pointer-events-none"></div>
                  <span className="relative z-10 flex items-center">
                    Start My Free Profile
                    <span className="material-symbols-outlined ml-4 text-3xl transition-transform group-hover:translate-x-3">arrow_forward</span>
                  </span>
                </button>

                <div className="flex flex-col gap-1">
                  <button 
                    onClick={onCtaClick}
                    className="text-primary text-xl font-bold underline decoration-2 underline-offset-4 hover:text-primary-dark transition-colors text-center lg:text-left px-4"
                  >
                    See how it works (no signup yet)
                  </button>
                  <p className="text-[11px] font-black text-text-sub/50 uppercase tracking-[0.15em] text-center lg:text-left px-4">
                    Takes about 30 seconds to review.
                  </p>
                </div>
                
                <div className="flex flex-col items-center lg:items-start gap-2 px-4 mt-2">
                  <div className="flex items-center gap-2 text-text-sub/90 font-black text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-base">verified</span>
                    No payment. No pressure. Just real people your age.
                  </div>
                  <div className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest">
                    <span className="material-symbols-outlined text-base">group</span>
                    12 seniors ages 65–85 joined in your state today.
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-primary/5 w-full">
                <div className="flex items-center justify-center lg:justify-start gap-4 h-8">
                  <span className="inline-block size-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-sm font-bold text-text-sub uppercase tracking-[0.1em] transition-all duration-1000">
                    {locations[locIndex]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[540px] flex flex-col items-center lg:items-start relative">
            <div className="mb-6 flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-primary/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <span className="text-xs font-black text-text-main uppercase tracking-[0.3em]">Happening right now</span>
            </div>

            <div className="w-full relative cursor-pointer" onClick={onCtaClick}>
              <LivingMatches />
              
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white px-6 py-4 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-primary/5 animate-soft-float">
                <div className="bg-primary/5 p-3 rounded-full text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>shield_person</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-text-main leading-tight">100% Verified</p>
                  <p className="text-xs text-text-sub font-bold uppercase tracking-tighter">U.S. Based Support</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
