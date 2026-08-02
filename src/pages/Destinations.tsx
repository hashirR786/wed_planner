import React from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { Globe, Plane, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface DestinationsProps {
  onNavigate: (path: string) => void;
}

export const Destinations: React.FC<DestinationsProps> = ({ onNavigate }) => {
  return (
    <>
      <SEO
        title="Destination Weddings — Italy, France & Worldwide"
        description="Bespoke luxury destination wedding planning for international couples in Lake Como, Provence, Amalfi Coast, and beyond."
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Destination Weddings"
          subtitle="Creating unforgettable multi-day weekend experiences in iconic landscapes across Europe and worldwide."
          badge="Global Portfolio"
          backgroundImage="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80"
        />

        {/* Global Destinations Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold flex items-center justify-center gap-2">
              <Globe size={16} className="text-[#2C4A3E]" />
              Featured Regions
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29]">
              Where Romance Meets Destination Luxury
            </h2>
            <p className="text-base text-[#65605C] font-light">
              We handle every bilingual vendor contract, villa permit, boat transport, and guest itinerary so you can focus on savoring the moment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {siteConfig.destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-[#F7F3EC] rounded-3xl overflow-hidden shadow-lg border border-[#2C4A3E]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden img-zoom-container">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 right-4 bg-[#2C4A3E] text-[#FDFBF7] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {dest.region}
                    </span>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C87D65] font-semibold">
                      <MapPin size={14} /> {dest.region}
                    </div>
                    <h3 className="font-serif text-3xl text-[#2C2A29]">{dest.name}</h3>
                    <p className="text-sm text-[#65605C] font-light leading-relaxed">{dest.description}</p>

                    <div className="pt-4 border-t border-[#2C4A3E]/10 space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2A29]">Regional Highlights:</span>
                      {dest.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#65605C] font-light">
                          <CheckCircle size={14} className="text-[#2C4A3E]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="btn-terracotta w-full justify-center text-xs py-3.5"
                  >
                    Inquire for {dest.name} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Destination Logistics Capabilities */}
        <section className="py-20 bg-[#2C4A3E] text-[#FDFBF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#E09F87] font-semibold flex items-center gap-2">
                  <Plane size={16} /> Global Expertise
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#FDFBF7] leading-tight">
                  Seamless Multi-Day Travel & Logistics Curation
                </h2>
                <p className="text-base text-white/80 font-light leading-relaxed">
                  Planning an international destination celebration requires more than beautiful styling. It requires mastering local regulations, flight transfer arrangements, bilingual contracts, and cultural etiquette.
                </p>
                <div className="space-y-3 pt-2 text-sm text-white/90 font-light">
                  <p className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E09F87]" />
                    On-site production deployment 3 days prior to wedding weekend.
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E09F87]" />
                    Dedicated guest concierge app & printed welcome itineraries.
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E09F87]" />
                    Private boat, vintage car & shuttle fleet management.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 text-center bg-white/5 p-10 rounded-3xl border border-white/10 space-y-6">
                <h3 className="font-serif text-3xl text-white">Ready for a Global Celebration?</h3>
                <p className="text-sm text-white/70 font-light">
                  Share your dream destination and event dates with our studio team.
                </p>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="btn-terracotta py-4 px-8 text-xs tracking-widest"
                >
                  Plan Your Destination Wedding
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};
