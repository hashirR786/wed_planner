import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { getAssetUrl } from '../utils/asset';
import { Mail, Phone, MapPin, CheckCircle2, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    sessionType: 'Motherhood in London – Maternity (£200)',
    date: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.names || !formData.email) return;

    setIsSubmitting(true);

    const emailSubject = `New Session Inquiry: ${formData.sessionType} — ${formData.names}`;
    const emailBody = `Name(s): ${formData.names}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSession Package: ${formData.sessionType}\nTarget Date: ${formData.date}\nLocation: ${formData.location}\n\nVision & Details:\n${formData.message}`;

    try {
      // Send automated background email via FormSubmit AJAX directly to info@unitedstoriesbyarun.co.uk
      await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _captcha: 'false',
          name: formData.names,
          email: formData.email,
          phone: formData.phone,
          sessionPackage: formData.sessionType,
          targetDate: formData.date,
          location: formData.location,
          details: formData.message,
        })
      });
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);

      // Also trigger mailto as fallback so client's mail app opens prefilled
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <>
      <SEO
        title="Contact & Book a Session — United Stories by Arun"
        description={`Inquire about maternity photoshoot, couple sessions, and preschool portraits with ${siteConfig.businessName} in ${siteConfig.location}. Edited images delivered within 5 working days.`}
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Inquire & Book Your Session"
          subtitle="Storytelling photography capturing authentic moments, passion, and culture across London & the UK. Edited images delivered within 5 working days."
          badge="Reserve Your Session"
          backgroundImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80"
        />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#F7F3EC] p-8 sm:p-12 rounded-3xl border border-[#2C4A3E]/10 shadow-lg">
              {submitted ? (
                <div className="text-center py-16 space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-[#2C4A3E] text-[#FDFBF7] rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2A29]">
                    Thank You, {formData.names}!
                  </h3>
                  <p className="text-base text-[#65605C] font-light max-w-md mx-auto leading-relaxed">
                    We have received your session inquiry. {siteConfig.plannerName} will review your details and reach out shortly. Edited images guaranteed within 5 working days!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary py-3 px-8 text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C87D65] font-semibold block mb-1">
                      Photography Inquiry
                    </span>
                    <h3 className="font-serif text-3xl text-[#2C2A29]">
                      Tell Us About Your Session
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Your Name / Couple Names *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Genevieve & Alexander"
                        value={formData.names}
                        onChange={(e) => setFormData({ ...formData, names: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="info@unitedstoriesbyarun.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7769 500815"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Session Package
                      </label>
                      <select
                        value={formData.sessionType}
                        onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      >
                        <option value="Motherhood in London – Maternity (£200)">Motherhood in London – Maternity (£200.00)</option>
                        <option value="Love in London – Couple Photoshoot (£200)">Love in London – Couple Shoot (£200.00)</option>
                        <option value="Preschool Portrait Session Age 2–5 (£150)">Preschool Portrait Session (£150.00)</option>
                        <option value="Custom Wedding & Event Story">Custom Wedding & Celebration</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Target Date
                      </label>
                      <input
                        type="text"
                        placeholder="Month / Year or Exact Date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Desired Location / Venue
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. London, Lake Como, Paris, Oxford"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                      Your Vision & Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share a few details about your vision, aesthetic preferences, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl p-4 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-terracotta justify-center py-4 text-xs tracking-[0.2em] flex items-center gap-2 disabled:opacity-50"
                  >
                    <Send size={15} /> {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry & Request Quote'}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Studio Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#2C4A3E] text-[#FDFBF7] p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl">
                <div>
                  <img
                    src={getAssetUrl("/Gemini_Generated_Image_rye0vdrye0vdrye0-removebg-preview.png")}
                    alt="United Stories by Arun"
                    className="h-16 w-auto object-contain filter brightness-0 invert"
                  />
                  <span className="text-xs uppercase tracking-widest text-[#E09F87] block mt-2">
                    {siteConfig.location} Photography Studio
                  </span>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10 text-sm font-light">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#E09F87] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-white block">Studio Location</span>
                      <span>{siteConfig.location} (By Appointment Only)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#E09F87] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-white block">Direct Email</span>
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-[#E09F87] transition-colors">{siteConfig.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-[#E09F87] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-white block">Studio Telephone</span>
                      <a href={`tel:${siteConfig.phone}`} className="hover:text-[#E09F87] transition-colors">{siteConfig.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-[#E09F87] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-white block">Studio Hours</span>
                      <span>Monday – Sunday: 09:00 – 18:00</span>
                      <span className="block text-xs text-white/60">Sessions available by appointment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Note Box */}
              <div className="bg-[#F7F3EC] p-8 rounded-3xl border border-[#2C4A3E]/10 space-y-4">
                <h4 className="font-serif text-2xl text-[#2C2A29]">A Personal Note from {siteConfig.plannerName}</h4>
                <p className="text-sm text-[#65605C] font-light leading-relaxed italic">
                  "I review every inquiry personally. Whether you are planning a destination wedding, a London couple session, or celebrating a family milestone, I look forward to creating authentic, fine art imagery for you."
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};
