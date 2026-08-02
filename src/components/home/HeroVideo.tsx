import React from 'react';
import { ArrowDown, Calendar } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface HeroVideoProps {
  onNavigate: (path: string) => void;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ onNavigate }) => {
  // If client provides an MP4 video file, specify it in siteConfig.heroVideoSrc
  const videoSrc = siteConfig.heroVideoSrc;
  const gifSrc = siteConfig.heroGifs[0]?.src || '/weddinggif.gif';

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1A1918]">
      {videoSrc ? (
        /* Preferred High-Definition MP4/WebM Client Video Background */
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        /* Fallback High Quality GIF Visual */
        <img
          src={gifSrc}
          alt="Bespoke Luxury Wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Gentle Gradient Overlays for High Legibility at Top & Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none z-10" />

      {/* Subtle Bottom Hero Overlay Bar */}
      <div className="absolute bottom-12 inset-x-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Subtle Tagline Subtitle */}
        <div className="max-w-2xl mx-auto space-y-2 animate-fade-in">
          <p className="font-script text-2xl sm:text-3xl text-[#E09F87] drop-shadow-md">
            {siteConfig.businessTagline}
          </p>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-white/90 font-light drop-shadow">
            {siteConfig.location} — Luxury Wedding & Event Studio
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/weddings')}
            className="btn-primary py-3.5 px-7 text-xs tracking-[0.2em] shadow-xl"
          >
            Explore Weddings
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="btn-terracotta py-3.5 px-7 text-xs tracking-[0.2em] shadow-xl"
          >
            <Calendar size={15} /> Inquire Now
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-4 flex flex-col items-center text-white/70 text-[10px] tracking-[0.25em] uppercase">
          <ArrowDown size={14} className="animate-bounce mb-1" />
          Scroll Down
        </div>

      </div>
    </section>
  );
};
