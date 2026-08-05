import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

import { getAssetUrl } from '../../utils/asset';

interface PortfolioTeaserProps {
  onNavigate: (path: string) => void;
}

// Each image = one different couple's story
const coupleStories = [
  { id: 1, image: '/couple stories/couple 1.webp' },
  { id: 2, image: '/couple stories/couple 2.webp' },
  { id: 3, image: '/couple stories/couple 3.webp' },
  { id: 4, image: '/couple stories/couple 4.webp' },
  { id: 5, image: '/couple stories/couple 5.webp' },
  { id: 6, image: '/couple stories/couple 6.webp' },
];

export const PortfolioTeaser: React.FC<PortfolioTeaserProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#2C4A3E]/10 gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold flex items-center gap-2">
                <Camera size={14} className="text-[#2C4A3E]" />
                Selected Portfolio
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29]">
                Real Weddings & Celebrations
              </h2>
            </div>

            <button
              onClick={() => onNavigate('/portfolio?category=Couples')}
              className="btn-secondary text-xs py-3 px-6 self-start md:self-auto"
            >
              View Full Portfolio Gallery <ArrowRight size={15} />
            </button>
          </div>
        </ScrollReveal>

        {/* Couple Stories Grid — one card per couple */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coupleStories.map((story, index) => (
            <ScrollReveal key={story.id} variant="fade-up" delay={index * 120} duration={800}>
              <div
                onClick={() => onNavigate('/portfolio?category=Couples')}
                className="group cursor-pointer bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-[#2C4A3E]/10 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <img
                    src={getAssetUrl(story.image)}
                    alt={`Couple Story #${story.id} — United Stories by Arun, London`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#FDFBF7] text-[#2C2A29] text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5">
                      View Collection <ArrowRight size={13} className="text-[#C87D65]" />
                    </span>
                  </div>
                </div>

                {/* Card Caption */}
                <div className="p-6 space-y-1">
                  <h3 className="font-serif text-xl text-[#2C2A29] group-hover:text-[#C87D65] transition-colors">
                    Couple Story #{story.id}
                  </h3>
                  <p className="text-xs text-[#65605C] font-light uppercase tracking-wider">
                    London · Intimate Couple Session
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-16 text-center">
            <p className="text-sm text-[#65605C] font-light mb-4">
              Explore our complete portfolio of couple sessions, maternity, and graduation stories.
            </p>
            <button
              onClick={() => onNavigate('/portfolio')}
              className="btn-primary"
            >
              Explore Complete Portfolio
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
