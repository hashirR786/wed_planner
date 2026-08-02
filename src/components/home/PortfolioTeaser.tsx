import React, { useState } from 'react';
import { Eye, ArrowRight, Camera } from 'lucide-react';
import { siteConfig, type PortfolioItem } from '../../config/siteConfig';
import { ImageModal } from '../ui/ImageModal';
import { ScrollReveal } from '../ui/ScrollReveal';

interface PortfolioTeaserProps {
  onNavigate: (path: string) => void;
}

export const PortfolioTeaser: React.FC<PortfolioTeaserProps> = ({ onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Take top 6 portfolio items for homepage grid
  const items = siteConfig.portfolio.slice(0, 6);

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
              onClick={() => onNavigate('/portfolio')}
              className="btn-secondary text-xs py-3 px-6 self-start md:self-auto"
            >
              View Full Portfolio Gallery <ArrowRight size={15} />
            </button>
          </div>
        </ScrollReveal>

        {/* 6 Photo Grid with Custom Cursor data-cursor="view" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <ScrollReveal key={item.id} variant="fade-up" delay={index * 120} duration={800}>
              <div
                data-cursor="view"
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-[#FDFBF7] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-[#2C4A3E]/10 flex flex-col justify-between h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#FDFBF7] text-[#2C2A29] px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Eye size={14} className="text-[#C87D65]" /> View Details
                    </span>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-semibold bg-[#2C4A3E]/90 text-[#FDFBF7] px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Content Caption */}
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-2xl text-[#2C2A29] group-hover:text-[#C87D65] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#65605C] font-light">
                    {item.location} • {item.guestCount}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox Modal */}
        <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />

        {/* Bottom CTA */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-16 text-center">
            <p className="text-sm text-[#65605C] font-light mb-4">
              Curious to explore more of our real wedding stories and aesthetic design moodboards?
            </p>
            <button
              onClick={() => onNavigate('/portfolio')}
              className="btn-primary"
            >
              Explore Complete Portfolio Grid
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
