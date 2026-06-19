import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ active }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!active) {
      // Allow fade-out animation to complete before unmounting
      const timer = setTimeout(() => {
        setVisible(false);
      }, 800); // 800ms fade transition
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
    }
  }, [active]);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 w-full h-full bg-base z-50 flex flex-col items-center justify-center transition-opacity duration-700 ease-out select-none pointer-events-none ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Sleek dual spinning gradient rings */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[3px] border-white/5 border-t-primary animate-spin duration-1000" />
          <div className="absolute w-12 h-12 rounded-full border-[3px] border-white/5 border-b-accent animate-spin duration-[1500ms] reverse" style={{ animationDirection: 'reverse' }} />
        </div>
        
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-display font-black tracking-widest text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-accent uppercase py-2 px-4 select-none">
            Aditya Srivastava
          </p>
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-white/40 font-medium animate-pulse">
            Initializing 3D Experience
          </span>
        </div>
      </div>
    </div>
  );
}
