import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { Mail, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    coupleNames: '',
    email: '',
    phone: '',
    weddingDate: '',
    location: '',
    budget: '$75k - $125k',
    guestCount: '100 - 150',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.coupleNames && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title="Contact & Consultation Booking"
        description={`Inquire about luxury wedding planning services with ${siteConfig.businessName} in ${siteConfig.location} and destination locations worldwide.`}
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Inquire With Our Studio"
          subtitle="We take a select number of weddings each year to ensure every celebration receives our dedicated heart and artistry."
          badge="Reserve Your Date"
          backgroundImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80"
        />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-[#F7F3EC] p-8 sm:p-12 rounded-3xl border border-[#2C4A3E]/10 shadow-lg">
              {submitted ? (
                <div className="text-center py-16 space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-[#2C4A3E] text-[#FDFBF7] rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2A29]">
                    Thank You, {formData.coupleNames}!
                  </h3>
                  <p className="text-base text-[#65605C] font-light max-w-md mx-auto leading-relaxed">
                    We have received your inquiry for <span className="font-medium text-[#2C2A29]">{formData.location || 'your celebration'}</span>. {siteConfig.plannerName} and our team will review your details and reach out within 24 business hours to schedule your private consultation.
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
                      Let's Begin
                    </span>
                    <h3 className="font-serif text-3xl text-[#2C2A29]">
                      Tell Us About Your Love Story
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Couple Names *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Genevieve & Alexander"
                        value={formData.coupleNames}
                        onChange={(e) => setFormData({ ...formData, coupleNames: e.target.value })}
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
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Target Wedding Date
                      </label>
                      <input
                        type="text"
                        placeholder="Month / Year or Exact Date"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Venue or Desired Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lake Como, Provence, or Local Estate"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl px-4 py-3 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                      >
                        <option value="$50k - $75k">$50,000 - $75,000</option>
                        <option value="$75k - $125k">$75,000 - $125,000</option>
                        <option value="$125k - $250k">$125,000 - $250,000</option>
                        <option value="$250k+">$250,000+ Luxury Estate</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#2C2A29] mb-2">
                      Your Vision & Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share a few words about your overall wedding aesthetic, priorities, or favorite details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FDFBF7] border border-[#2C4A3E]/20 rounded-xl p-4 text-xs text-[#2C2A29] focus:outline-none focus:border-[#2C4A3E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-terracotta justify-center py-4 text-xs tracking-[0.2em]"
                  >
                    Send Studio Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Studio Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#2C4A3E] text-[#FDFBF7] p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl">
                <div>
                  <span className="font-serif text-3xl uppercase tracking-widest block text-white">
                    {siteConfig.businessName}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#E09F87] block mt-1">
                    {siteConfig.location} Headquarters
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
                      <span className="block text-xs text-white/60">Weekends dedicated to our couples on-site</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Note Box */}
              <div className="bg-[#F7F3EC] p-8 rounded-3xl border border-[#2C4A3E]/10 space-y-4">
                <h4 className="font-serif text-2xl text-[#2C2A29]">A Personal Note from {siteConfig.plannerName}</h4>
                <p className="text-sm text-[#65605C] font-light leading-relaxed italic">
                  "I read every inquiry personally. Whether your wedding is taking place next season or in two years, we look forward to crafting an unforgettable celebration together."
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};
