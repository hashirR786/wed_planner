import React from 'react';
import { Heart, Calendar } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ContactBannerProps {
  onNavigate: (path: string) => void;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale-up" duration={900}>
          <div className="bg-[#2C4A3E] text-[#FDFBF7] rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl">
            
            {/* Background Decorative Accent */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#C87D65]/20 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#E09F87] font-semibold bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <Heart size={14} className="fill-current text-[#E09F87]" />
                Limited Annual Intake
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FDFBF7] font-normal leading-tight">
                Let's Create Something <br />
                <span className="italic text-[#E09F87]">Truly Extraordinary Together.</span>
              </h2>

              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                Now reserving select dates for 2026 & 2027 celebrations in {siteConfig.location} and destinations worldwide. We would love to hear your love story.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="btn-terracotta py-4 px-8 text-xs tracking-[0.2em] animate-pulse-glow"
                >
                  <Calendar size={16} /> Schedule Your Consultation
                </button>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn-secondary text-white border-white/40 hover:bg-white hover:text-[#2C2A29] py-4 px-8 text-xs tracking-[0.2em]"
                >
                  Email Studio Directly
                </a>
              </div>

              <p className="text-xs text-white/50 pt-4 font-mono">
                Typical response time: within 24 business hours
              </p>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
