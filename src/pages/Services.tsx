import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { Check, HelpCircle, ChevronDown } from 'lucide-react';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How far in advance should we book our photography session?",
      a: "We recommend booking your London couple session, maternity shoot, or preschool portrait 2 to 4 weeks in advance. For weddings and special celebrations, we recommend booking 3 to 6 months in advance to secure your preferred date."
    },
    {
      q: "What is included in your maternity, couple, and preschool session packages?",
      a: "Our Motherhood in London Maternity shoot (£200.00) includes a 1-hour photoshoot at Central London landmarks (Westminster, Big Ben, Tower Bridge, London Eye & more), 20 edited images + ALL raw files included. Our Love in London Couple shoot (£200.00) includes 2 hours across 2 locations with full posing help. Our Preschool shoot (£150.00) includes a 1-hour outdoor shoot with 15 edited images and styling tips."
    },
    {
      q: "Do you travel for sessions outside Central London?",
      a: "Yes! While our popular sessions highlight iconic Central London landmarks (Westminster, Big Ben, Tower Bridge, London Eye), we regularly photograph couple, maternity, and milestone sessions across the UK and international locations."
    },
    {
      q: "How and when will we receive our final photography gallery?",
      a: "All high-resolution edited images are delivered in your private online gallery within 5 working days! For maternity shoots, all raw images are also included with your delivery."
    }
  ];

  return (
    <>
      <SEO
        title="Photography Offerings & Pricing — United Stories by Arun"
        description={`Cinematic wedding, couple, maternity, and graduation photography collections by ${siteConfig.businessName} in ${siteConfig.location} and worldwide.`}
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Photography Offerings"
          subtitle="Bespoke wedding photography, intimate couple sessions, fine-art maternity portraiture, and graduation milestone coverage."
          badge="Signature Collections"
          backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
        />

        {/* 3 Primary Photography Service Cards */}
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
                    <span className="font-serif text-2xl text-[#2C2A29] font-semibold">{service.priceStarting}</span>
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
                    Inquire About Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#2C4A3E]/10">
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
