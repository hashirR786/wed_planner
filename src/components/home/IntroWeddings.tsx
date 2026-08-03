import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AnimatedCounter } from '../ui/AnimatedCounter';

interface IntroWeddingsProps {
  onNavigate: (path: string) => void;
}

export const IntroWeddings: React.FC<IntroWeddingsProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-[#2C4A3E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" duration={900}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Editorial Badge */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold block">
                Signature Photography
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29] leading-tight">
                Authentic Stories, <br />
                <span className="italic font-normal text-[#2C4A3E]">Cinematically Preserved.</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#C87D65]" />
            </div>

            {/* Right Column: Short Paragraph + Animated Stats Counters + CTA */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-[#65605C] font-light leading-relaxed">
                Based in {siteConfig.location}, United Stories by Arun specializes in cinematic, emotional, and fine art wedding and couple photography. From grand London venue celebrations to intimate milestone sessions like maternity and graduation, we document honest human connection with artistic heart.
              </p>

              {/* Animated Stats Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#2C4A3E]/10">
                <div className="space-y-1">
                  <AnimatedCounter
                    end={150}
                    suffix="+"
                    className="font-serif text-4xl text-[#2C4A3E] font-medium block"
                  />
                  <span className="text-xs text-[#65605C] font-light uppercase tracking-wider block">Stories Documented</span>
                </div>
                <div className="space-y-1">
                  <AnimatedCounter
                    end={12}
                    suffix="+"
                    className="font-serif text-4xl text-[#2C4A3E] font-medium block"
                  />
                  <span className="text-xs text-[#65605C] font-light uppercase tracking-wider block">Global Destinations</span>
                </div>
                <div className="space-y-1">
                  <AnimatedCounter
                    end={10}
                    suffix="+"
                    className="font-serif text-4xl text-[#2C4A3E] font-medium block"
                  />
                  <span className="text-xs text-[#65605C] font-light uppercase tracking-wider block">Years of Artistry</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/weddings')}
                  className="btn-primary"
                >
                  Explore Photography Offerings <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
