import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { Mail, Phone, MapPin, CheckCircle2, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    sessionType: 'Wedding Photography',
    date: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.names && formData.email) {
      setSubmitted(true);

      // Construct Mailto prefilled email link
      const subject = encodeURIComponent(`Photography Inquiry & Quote Request: ${formData.sessionType} — ${formData.names}`);
      const body = encodeURIComponent(
        `Hello Arun,\n\nI would like to request a quote for photography services.\n\nName(s): ${formData.names}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSession Type: ${formData.sessionType}\nTarget Date: ${formData.date}\nLocation/Venue: ${formData.location}\n\nVision & Details:\n${formData.message}\n\nThank you!`
      );
      
      // Trigger user's default email app
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <>
      <SEO
        title="Contact & Photography Quote Inquiry — United Stories by Arun"
        description={`Inquire about wedding photography, couple sessions, maternity, and graduation portraiture with ${siteConfig.businessName} in ${siteConfig.location} and worldwide.`}
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Inquire & Request a Quote"
          subtitle="We take a select number of wedding, couple, and milestone sessions each year to ensure every story receives our dedicated artistry and focus."
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
                    We have received your photography quote inquiry. {siteConfig.plannerName} will review your details and reach out within 24 business hours.
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
                      Tell Us About Your Vision
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
                        placeholder="hello@example.com"
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
                        placeholder="+44 7000 000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Session Category
                      </label>
                      <select
                        value={formData.sessionType}
                        onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      >
                        <option value="Wedding Photography">Wedding Photography</option>
                        <option value="Couple & Pre-Wedding Session">Couple & Pre-Wedding Session</option>
                        <option value="Maternity Portraiture">Fine Art Maternity Shoot</option>
                        <option value="Graduation Milestone">Graduation Milestone</option>
                        <option value="Destination Elopement">Destination Elopement</option>
                        <option value="Other Fine Art Session">Other Fine Art Session</option>
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
                    className="w-full btn-terracotta justify-center py-4 text-xs tracking-[0.2em] flex items-center gap-2"
                  >
                    <Send size={15} /> Send Inquiry & Request Quote
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Studio Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#2C4A3E] text-[#FDFBF7] p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl">
                <div>
                  <img
                    src="/Gemini_Generated_Image_rye0vdrye0vdrye0-removebg-preview.png"
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
                      <span>Monday – Friday: 9:00 AM – 6:00 PM</span>
                      <span className="block text-xs text-white/60">Weekends dedicated to client photography sessions</span>
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
