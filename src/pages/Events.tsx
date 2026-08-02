import React from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { ArrowRight } from 'lucide-react';

interface EventsProps {
  onNavigate: (path: string) => void;
}

export const Events: React.FC<EventsProps> = ({ onNavigate }) => {
  return (
    <>
      <SEO
        title="Luxury Events & Milestone Celebrations"
        description="Editorial event design and management for anniversary galas, rehearsal dinners, welcome parties, and private celebrations."
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Secondary Events & Galas"
          subtitle="Extending editorial artistry to anniversary galas, welcome parties, farewell brunches, and private estate gatherings."
          badge="Special Celebrations"
          backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80"
        />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.secondaryEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-[#F7F3EC] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#2C4A3E]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden img-zoom-container">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 space-y-3">
                    <h3 className="font-serif text-3xl text-[#2C2A29]">{evt.title}</h3>
                    <p className="text-sm text-[#65605C] font-light leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="btn-secondary w-full justify-center text-xs py-3.5"
                  >
                    Inquire for Event <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
