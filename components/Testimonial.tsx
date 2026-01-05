
import React from 'react';

const Testimonial: React.FC<{ onCtaClick?: () => void }> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-primary py-20 text-white">
      <div className="w-full max-w-[960px] px-4 md:px-8 mx-auto text-center">
        <span className="material-symbols-outlined mb-6 text-white/40" style={{ fontSize: '64px' }}>format_quote</span>
        <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-8 max-w-3xl mx-auto">
          "I never thought I'd find love again after 60, but Senior Companionship made it so simple. I met Robert within my first week, and we've been inseparable since."
        </h2>
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4">
            <div 
              className="size-20 rounded-full border-4 border-white/30 bg-gray-300 bg-cover bg-center shadow-lg"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3XIOS2XIg3Nj2gVmUaVEPBvBAgcUkRL48KR5D9nwWO9nA3ZIJfz7cRleQ4ksxm48PBzBqEjIYMtjmzqM61OMv4G5uw9xVbtSZVkq-wC8bZfLWhMjLyiRydeOzAA8Shk6anxl6ZxHVUVg3sEewQMwdZ2kG_p8xsobQMSwaWYQGKeMn4Dxeg0yMHuEagyWQ4qdk8YdDlRzdX3YAvjndTgRMsCY3LwZYKHNL98gF8vl5iA9BQ8fbp2CGeWNiCHd-n3_pra4kvOKxi-Q")' }}
            ></div>
            <div>
              <div className="font-bold text-xl">Susan, 68</div>
              <div className="text-white/80 text-lg">Found love in Austin, TX</div>
            </div>
          </div>

          {/* SOFT CTA STRIP */}
          <div className="flex flex-col items-center gap-4 py-8 border-t border-white/10 w-full">
            <button 
              onClick={onCtaClick}
              className="h-16 px-10 rounded-full border-2 border-white text-white font-black text-xl hover:bg-white hover:text-primary transition-all active:scale-95"
            >
              See Who’s Waiting Near Me
            </button>
            <p className="text-sm font-black text-white/70 uppercase tracking-[0.2em]">
              Free • Verified • Ages 65–85
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
