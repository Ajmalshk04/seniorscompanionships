
import React from 'react';

interface NavbarProps {
  onJoinClick: () => void;
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onJoinClick, onLoginClick }) => {
  return (
    <nav className="sticky top-0 z-40 w-full bg-heritage/95 backdrop-blur-md border-b border-primary/5">
      <div className="px-6 md:px-12 flex justify-center py-3">
        <div className="w-full max-w-[1280px] flex items-center justify-between h-16">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-primary size-10 flex items-center justify-center rounded-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>diversity_1</span>
            </div>
            <h2 className="text-text-main text-2xl font-serif font-black tracking-tight hidden sm:block">
              Senior Companionship
            </h2>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={onLoginClick}
              className="text-text-sub/60 text-sm font-bold hover:text-primary transition-colors hidden md:block"
            >
              Member Login
            </button>
            <button 
              onClick={onJoinClick}
              className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-white text-base font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
            >
              Start My Free Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
