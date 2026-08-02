import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-[#2C4A3E] text-[#FDFBF7] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FDFBF7_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Quote Icon Header */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-[#E09F87]">
            <Quote size={28} />
          </div>
        </div>

        {/* Dynamic Testimonial Content */}
        <div className="min-h-[300px] flex flex-col justify-center animate-fade-in key={current.id}">
          
          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-4 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-current" />
            ))}
          </div>

          {/* Pull Quote Headline */}
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#E09F87] mb-6 italic tracking-tight">
            "{current.pullQuote}"
          </h3>

          {/* Full Client Quote */}
          <p className="text-base sm:text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            {current.quote}
          </p>

          {/* Couple & Venue Details */}
          <div>
            <span className="font-serif text-2xl text-white block">
              {current.coupleName}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#E09F87] block mt-1">
              {current.venue} • {current.location}
            </span>
          </div>

        </div>

        {/* Slider Navigation Buttons */}
        <div className="flex items-center justify-center space-x-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#2C4A3E] transition-all duration-300 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <span className="text-xs text-white/60 uppercase tracking-widest font-mono">
            {currentIndex + 1} / {testimonials.length}
          </span>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#2C4A3E] transition-all duration-300 focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};
