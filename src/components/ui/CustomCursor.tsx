import React, { useEffect, useState } from 'react';
import { Heart, Eye } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'heart'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') as any;
        setCursorType(type || 'view');
      } else if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      {cursorType === 'view' ? (
        <div className="bg-[#2C4A3E] text-[#FDFBF7] px-4 py-2 rounded-full text-[10px] uppercase font-semibold tracking-widest flex items-center gap-1.5 shadow-2xl animate-fade-in border border-white/20">
          <Eye size={12} className="text-[#E09F87]" /> View Story
        </div>
      ) : cursorType === 'heart' ? (
        <div className="bg-[#C87D65] text-white p-3 rounded-full shadow-2xl animate-fade-in flex items-center justify-center">
          <Heart size={14} className="fill-current" />
        </div>
      ) : cursorType === 'pointer' ? (
        <div className="w-8 h-8 rounded-full border border-[#C87D65] bg-[#C87D65]/20 backdrop-blur-xs transition-all duration-300 scale-110" />
      ) : (
        <div className="w-4 h-4 rounded-full bg-[#2C4A3E]/40 border border-[#2C4A3E] transition-all duration-200" />
      )}
    </div>
  );
};
