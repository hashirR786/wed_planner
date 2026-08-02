import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Thin Reading Line Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-[#2C4A3E]/10 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#2C4A3E] via-[#C87D65] to-[#2C4A3E] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Right Side Editorial Vertical Progress Bar & Percentage */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 pointer-events-none animate-fade-in">
        <span className="font-mono text-[10px] text-[#65605C] uppercase tracking-widest rotate-90 origin-center mb-4">
          {Math.round(scrollProgress)}%
        </span>
        <div className="w-[2px] h-28 bg-[#2C4A3E]/15 rounded-full overflow-hidden relative">
          <div
            className="w-full bg-[#C87D65] transition-all duration-150 ease-out rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#2C4A3E]" />
      </div>
    </>
  );
};
