import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { Check, HelpCircle, ChevronDown, Calculator, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Package Calculator State
  const [guestCount, setGuestCount] = useState<string>('100-150');
  const [eventDuration, setEventDuration] = useState<string>('Single Day');

  const faqs = [
    {
      q: "How far in advance should we book your wedding planning services?",
      a: "We recommend booking 10 to 16 months prior to your desired wedding date, especially for destination weddings in Italy or France. However, we occasionally accommodate shorter timelines depending on availability."
    },
    {
      q: "How many weddings does your studio take each year?",
      a: "To ensure every couple receives our undivided creative focus, prompt communication, and flawless on-site presence, we strictly cap our annual intake to 10-12 celebrations per calendar year."
    },
    {
      q: "Do you travel for destination weddings?",
      a: "Absolutely. Over half of our annual portfolio comprises destination celebrations across Lake Como, Provence, Amalfi, Napa Valley, and Caribbean estates."
    },
    {
      q: "Can we customize a package if our needs don't fit standard tiers?",
      a: "Yes! Every love story and venue is unique. Following our initial discovery call, we prepare a custom proposal tailored precisely to your guest count, multi-day schedule, and design ambitions."
    }
  ];

  return (
    <>
      <SEO
        title="Wedding Planning Services & Pricing"
        description="Comprehensive full planning, editorial design, and destination wedding orchestration by [BUSINESS NAME]."
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Wedding Services & Offerings"
          subtitle="Bespoke planning, editorial styling, and global event orchestration tailored to your aesthetic."
          badge="White Glove Experience"
          backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
        />

        {/* 3 Primary Service Cards */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className={`bg-[#F7F3EC] rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                  service.badge ? 'border-[#2C4A3E] shadow-xl' : 'border-[#2C4A3E]/10 shadow-sm'
                }`}
              >
                {service.badge && (
                  <span className="absolute -top-3.5 left-8 bg-[#2C4A3E] text-[#FDFBF7] text-[10px] uppercase tracking-widest font-semibold px-4 py-1 rounded-full">
                    {service.badge}
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-3xl text-[#2C2A29] mb-2">{service.title}</h3>
                    <p className="text-xs text-[#65605C] font-light leading-relaxed">{service.subtitle}</p>
                  </div>

                  <div className="pt-2 border-t border-[#2C4A3E]/10">
                    <span className="text-xs uppercase tracking-widest text-[#C87D65] block font-medium">Starting Investment</span>
                    <span className="font-serif text-2xl text-[#2C4A3E] font-semibold">{service.priceStarting}</span>
                  </div>

                  <p className="text-sm text-[#65605C] font-light leading-relaxed">{service.description}</p>

                  <div className="space-y-2.5 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2A29]">What's Included:</span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#65605C] font-light">
                        <Check size={14} className="text-[#2C4A3E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className={`w-full py-3.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all ${
                      service.badge ? 'btn-primary justify-center' : 'btn-secondary justify-center'
                    }`}
                  >
                    Inquire About Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Custom Bespoke Estimator Tool */}
        <section className="py-20 bg-[#F7F3EC] border-y border-[#2C4A3E]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C87D65] font-semibold flex items-center justify-center gap-2">
                <Calculator size={16} className="text-[#2C4A3E]" />
                Interactive Guidance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2A29]">
                Find Your Service Match
              </h2>
              <p className="text-sm text-[#65605C] font-light">
                Select your celebration parameters to see our recommended planning scope.
              </p>
            </div>

            <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-[#2C4A3E]/10 space-y-6 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">Estimated Guest Count</label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full bg-[#F7F3EC] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none"
                  >
                    <option value="Under 50">Under 50 (Intimate)</option>
                    <option value="50-100">50 - 100 Guests</option>
                    <option value="100-150">100 - 150 Guests</option>
                    <option value="150+">150+ Grand Celebration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">Event Duration</label>
                  <select
                    value={eventDuration}
                    onChange={(e) => setEventDuration(e.target.value)}
                    className="w-full bg-[#F7F3EC] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none"
                  >
                    <option value="Single Day">Single Day Wedding</option>
                    <option value="2 Days">2 Days (Welcome Party + Wedding)</option>
                    <option value="3+ Days Weekend">3+ Days Full Weekend Experience</option>
                  </select>
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="p-6 bg-[#2C4A3E] text-[#FDFBF7] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E09F87] font-semibold">Recommended Package</span>
                  <h4 className="font-serif text-2xl text-white">
                    {eventDuration.includes('3+')
                      ? 'Destination & Multi-Day Celebrations'
                      : guestCount === 'Under 50'
                      ? 'Design & Partial Orchestration'
                      : 'Full Planning & Editorial Design'}
                  </h4>
                </div>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="btn-terracotta text-xs py-3 px-6 shrink-0"
                >
                  Request Exact Proposal <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C87D65] font-semibold flex items-center justify-center gap-2">
              <HelpCircle size={16} className="text-[#2C4A3E]" />
              Questions & Answers
            </span>
            <h2 className="font-serif text-4xl text-[#2C2A29]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-2xl border border-[#2C4A3E]/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-serif text-xl text-[#2C2A29] focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#C87D65] transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm text-[#65605C] font-light leading-relaxed animate-fade-in border-t border-[#2C4A3E]/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
