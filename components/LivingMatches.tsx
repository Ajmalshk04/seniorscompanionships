
import React, { useState } from 'react';

const LivingMatches: React.FC = () => {
  const [manFailed, setManFailed] = useState(false);
  const [womanFailed, setWomanFailed] = useState(false);

  const primaryMan = "https://helper-images.s3.us-west-2.amazonaws.com/uploads/1740523214552-8u7rnm.jpg";
  const primaryWoman = "https://helper-images.s3.us-west-2.amazonaws.com/uploads/1740523214571-h9587v.jpg";

  const fallbackMan = "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800";
  const fallbackWoman = "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=800";

  const seniorMan = {
    name: "John",
    age: 72,
    state: "Florida",
    img: manFailed ? fallbackMan : primaryMan
  };

  const seniorWoman = {
    name: "Linda",
    age: 68,
    state: "Arizona",
    img: womanFailed ? fallbackWoman : primaryWoman
  };

  return (
    <div className="space-y-6">
      <div className="relative w-full aspect-square bg-[#FCFBF9] rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-[16px] border-white overflow-hidden flex flex-col items-center justify-center p-10">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,66,187,0.02)_0%,transparent_100%)] pointer-events-none"></div>

        <div className="w-full flex flex-col items-center justify-center gap-12">
          <div className="flex items-center justify-center w-full gap-4 md:gap-12 relative">
            
            {/* SYNCHRONIZED CONNECTOR LINE */}
            <div className="absolute top-[72px] md:top-[104px] left-[15%] right-[15%] h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent glow-line-pulse z-0 pointer-events-none"></div>

            <div className="flex flex-col items-center gap-6 z-10">
              <div className="size-36 md:size-52 rounded-full border-[10px] border-white shadow-2xl overflow-hidden bg-gray-100 relative group">
                <img 
                  src={seniorMan.img} 
                  alt={`${seniorMan.name}, ${seniorMan.age}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => setManFailed(true)}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="text-center">
                <h4 className="font-serif text-2xl md:text-3xl font-black text-text-main leading-tight">
                  {seniorMan.name}, {seniorMan.age} — {seniorMan.state}
                </h4>
              </div>
            </div>

            <div className="relative flex items-center justify-center min-w-[60px] md:min-w-[80px] z-10">
               <span className="material-symbols-outlined text-red-600 text-6xl md:text-8xl heartbeat-red drop-shadow-red">
                 favorite
               </span>
            </div>

            <div className="flex flex-col items-center gap-6 z-10">
              <div className="size-36 md:size-52 rounded-full border-[10px] border-white shadow-2xl overflow-hidden bg-gray-100 relative group">
                <img 
                  src={seniorWoman.img} 
                  alt={`${seniorWoman.name}, ${seniorWoman.age}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => setWomanFailed(true)}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="text-center">
                <h4 className="font-serif text-2xl md:text-3xl font-black text-text-main leading-tight">
                  {seniorWoman.name}, {seniorWoman.age} — {seniorWoman.state}
                </h4>
              </div>
            </div>
          </div>

          <div className="h-10 flex items-center justify-center w-full px-6">
              <p className="text-center text-text-main font-serif italic text-2xl md:text-3xl">
                “A real senior connection just started”
              </p>
          </div>
        </div>

        <div className="absolute bottom-10">
          <div className="bg-primary/5 px-6 py-2 rounded-full border border-primary/10 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-xl">verified_user</span>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">100% Real Seniors</span>
          </div>
        </div>
      </div>

      <div className="text-center px-4 space-y-2">
        <p className="text-text-sub text-lg md:text-xl font-medium leading-tight">
          Most members start just like this — you could be next.
        </p>
        <p className="text-text-sub/60 text-xs md:text-sm font-bold uppercase tracking-[0.1em]">
          Your matches are based on age, location, and comfort level.
        </p>
      </div>

      <style>{`
        .heartbeat-red {
          animation: heartbeat 1.8s ease-in-out infinite;
          transform-origin: center;
        }
        .glow-line-pulse {
          animation: glowLine 1.8s ease-in-out infinite;
        }
        .drop-shadow-red {
          filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.4)) 
                  drop-shadow(0 0 25px rgba(220, 38, 38, 0.6));
        }
        @keyframes heartbeat {
          0% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(220, 38, 38, 0.4)); }
          14% { transform: scale(1.15); filter: drop-shadow(0 0 15px rgba(220, 38, 38, 0.7)); }
          28% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(220, 38, 38, 0.4)); }
          42% { transform: scale(1.15); filter: drop-shadow(0 0 15px rgba(220, 38, 38, 0.7)); }
          70% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(220, 38, 38, 0.4)); }
        }
        @keyframes glowLine {
          0%, 28%, 70%, 100% { 
            opacity: 0.2; 
            box-shadow: 0 0 4px rgba(220, 38, 38, 0.2); 
          }
          14%, 42% { 
            opacity: 0.8; 
            box-shadow: 0 0 12px rgba(220, 38, 38, 0.5); 
          }
        }
      `}</style>
    </div>
  );
};

export default LivingMatches;
