import React from 'react';
import { siteConfig } from '../../config/siteConfig';

interface HeroVideoProps {
  onNavigate: (path: string) => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onNavigate }) => {
  const videoSrc = siteConfig.heroVideoSrc || '/Video-87580.mp4';

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1A1918]" aria-label="Hero — United Stories by Arun">

      {/* Full-screen rotated portrait video */}
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

      {/* Very subtle top vignette so logo reads clearly */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-10" />

      {/* Brand Logo — centred at top */}
      <div className="absolute top-8 inset-x-0 z-20 flex justify-center items-center animate-fade-in">
        <button
          onClick={() => onNavigate('/')}
          aria-label="United Stories by Arun — Home"
          className="focus:outline-none hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/Gemini_Generated_Image_rye0vdrye0vdrye0-removebg-preview.png"
            alt="United Stories by Arun — Cinematic Photography Studio, London"
            style={{
              height: '130px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1) drop-shadow(0 4px 24px rgba(0,0,0,0.6))',
            }}
          />
        </button>
      </div>

    </section>
  );
};
