
import React, { useState } from 'react';

interface SignupModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onClose, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gender, setGender] = useState('Woman');
  const [seeking, setSeeking] = useState('Man');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a secure verification process
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop with enhanced blur */}
      <div 
        className="fixed inset-0 bg-text-main/70 backdrop-blur-lg animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Content - Optimized Max Width */}
      <div className="relative w-full max-w-xl bg-[#FCFBF9] rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.6)] overflow-hidden animate-in zoom-in-95 duration-500 border border-white/50 my-auto">
        
        {/* Close Button - More discreet but accessible */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 text-text-sub/50 hover:text-primary transition-all p-2 hover:bg-primary/5 rounded-full z-20"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>close</span>
        </button>

        {/* Top Progress Header - Slimmer */}
        <div className="bg-white/60 backdrop-blur-sm py-5 px-8 md:px-10 border-b border-primary/5">
           <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">shield_person</span>
                <span className="text-primary font-black text-[10px] tracking-[0.2em] uppercase">Verified Connection</span>
              </div>
              <span className="text-text-sub text-[9px] font-black uppercase tracking-widest bg-heritage px-3 py-1 rounded-full border border-primary/5">
                Step 1 of 3
              </span>
           </div>
           <div className="relative h-1.5 w-full bg-primary/5 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary w-1/3 transition-all duration-1000 ease-out"></div>
           </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
          
          <div className="space-y-1 text-center">
            <h3 className="font-serif text-2xl md:text-4xl font-black text-text-main leading-tight tracking-tight">
              Let's find your <span className="text-primary italic">match.</span>
            </h3>
            <p className="text-text-sub text-base font-medium max-w-xs mx-auto">
              Answer 3 quick questions to see who is waiting nearby.
            </p>
          </div>

          <div className="space-y-6">
            {/* Selection Grid - Compact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-sub uppercase tracking-[0.2em] ml-2 block">I am a</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Woman', 'Man'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setGender(option)}
                      className={`h-14 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${
                        gender === option 
                        ? 'border-primary bg-primary/5 text-primary shadow-sm' 
                        : 'border-gray-100 bg-white text-text-sub/70 hover:border-primary/20'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {option === 'Woman' ? 'female' : 'male'}
                      </span>
                      <span className="font-black text-xs uppercase tracking-widest">{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-sub uppercase tracking-[0.2em] ml-2 block">Seeking a</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Man', 'Woman'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSeeking(option)}
                      className={`h-14 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${
                        seeking === option 
                        ? 'border-primary bg-primary/5 text-primary shadow-sm' 
                        : 'border-gray-100 bg-white text-text-sub/70 hover:border-primary/20'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {option === 'Woman' ? 'female' : 'male'}
                      </span>
                      <span className="font-black text-xs uppercase tracking-widest">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Field - Optimized Height */}
            <div className="space-y-2 relative">
              <label className="text-[10px] font-black text-text-sub uppercase tracking-[0.2em] ml-2">Secure Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full h-16 rounded-2xl border-2 border-gray-100 focus:border-primary focus:ring-0 text-lg font-bold px-6 bg-white shadow-inner transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                  <span className="material-symbols-outlined text-green-600 text-[16px]">lock</span>
                  <span className="text-[8px] font-black text-green-700 uppercase tracking-widest">Encrypted</span>
                </div>
              </div>
            </div>

            {/* Compact Bottom Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-sub uppercase tracking-[0.2em] ml-2">Your Age (50+)</label>
                <input 
                  type="number" 
                  required
                  min="50"
                  max="110"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="e.g. 68"
                  className="w-full h-16 rounded-2xl border-2 border-gray-100 focus:border-primary focus:ring-0 text-lg font-bold px-6 bg-white shadow-inner"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-text-sub uppercase tracking-[0.2em] ml-2">City or Zip</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your location"
                  className="w-full h-16 rounded-2xl border-2 border-gray-100 focus:border-primary focus:ring-0 text-lg font-bold px-6 bg-white shadow-inner"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="relative group overflow-hidden w-full h-20 bg-accent text-white font-black text-xl md:text-2xl rounded-2xl transition-all cta-glow active:scale-[0.98] flex flex-col items-center justify-center disabled:opacity-80"
            >
              <div className="absolute inset-0 w-1/3 h-full bg-white/10 -skew-x-45 animate-shimmer pointer-events-none"></div>

              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="size-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="uppercase tracking-[0.2em] text-xs font-black">Scanning Database...</span>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col items-center leading-none">
                  <span className="flex items-center gap-3">
                    Show My Matches
                    <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.4em] mt-2 opacity-70">No Payment Required</span>
                </div>
              )}
            </button>
          </div>

          {/* Privacy Footer - Smaller */}
          <div className="pt-6 border-t border-gray-100">
             <div className="flex justify-center items-center gap-4 text-text-sub/60 font-black text-[9px] uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-safe-green">verified</span>
                  Real Humans
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-safe-green">verified</span>
                  Zero Bots
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-safe-green">verified</span>
                  Private
                </span>
             </div>
             <p className="text-[8px] text-text-sub/30 font-black uppercase tracking-[0.4em] text-center mt-3">
                U.S. Federal Data Standards Compliant
             </p>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-45deg); }
          100% { transform: translateX(150%) skewX(-45deg); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default SignupModal;
