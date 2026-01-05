
import React from 'react';

interface RecognitionProps {
  onCtaClick: () => void;
}

const Recognition: React.FC<RecognitionProps> = ({ onCtaClick }) => {
  const stableSeniors = [
    'https://helper-images.s3.us-west-2.amazonaws.com/uploads/1740523214552-8u7rnm.jpg',
    'https://helper-images.s3.us-west-2.amazonaws.com/uploads/1740523214571-h9587v.jpg',
    'https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1508243750543-346761660d29?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=200'
  ];

  return (
    <section className="w-full bg-heritage py-20 lg:py-28">
      <div className="w-full max-w-[960px] px-6 md:px-12 mx-auto text-center">
        <div className="space-y-8">
          <h2 className="font-serif text-text-main text-3xl md:text-5xl font-black leading-tight">
            You are not alone in <span className="text-primary italic">feeling this way.</span>
          </h2>
          <div className="space-y-6 text-xl text-text-sub leading-relaxed max-w-2xl mx-auto">
            <p>
              Many of our members joined because they missed the simple joy of sharing a cup of coffee, discussing a good book, or taking a walk with someone who truly listens.
            </p>
            <p className="font-bold text-text-main">
              We built this community for people like you—who value quality, respect, and real connection over empty digital noise.
            </p>
          </div>
          <div className="pt-8 flex flex-col items-center gap-8">
            <div className="flex -space-x-4">
               {stableSeniors.map((url, idx) => (
                 <div key={idx} className="size-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 transition-transform hover:scale-110 z-10 cursor-pointer" onClick={onCtaClick}>
                    <img 
                      src={url} 
                      alt="Community Member" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200";
                      }}
                    />
                 </div>
               ))}
            </div>
            
            <button 
              onClick={onCtaClick}
              className="h-16 px-10 rounded-full bg-primary text-white font-black text-xl hover:bg-primary-dark transition-all active:scale-95 shadow-xl shadow-primary/20"
            >
              See Members Near You
            </button>
            
            <p className="text-sm font-black text-primary uppercase tracking-[0.3em]">
              Verified U.S. Seniors (65-85) Joining Every Day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
