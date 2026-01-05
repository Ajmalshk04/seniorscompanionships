
import React from 'react';

const Safety: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick }) => {
  return (
    <section id="safety" className="w-full bg-[#fcfcfd] py-16 lg:py-24 border-y border-[#e5e7eb]">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
            <div 
              className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] aspect-video lg:aspect-[4/3] bg-cover bg-center group border-8 border-white" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdKfIEVM4AgMkxWREyw8RilGapt7J502G-sy032Q6rlg-gKOjREZ9In1YWlGmlKpiyQrDPUlgLpmeUM4jOsXn-RzDF-YbJWvHR4dTr3ZB0HzeywzIB3qF6GAMnN9S1MSM9ybm0ZEISNSTtKcU_hI-W50jJtkiPh1P7DW8343e80vdXKV5FZIKaPTlfttq_6QjBjbk_btO1LunT6E5Y2WPuCGUdU0AiDEPxkFwcP6cAIvM_8In_Chza-1phSi9lHnQ506npZ2hdIdU")' }}
            >
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/30 blur-sm animate-[scanline_4s_linear_infinite] opacity-50"></div>
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl flex items-center gap-3 border border-white shadow-xl">
                <div className="size-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-xs font-black text-text-main uppercase tracking-widest">Live Safety Monitoring</span>
              </div>
              <div className="absolute bottom-8 right-8 bg-primary text-white p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-2 max-w-[160px] animate-soft-float">
                <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>verified_user</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight">Identity Fully Protected</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-sm">
                <span className="material-symbols-outlined">verified</span> Our Promise To You
              </div>
              <h2 className="text-text-main text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                Your Safety Is Our Absolute Priority
              </h2>
            </div>

            <p className="text-text-sub text-xl leading-relaxed font-medium">
              In a digital world, trust is everything. We manually review every single profile to screen for scammers, bots, and bad actors. Our dedicated, U.S.-based safety team works around the clock to ensure you can browse with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'person_search', label: 'Human Verification' },
                { icon: 'forum', label: 'Private Messaging' },
                { icon: 'policy', label: 'Strict Conduct Rules' },
                { icon: 'history_edu', label: 'Scam Protection' }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                  </div>
                  <span className="text-base text-text-main font-black uppercase tracking-tighter">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SOFT CTA STRIP */}
        <div className="flex flex-col items-center gap-4 py-8">
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

export default Safety;
