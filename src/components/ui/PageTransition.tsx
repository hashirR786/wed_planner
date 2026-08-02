import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  currentPath: string;
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ currentPath, children }) => {
  const [displayPath, setDisplayPath] = useState(currentPath);
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn');

  useEffect(() => {
    if (currentPath !== displayPath) {
      setTransitionStage('fadeOut');
      const timer = setTimeout(() => {
        setDisplayPath(currentPath);
        setTransitionStage('fadeIn');
      }, 250); // 250ms fade out duration
      return () => clearTimeout(timer);
    }
  }, [currentPath, displayPath]);

  return (
    <div
      className={`transition-all duration-400 cubic-bezier(0.16, 1, 0.3, 1) ${
        transitionStage === 'fadeIn'
          ? 'opacity-100 translate-y-0 filter-none'
          : 'opacity-0 -translate-y-4 blur-xs'
      }`}
    >
      {children}
    </div>
  );
};
