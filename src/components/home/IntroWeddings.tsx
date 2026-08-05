import React, { useState, useEffect } from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ScrollReveal } from '../ui/ScrollReveal';

import { getAssetUrl } from '../../utils/asset';

interface IntroWeddingsProps {
  onNavigate: (path: string) => void;
}

const coupleImages = [
  '/portfolio/pre-wedding/001_1.webp',
  '/portfolio/pre-wedding/01_1.webp',
  '/portfolio/pre-wedding/02.webp',
  '/portfolio/pre-wedding/08.webp',
  '/portfolio/pre-wedding/16.webp'
];

const maternityImages = [
  '/portfolio/maternity/01.webp',
  '/portfolio/maternity/02.webp',
  '/portfolio/maternity/03.webp',
  '/portfolio/maternity/06.webp',
  '/portfolio/maternity/12.webp'
];

const graduationImages = [
  '/portfolio/graduation/01.webp',
  '/portfolio/graduation/02.webp',
  '/portfolio/graduation/03.webp',
  '/portfolio/graduation/07.webp',
  '/portfolio/graduation/09.webp'
];

export const IntroWeddings: React.FC<IntroWeddingsProps> = ({ onNavigate }) => {
  const [coupleIndex, setCoupleIndex] = useState(0);
  const [maternityIndex, setMaternityIndex] = useState(0);
  const [graduationIndex, setGraduationIndex] = useState(0);

  // Staggered image cycling slideshow
  useEffect(() => {
    const coupleTimer = setInterval(() => {
      setCoupleIndex((prev) => (prev + 1) % coupleImages.length);
    }, 3500);

    const maternityTimer = setInterval(() => {
      setMaternityIndex((prev) => (prev + 1) % maternityImages.length);
    }, 4000);

    const graduationTimer = setInterval(() => {
      setGraduationIndex((prev) => (prev + 1) % graduationImages.length);
    }, 4500);

    return () => {
      clearInterval(coupleTimer);
      clearInterval(maternityTimer);
      clearInterval(graduationTimer);
    };
  }, []);

  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-[#2C4A3E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" duration={900}>
          
          {/* Top 2-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16">
            
            {/* Left Column: Heading & Editorial Accent */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold block">
                Signature Photography Studio
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29] leading-tight">
                Authentic Stories, <br />
                <span className="italic font-normal text-[#2C2A29]">Cinematically Preserved.</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#C87D65]" />
            </div>

            {/* Right Column: Short Paragraph + Warm Quote */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-[#65605C] font-light leading-relaxed">
                {siteConfig.bio.shortBio}
              </p>

              {/* Fine Art Poetic Quote Box */}
              <div className="bg-[#F7F3EC] p-6 sm:p-8 rounded-2xl border-l-4 border-[#C87D65] space-y-3 relative shadow-sm">
                <Quote size={24} className="text-[#C87D65]/30 absolute top-4 right-4" />
                <p className="font-serif text-lg sm:text-xl text-[#2C2A29] italic leading-relaxed">
                  "Capturing timeless memories through storytelling photography for over 12 years... Let’s tell your story — beautifully and authentically."
                </p>
                <span className="text-xs uppercase tracking-widest text-[#2C2A29] font-medium block">
                  — {siteConfig.plannerName}, Founder & Lead Photographer (12+ Years Experience)
                </span>
              </div>
            </div>

          </div>

          {/* Fine Art Italian Archway Showcase Cards (Clean image frames without pill badges) */}
          <div className="pt-12 border-t border-[#2C4A3E]/10">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C87D65] font-semibold block">
                Featured Categories
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2A29]">
                Chapters of Love & Legacy
              </h3>
              <p className="text-xs text-[#65605C] font-light">
                Click any gallery arch below to explore full collections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
              
              {/* Archway 1: Couples & Pre-Wedding */}
              <div
                onClick={() => onNavigate('/portfolio?category=Couples')}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="relative w-full aspect-[3/4] rounded-t-[140px] sm:rounded-t-[180px] rounded-b-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-[#FDFBF7] ring-1 ring-[#2C4A3E]/15 bg-[#1A1918]">
                  {/* Dynamic Image Slideshow */}
                  {coupleImages.map((src, idx) => (
                    <img
                      key={src}
                      src={getAssetUrl(src)}
                      alt="Couples Photography"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        idx === coupleIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                    />
                  ))}

                  {/* Hover Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-[#FDFBF7] text-[#2C2A29] text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-1.5">
                      Explore Gallery <ArrowRight size={13} className="text-[#C87D65]" />
                    </span>
                  </div>
                </div>

                <div className="mt-5 text-center space-y-1">
                  <h4 className="font-serif text-2xl text-[#2C2A29] group-hover:text-[#C87D65] transition-colors">
                    Couples & Pre-Wedding
                  </h4>
                  <p className="text-xs text-[#65605C] font-light uppercase tracking-wider">
                    London Golden Hour Sessions
                  </p>
                </div>
              </div>

              {/* Archway 2: Fine Art Maternity */}
              <div
                onClick={() => onNavigate('/portfolio?category=Maternity')}
                className="group cursor-pointer flex flex-col items-center md:-translate-y-4"
              >
                <div className="relative w-full aspect-[3/4] rounded-t-[140px] sm:rounded-t-[180px] rounded-b-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-[#FDFBF7] ring-1 ring-[#2C4A3E]/15 bg-[#1A1918]">
                  {/* Dynamic Image Slideshow */}
                  {maternityImages.map((src, idx) => (
                    <img
                      key={src}
                      src={getAssetUrl(src)}
                      alt="Maternity Photography"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        idx === maternityIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                    />
                  ))}

                  {/* Hover Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-[#FDFBF7] text-[#2C2A29] text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-1.5">
                      Explore Gallery <ArrowRight size={13} className="text-[#C87D65]" />
                    </span>
                  </div>
                </div>

                <div className="mt-5 text-center space-y-1">
                  <h4 className="font-serif text-2xl text-[#2C2A29] group-hover:text-[#C87D65] transition-colors">
                    Fine Art Maternity
                  </h4>
                  <p className="text-xs text-[#65605C] font-light uppercase tracking-wider">
                    Motherhood & Family Stories
                  </p>
                </div>
              </div>

              {/* Archway 3: Graduation Milestone */}
              <div
                onClick={() => onNavigate('/portfolio?category=Graduation')}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="relative w-full aspect-[3/4] rounded-t-[140px] sm:rounded-t-[180px] rounded-b-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border-2 border-[#FDFBF7] ring-1 ring-[#2C4A3E]/15 bg-[#1A1918]">
                  {/* Dynamic Image Slideshow */}
                  {graduationImages.map((src, idx) => (
                    <img
                      key={src}
                      src={getAssetUrl(src)}
                      alt="Graduation Photography"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        idx === graduationIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                    />
                  ))}

                  {/* Hover Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-[#FDFBF7] text-[#2C2A29] text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-1.5">
                      Explore Gallery <ArrowRight size={13} className="text-[#C87D65]" />
                    </span>
                  </div>
                </div>

                <div className="mt-5 text-center space-y-1">
                  <h4 className="font-serif text-2xl text-[#2C2A29] group-hover:text-[#C87D65] transition-colors">
                    Graduation Milestone
                  </h4>
                  <p className="text-xs text-[#65605C] font-light uppercase tracking-wider">
                    Academic Distinction
                  </p>
                </div>
              </div>

            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};
