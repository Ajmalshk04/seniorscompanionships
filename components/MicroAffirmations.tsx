
import React, { useState, useEffect } from 'react';

const affirmations = [
  "You're in the right place.",
  "Built for people like you.",
  "You stay in control.",
  "No pressure, just connection.",
  "Verified neighbors nearby.",
];

const MicroAffirmations: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % affirmations.length);
        setVisible(true);
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[30] pointer-events-none hidden lg:block">
      <div className={`bg-white/80 backdrop-blur px-6 py-3 rounded-full border border-primary/10 shadow-lg transition-all duration-1000 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-text-sub text-sm font-bold tracking-widest uppercase">
          {affirmations[index]}
        </p>
      </div>
    </div>
  );
};

export default MicroAffirmations;
