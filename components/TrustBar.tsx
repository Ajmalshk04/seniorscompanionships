
import React from 'react';

interface TrustBarProps {
  onCtaClick: () => void;
}

const TrustBar: React.FC<TrustBarProps> = ({ onCtaClick }) => {
  const trusts = [
    { icon: 'verified', title: 'Identity Verified', text: 'We manually review profiles to ensure real people.' },
    { icon: 'lock', title: '100% Secure Data', text: 'Your privacy is protected with bank-level encryption.' },
    { icon: 'support_agent', title: 'U.S. Based Support', text: 'Friendly help available whenever you need it.' },
  ];

  return (
    <section className="w-full bg-background-off border-y border-[#e5e7eb] py-8">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trusts.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 cursor-pointer group" onClick={onCtaClick}>
              <div className="text-primary mb-3 bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{item.icon}</span>
              </div>
              <h3 className="text-text-main text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-text-sub text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
