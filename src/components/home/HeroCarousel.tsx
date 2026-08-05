import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getAssetUrl } from '../../utils/asset';

interface HeroCarouselProps {
  onNavigate: (path: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = siteConfig.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1A1918]">
      {/* Background Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 z-10" />
          
          <img
            src={getAssetUrl(slide.image)}
            alt={slide.tagline}
            className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
          />

          {/* Hero Overlay Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#E09F87] font-semibold bg-black/40 px-4 py-1.5 rounded-full border border-[#E09F87]/30 backdrop-blur-sm">
                Luxury Wedding & Event Studio
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FDFBF7] font-normal leading-[1.08] tracking-tight">
                {slide.tagline}
              </h1>

              <p className="text-base sm:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                {slide.subtext}
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onNavigate(slide.ctaLink)}
                  className="btn-primary py-4 px-8 text-xs tracking-[0.2em]"
                >
                  {slide.ctaText}
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="btn-secondary text-white border-white/60 hover:bg-white hover:text-[#2C2A29] py-4 px-8 text-xs tracking-[0.2em]"
                >
                  Begin Planning
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Slide Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-[#C87D65]'
                : 'w-2 h-2 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center text-white/60 text-[10px] tracking-[0.2em] uppercase">
        <ArrowDown size={14} className="animate-bounce mb-1" />
        Scroll
      </div>
    </section>
  );
};
