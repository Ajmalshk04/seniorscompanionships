
import React from 'react';

interface PermissionProps {
  onCtaClick: () => void;
}

const Permission: React.FC<PermissionProps> = ({ onCtaClick }) => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="w-full max-w-[1280px] px-6 md:px-12 mx-auto">
        <div className="bg-primary/5 rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 border border-primary/10">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="font-serif text-text-main text-4xl font-black">You decide the pace.</h2>
            <p className="text-text-sub text-xl leading-relaxed">
              There is no rush and no pressure here. Whether you want to browse profiles quietly for a week or start a conversation today, the choice is entirely yours. 
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Start with simple secure messages',
                'Share as much or as little as you like',
                'U.S. human support available if you have questions'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="material-symbols-outlined text-safe-green">check_circle</span>
                  <span className="text-text-main font-bold">{text}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={onCtaClick}
              className="h-16 px-10 rounded-full border-2 border-primary text-primary font-black text-xl hover:bg-primary hover:text-white transition-all active:scale-95"
            >
              Start My Free Search
            </button>
          </div>
          <div className="lg:w-1/2 cursor-pointer" onClick={onCtaClick}>
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-primary/5">
              <div className="flex items-center gap-6 mb-6">
                 <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{fontSize: '32px'}}>settings_accessibility</span>
                 </div>
                 <div>
                    <p className="text-lg font-black text-text-main">Full Privacy Control</p>
                    <p className="text-sm text-text-sub">Manage who sees your profile</p>
                 </div>
              </div>
              <p className="text-text-sub text-sm italic">
                "It was so refreshing to find a place where I didn't feel like I was being sold something. I took my time, and found a wonderful friend when I was ready."
              </p>
              <p className="mt-4 font-bold text-text-main text-sm">— Helen, 71</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Permission;
