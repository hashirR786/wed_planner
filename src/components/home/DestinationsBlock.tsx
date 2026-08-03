import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ScrollReveal } from '../ui/ScrollReveal';

interface DestinationsBlockProps {
  onNavigate: (path: string) => void;
}

export const DestinationsBlock: React.FC<DestinationsBlockProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Romantic Imagery Stack */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal variant="slide-left" duration={900}>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl img-zoom-container aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
                  alt="Destination Wedding in Lake Como"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Secondary Floating Accent Card */}
              <div className="absolute -bottom-8 -right-6 z-20 hidden sm:block bg-[#FDFBF7] p-6 rounded-xl shadow-xl border border-[#2C4A3E]/10 max-w-xs animate-fade-in">
                <span className="text-xs uppercase tracking-widest text-[#C87D65] font-semibold block mb-1">
                  Featured Location
                </span>
                <p className="font-serif text-xl text-[#2C2A29]">
                  Villa Balbiano, Lake Como
                </p>
                <p className="text-xs text-[#65605C] font-light mt-1">
                  Italy, Europe
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="slide-right" duration={900} delay={150}>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold flex items-center gap-2">
                <Globe size={16} className="text-[#2C4A3E]" />
                Destination Celebrations
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29] leading-tight">
                Saying "I Do" <br />
                <span className="italic font-normal text-[#2C4A3E]">Anywhere in the World.</span>
              </h2>

              <p className="text-base text-[#65605C] font-light leading-relaxed">
                Whether you dream of a Renaissance villa in Tuscany, a sun-drenched château in Provence, or an oceanfront cliff terrace on the Amalfi Coast, our international photography experience ensures your destination session is captured with effortless fine art beauty.
              </p>

              {/* Destination tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {siteConfig.destinations.map((dest) => (
                  <span
                    key={dest.id}
                    className="text-xs uppercase tracking-wider bg-[#FDFBF7] text-[#2C4A3E] px-3.5 py-1.5 rounded-full border border-[#2C4A3E]/15 font-medium"
                  >
                    {dest.name}
                  </span>
                ))}
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/destinations')}
                  className="btn-terracotta"
                >
                  Discover Destination Photography <ArrowRight size={16} />
                </button>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
