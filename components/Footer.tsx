
import React from 'react';

interface FooterProps {
  onCtaClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white border-t border-[#f0f1f4] py-12">
      <div className="w-full max-w-[1280px] px-4 md:px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start cursor-pointer" onClick={onCtaClick}>
          <div className="flex items-center gap-2 text-text-main">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>diversity_1</span>
            <span className="font-bold text-lg">Senior Companionship</span>
          </div>
          <p className="text-text-sub text-sm">© {currentYear} Senior Companionship. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-text-sub font-medium text-sm md:text-base">
          {['Safety Tips', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
            <button key={link} className="hover:text-primary transition-colors cursor-pointer" onClick={onCtaClick}>
              {link}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
