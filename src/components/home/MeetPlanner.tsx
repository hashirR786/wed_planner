import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ScrollReveal } from '../ui/ScrollReveal';

interface MeetPlannerProps {
  onNavigate: (path: string) => void;
}

export const MeetPlanner: React.FC<MeetPlannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Copy */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <ScrollReveal variant="fade-up" duration={900}>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold flex items-center gap-2">
                  <Heart size={14} className="fill-current text-[#C87D65]" />
                  Meet Creative Director
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29] leading-tight">
                  Meet {siteConfig.plannerName}
                </h2>
                <span className="font-script text-3xl text-[#2C4A3E] block pt-1">
                  Founder & Lead Planner
                </span>
              </div>

              {/* First-person warm bio */}
              <p className="text-base sm:text-lg text-[#65605C] font-light leading-relaxed italic border-l-2 border-[#C87D65] pl-4 mt-4">
                "{siteConfig.bio.shortBio}"
              </p>

              <p className="text-sm text-[#65605C] font-light leading-relaxed mt-4">
                I view every wedding as an artistic canvas. My goal is to ensure you feel entirely cherished, relaxed, and present, knowing every candle, timeline detail, and floral petal is curated with intention.
              </p>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/about')}
                  className="btn-secondary"
                >
                  Read My Story & Philosophy <ArrowRight size={16} />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Planner Portrait */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <ScrollReveal variant="scale-up" duration={900} delay={150}>
              <div className="relative max-w-md w-full">
                {/* Decorative background frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#2C4A3E]/20 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#EFEAE1] rounded-2xl -z-20" />

                <div className="rounded-2xl overflow-hidden shadow-xl img-zoom-container aspect-[3/4]">
                  <img
                    src={siteConfig.bio.photo}
                    alt={`Portrait of ${siteConfig.plannerName}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Small Overlay Badge */}
                <div className="absolute bottom-6 right-6 bg-[#FDFBF7] px-5 py-3 rounded-xl shadow-lg border border-[#2C4A3E]/10 text-center">
                  <span className="font-serif text-xl text-[#2C4A3E] block font-semibold">10+ Years</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#65605C]">Curating Luxury Celebrations</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
