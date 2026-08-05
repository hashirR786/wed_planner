import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { getAssetUrl } from '../../App';

interface HeroVideoProps {
  onNavigate: (path: string) => void;
}

// Curated hero images for mobile — shown instead of video to preserve quality & performance
const mobileHeroImages = [
  '/couple stories/couple 3.webp',
  '/couple stories/couple 2.webp',
  '/portfolio/pre-wedding/01_1.webp',
  '/couple stories/couple 5.webp',
];

export const HeroVideo: React.FC<HeroVideoProps> = ({ onNavigate }) => {
  const rawVideoSrc = siteConfig.heroVideoSrc || '/Video-87580.mp4';
  const videoSrc = getAssetUrl(rawVideoSrc);
  const [isMobile, setIsMobile] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  // Detect mobile on mount and window resize
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // On mobile, slowly crossfade between portfolio images
  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % mobileHeroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isMobile]);

  return (
    <section
      className="relative w-full h-[100svh] overflow-hidden bg-[#1A1918]"
      aria-label="Hero — United Stories by Arun"
    >
      {/* ── DESKTOP: Portrait video (unchanged) ── */}
      {!isMobile && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vh] min-h-[100vw] w-auto h-auto object-cover max-w-none max-h-none -rotate-90 scale-125"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {/* ── MOBILE: Crossfading full-screen portrait photos ── */}
      {isMobile && (
        <div className="absolute inset-0">
          {mobileHeroImages.map((src, idx) => (
            <img
              key={src}
              src={getAssetUrl(src)}
              alt="United Stories by Arun — Cinematic Photography"
              fetchPriority={idx === 0 ? 'high' : 'low'}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
              style={{ opacity: idx === imgIndex ? 1 : 0 }}
            />
          ))}
          {/* Ken-Burns subtle zoom on active image */}
          <style>{`
            @keyframes kenburns {
              0%   { transform: scale(1);    }
              100% { transform: scale(1.06); }
            }
          `}</style>
          {mobileHeroImages.map((src, idx) => (
            idx === imgIndex && (
              <div
                key={`kb-${src}`}
                className="absolute inset-0 w-full h-full"
                style={{ animation: 'kenburns 6s ease-in-out forwards' }}
              />
            )
          ))}
        </div>
      )}

      {/* Shared: gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

      {/* Brand Logo — centred at top */}
      <div className="absolute top-8 inset-x-0 z-20 flex justify-center items-center animate-fade-in px-4">
        <button
          onClick={() => onNavigate('/')}
          aria-label="United Stories by Arun — Home"
          className="focus:outline-none hover:scale-105 transition-transform duration-300"
        >
          <img
            src={getAssetUrl("/Gemini_Generated_Image_rye0vdrye0vdrye0-removebg-preview.png")}
            alt="United Stories by Arun — Cinematic Photography Studio, London"
            style={{
              height: 'clamp(90px, 18vw, 130px)',
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1) drop-shadow(0 4px 24px rgba(0,0,0,0.6))',
            }}
          />
        </button>
      </div>

      {/* Mobile: subtle bottom tagline */}
      {isMobile && (
        <div className="absolute bottom-10 inset-x-0 z-20 flex flex-col items-center gap-3 animate-fade-in px-6">
          <p className="font-script text-white/90 text-xl tracking-wide drop-shadow-lg">
            Cinematic Stories, Honestly Told.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="bg-[#C87D65] text-white text-[10px] uppercase tracking-[0.25em] px-6 py-3 rounded-full hover:bg-[#A9624C] transition-colors shadow-xl"
          >
            Book a Session
          </button>
        </div>
      )}

    </section>
  );
};
