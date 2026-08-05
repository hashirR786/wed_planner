import React from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';

interface TermsOfServiceProps {
  onNavigate: (path: string) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <>
      <SEO
        title={`Terms of Service — ${siteConfig.businessName}`}
        description={`Terms of service, booking conditions, image delivery, and usage rights for ${siteConfig.businessName} (Arun Meluha).`}
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Terms of Service"
          subtitle="Terms and conditions governing photography sessions, booking reservations, image delivery, and usage rights."
          badge="Client Agreement"
        />

        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F3EC] p-8 sm:p-12 rounded-3xl border border-[#2C4A3E]/10 space-y-8 text-[#65605C] font-light leading-relaxed">
            
            <p className="text-xs uppercase tracking-widest text-[#C87D65] font-semibold">
              Last Updated: August 2026
            </p>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">1. Booking & Session Reservations</h2>
              <p>
                A booking reservation with <strong>{siteConfig.businessName}</strong> (lead photographer <strong>{siteConfig.plannerName}</strong>) is confirmed upon agreement of session details and payment of the applicable deposit. Session packages include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Motherhood in London Maternity:</strong> £200.00 (1 Hour | 20 edited images + all raw files included).</li>
                <li><strong>Love in London Couple Shoot:</strong> £200.00 (2 Hours | 2 locations | posing guidance).</li>
                <li><strong>Preschool Portrait Session (Age 2–5):</strong> £150.00 (1 Hour outdoor | 15 edited images + styling tips).</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2C4A3E]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">2. Delivery Guarantee & Turnaround</h2>
              <p>
                We take immense pride in prompt, handcrafted post-processing. Fully edited high-resolution digital image galleries are guaranteed to be delivered within <strong>5 working days</strong> following your shoot date. Delivery is fulfilled via a private online digital gallery.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2C4A3E]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">3. Image Copyright & Usage Rights</h2>
              <p>
                {siteConfig.plannerName} retains moral and statutory copyright for all images created. Clients receive full <strong>personal printing and digital sharing rights</strong> to print, download, and share high-resolution images for non-commercial personal use.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2C4A3E]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">4. Rescheduling & Weather Conditions</h2>
              <p>
                For outdoor London landmark shoots (Westminster, Big Ben, Tower Bridge, London Eye, parks), in the event of severe inclement weather or unforeseen emergencies, session dates can be rescheduled to a mutually agreed date at no additional fee.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2C4A3E]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">5. Contact & Studio Inquiries</h2>
              <p>For any questions regarding these terms or your upcoming photography session, please reach out to us:</p>
              <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#2C4A3E]/10 space-y-2 text-sm text-[#2C2A29]">
                <p><strong>Studio:</strong> {siteConfig.businessName}</p>
                <p><strong>Photographer:</strong> {siteConfig.plannerName}</p>
                <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#C87D65] underline">{siteConfig.email}</a></p>
                <p><strong>Direct Telephone / WhatsApp:</strong> <a href={`tel:${siteConfig.phone}`} className="text-[#C87D65] underline">{siteConfig.phone}</a></p>
              </div>
            </div>

            <div className="pt-8 text-center">
              <button
                onClick={() => onNavigate('/contact')}
                className="btn-primary py-3.5 px-8 text-xs tracking-widest"
              >
                Inquire & Book Your Session
              </button>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};
