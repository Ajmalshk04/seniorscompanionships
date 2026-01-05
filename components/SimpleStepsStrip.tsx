
import React from 'react';

interface SimpleStepsStripProps {
  onCtaClick: () => void;
}

const SimpleStepsStrip: React.FC<SimpleStepsStripProps> = ({ onCtaClick }) => {
  const steps = [
    { icon: 'edit_note', text: 'Create profile — 2 minutes' },
    { icon: 'verified_user', text: 'Browse safely' },
    { icon: 'chat_bubble', text: 'Message when you’re ready' },
  ];

  return (
    <section className="w-full bg-white border-y border-primary/5 py-10 lg:py-14 cursor-pointer" onClick={onCtaClick}>
      <div className="w-full max-w-[1280px] px-6 md:px-12 mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-text-sub font-black uppercase tracking-[0.3em] text-xs md:text-sm">
            Getting started is simple
          </h3>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 group">
              <div className="size-16 md:size-20 rounded-2xl bg-heritage flex items-center justify-center text-primary shadow-sm border border-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>{step.icon}</span>
              </div>
              <p className="text-text-main font-bold text-lg md:text-xl text-center">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleStepsStrip;
