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
        title={`About ${siteConfig.plannerName} — United Stories by Arun`}
        description={`Learn more about ${siteConfig.plannerName}, lead photographer and founder of ${siteConfig.businessName}, based in ${siteConfig.location}.`}
      />

      <main className="bg-[#FDFBF7]">
        {/* Sub-Page Header */}
        <PageHeader
          title={`Meet ${siteConfig.plannerName}`}
          subtitle={siteConfig.bio.tagline}
          badge="Founder & Lead Photographer"
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
                Cinematic Light, Authentic Connection & Fine Art Artistry.
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
                  <span className="block text-xs uppercase tracking-widest text-[#65605C] mt-1">Founder & Lead Photographer</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom-container aspect-[4/5] border border-[#2C4A3E]/10">
                <img
                  src={siteConfig.bio.photo}
                  alt={`Portrait of ${siteConfig.plannerName}`}
                  className="w-full h-full object-cover brightness-105 contrast-105"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Our 3-Pillar Photography Philosophy */}
        <section className="py-20 bg-[#F7F3EC] border-y border-[#2C4A3E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold flex items-center justify-center gap-2">
                <Compass size={16} className="text-[#2C4A3E]" />
                Our Photography Approach
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29]">
                The Three Pillars of Our Artistry
              </h2>
              <p className="text-base text-[#65605C] font-light">
                How we capture emotional, fine art imagery that feels honest, artistic, and timeless.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#2C4A3E]/10 space-y-4 shadow-sm relative">
                <span className="font-serif text-5xl text-[#C87D65]/40 font-bold block">01</span>
                <h3 className="font-serif text-2xl text-[#2C2A29]">Connection & Comfort</h3>
                <p className="text-sm text-[#65605C] font-light leading-relaxed">
                  Establishing genuine rapport so you feel completely relaxed, present, and free to be yourselves in front of the lens.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#2C4A3E]/10 space-y-4 shadow-sm relative">
                <span className="font-serif text-5xl text-[#C87D65]/40 font-bold block">02</span>
                <h3 className="font-serif text-2xl text-[#2C2A29]">Light & Composition</h3>
                <p className="text-sm text-[#65605C] font-light leading-relaxed">
                  Harnessing natural golden hour warmth, classic stone shadow play, and fine-art framing for poetic visual storytelling.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#2C4A3E]/10 space-y-4 shadow-sm relative">
                <span className="font-serif text-5xl text-[#C87D65]/40 font-bold block">03</span>
                <h3 className="font-serif text-2xl text-[#2C2A29]">Storytelling & Curation</h3>
                <p className="text-sm text-[#65605C] font-light leading-relaxed">
                  Handcrafting rich filmic color grading and delivering full high-resolution digital galleries and handcrafted leather print albums.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] mb-6">
            Ready to discuss your photography session with {siteConfig.plannerName}?
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
