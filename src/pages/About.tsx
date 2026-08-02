import React from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { Heart, Compass, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <>
      <SEO
        title={`About ${siteConfig.plannerName}`}
        description={`Learn more about ${siteConfig.plannerName}, creative director and founder of ${siteConfig.businessName}, based in ${siteConfig.location}.`}
      />

      <main className="bg-[#FDFBF7]">
        {/* Sub-Page Header */}
        <PageHeader
          title={`Meet ${siteConfig.plannerName}`}
          subtitle={siteConfig.bio.tagline}
          badge="Founder & Creative Director"
          backgroundImage={siteConfig.bio.photo}
        />

        {/* Detailed Narrative Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold flex items-center gap-2">
                <Heart size={14} className="fill-current text-[#C87D65]" />
                The Story Behind {siteConfig.businessName}
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29] leading-tight">
                Quiet Luxury, Intentional Design & Deep Heart.
              </h2>

              <p className="text-base text-[#65605C] font-light leading-relaxed">
                {siteConfig.bio.shortBio}
              </p>

              {siteConfig.bio.extendedBio.map((paragraph, idx) => (
                <p key={idx} className="text-base text-[#65605C] font-light leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 flex items-center gap-6">
                <div>
                  <span className="font-script text-4xl text-[#2C4A3E]">{siteConfig.plannerName}</span>
                  <span className="block text-xs uppercase tracking-widest text-[#65605C] mt-1">Founder & Creative Lead</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom-container aspect-[4/5] border border-[#2C4A3E]/10">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
                  alt="Wedding planning design consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Our 3-Step Planning Philosophy */}
        <section className="py-20 bg-[#F7F3EC] border-y border-[#2C4A3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold flex items-center justify-center gap-2">
                <Compass size={16} className="text-[#2C4A3E]" />
                Our Approach
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29]">
                The Three Pillars of Our Process
              </h2>
              <p className="text-base text-[#65605C] font-light">
                How we turn ambitious aesthetic visions into serene, seamlessly executed wedding weekends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#2C4A3E]/10 space-y-4 shadow-sm relative">
                <span className="font-serif text-5xl text-[#C87D65]/40 font-bold block">01</span>
                <h3 className="font-serif text-2xl text-[#2C2A29]">Vision & Art Direction</h3>
                <p className="text-sm text-[#65605C] font-light leading-relaxed">
                  We curate a cohesive color story, spatial layout, floral installation concept, and custom tactile element palette that reflects your distinct style.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#2C4A3E]/10 space-y-4 shadow-sm relative">
                <span className="font-serif text-5xl text-[#C87D65]/40 font-bold block">02</span>
                <h3 className="font-serif text-2xl text-[#2C2A29]">Curation & Alignment</h3>
                <p className="text-sm text-[#65605C] font-light leading-relaxed">
                  Connecting you with premier international photographers, Michelin-level caterers, and floral artists whose standards match your elevated expectations.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#2C4A3E]/10 space-y-4 shadow-sm relative">
                <span className="font-serif text-5xl text-[#C87D65]/40 font-bold block">03</span>
                <h3 className="font-serif text-2xl text-[#2C2A29]">Flawless Production</h3>
                <p className="text-sm text-[#65605C] font-light leading-relaxed">
                  Our on-site command team manages multi-day vendor arrivals, guest transit, and master timing so you can be completely present.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] mb-6">
            Ready to discuss your wedding vision with {siteConfig.plannerName}?
          </h2>
          <button
            onClick={() => onNavigate('/contact')}
            className="btn-primary py-4 px-8 text-xs tracking-widest"
          >
            Start the Conversation <ArrowRight size={16} />
          </button>
        </section>
      </main>
    </>
  );
};
