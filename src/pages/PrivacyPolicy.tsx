import React from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';

interface PrivacyPolicyProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <>
      <SEO
        title={`Privacy Policy — ${siteConfig.businessName}`}
        description={`Privacy policy and data protection practices for ${siteConfig.businessName} (Arun Meluha), based in ${siteConfig.location}.`}
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Privacy Policy"
          subtitle="How we collect, protect, and respect your personal information and photography session data."
          badge="Legal & Transparency"
        />

        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F7F3EC] p-8 sm:p-12 rounded-3xl border border-[#2C4A3E]/10 space-y-8 text-[#65605C] font-light leading-relaxed">
            
            <p className="text-xs uppercase tracking-widest text-[#C87D65] font-semibold">
              Last Updated: August 2026
            </p>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">1. Introduction</h2>
              <p>
                Welcome to <strong>{siteConfig.businessName}</strong> ("we", "our", or "us"), owned and operated by lead photographer <strong>{siteConfig.plannerName}</strong>. We are committed to safeguarding the privacy and personal data of our clients and site visitors in accordance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2C4A3E]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">2. Information We Collect</h2>
              <p>We collect personal information that you voluntarily provide when inquiring about or booking photography sessions. This includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Details:</strong> Name(s), email address, phone number, and postal location.</li>
                <li><strong>Session Details:</strong> Target dates, preferred shoot locations, milestone events (maternity, couple, preschool, wedding), and personal styling/vision preferences.</li>
                <li><strong>Imagery & Media:</strong> Photographs and digital files captured during booked sessions.</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2C4A3E]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">3. How We Use Your Data</h2>
              <p>Your personal data is used solely for the legitimate business purposes of:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responding to quote inquiries and fulfilling booked photography sessions.</li>
                <li>Delivering high-resolution online digital galleries (guaranteed within 5 working days).</li>
                <li>Sending essential session details, contract agreements, and invoice receipts.</li>
                <li>Portfolio showcase on our website and social media (only with your explicit consent).</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2C4A3E]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">4. Private Gallery Security & Image Storage</h2>
              <p>
                All final client image galleries are hosted via password-protected online client portals. High-resolution raw and edited image backups are safely stored on encrypted storage servers. We do not sell or trade your data or photographs to third-party advertisers.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2C4A3E]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29]">5. Your Rights & Contact Information</h2>
              <p>Under UK data protection laws, you have the right to access, rectify, or request deletion of your personal data at any time. For privacy inquiries or data removal requests, please contact us:</p>
              <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#2C4A3E]/10 space-y-2 text-sm text-[#2C2A29]">
                <p><strong>Studio:</strong> {siteConfig.businessName}</p>
                <p><strong>Photographer:</strong> {siteConfig.plannerName}</p>
                <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#C87D65] underline">{siteConfig.email}</a></p>
                <p><strong>Phone / WhatsApp:</strong> <a href={`tel:${siteConfig.phone}`} className="text-[#C87D65] underline">{siteConfig.phone}</a></p>
              </div>
            </div>

            <div className="pt-8 text-center">
              <button
                onClick={() => onNavigate('/contact')}
                className="btn-primary py-3.5 px-8 text-xs tracking-widest"
              >
                Inquire or Get in Touch
              </button>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};
