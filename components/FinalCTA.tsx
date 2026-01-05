
import React from 'react';

interface FinalCTAProps {
  onCtaClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-heritage py-20 lg:py-32">
      <div className="w-full max-w-[1280px] px-6 md:px-12 mx-auto text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
          <div className="space-y-4">
            <p className="text-primary font-black uppercase tracking-[0.2em] text-sm">Join the Conversation</p>
            <h2 className="text-text-main text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Ready to find <span className="text-primary italic">someone special?</span>
            </h2>
          </div>
          
          <p className="text-text-sub text-xl md:text-2xl leading-relaxed">
            Join thousands of verified seniors across the U.S. who are discovering new friendships and genuine connections every day.
          </p>

          <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
            <button 
              onClick={onCtaClick}
              className="relative group overflow-hidden flex items-center justify-center rounded-full h-20 md:h-22 px-14 bg-accent text-white text-2xl md:text-3xl font-black transition-all cta-glow animate-breathing active:scale-95 w-full"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-1/3 h-full bg-white/20 -skew-x-45 animate-shimmer pointer-events-none"></div>
              
              <span className="relative z-10 flex items-center">
                Start My Free Profile
                <span className="material-symbols-outlined ml-4 text-3xl transition-transform group-hover:translate-x-3">arrow_forward</span>
              </span>
            </button>
            
            <div className="space-y-3">
               <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-text-sub font-black text-xs uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-safe-green text-sm">lock</span> NO PAYMENT REQUIRED
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-safe-green text-sm">verified</span> NO OBLIGATION
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-safe-green text-sm">history</span> STOP ANYTIME
                  </span>
               </div>
               <p className="text-text-sub/50 text-[11px] uppercase font-black tracking-widest italic">IT TAKES LESS THAN 2 MINUTES TO BEGIN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
