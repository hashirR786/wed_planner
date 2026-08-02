import React, { useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#1A1918] text-[#FDFBF7] pt-20 pb-12 border-t border-[#2C4A3E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="font-serif text-3xl tracking-widest uppercase block text-white">
                {siteConfig.businessName}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] block mt-1">
                Luxury Wedding & Event Studio — {siteConfig.location}
              </span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-md font-light">
              Designing bespoke editorial weddings and destination celebrations for couples seeking quiet luxury, intentional art direction, and unforgettable moments.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={`https://${siteConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#C87D65] hover:bg-[#C87D65]/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`https://${siteConfig.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#C87D65] hover:bg-[#C87D65]/10 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href={`https://${siteConfig.pinterest}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-[#C87D65] hover:bg-[#C87D65]/10 transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#C87D65] tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-light">
              <li>
                <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">About {siteConfig.plannerName}</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/weddings')} className="hover:text-white transition-colors">Wedding Services</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-white transition-colors">Destinations</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/portfolio')} className="hover:text-white transition-colors">Our Work Portfolio</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/events')} className="hover:text-white transition-colors">Secondary Events</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#C87D65] tracking-wider uppercase">Studio Contact</h4>
            <ul className="space-y-3 text-sm text-white/70 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#C87D65]">Location:</span>
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C87D65]">Email:</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C87D65]">Phone:</span>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="text-xs uppercase tracking-widest text-[#C87D65] underline underline-offset-4 hover:text-white transition-colors"
                >
                  Schedule Consultation →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Journal & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#C87D65] tracking-wider uppercase">The Journal</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Subscribe to receive curated editorial wedding advice, color trend previews, and destination guides directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/20 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C87D65] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 w-8 h-8 rounded-full bg-[#C87D65] text-white flex items-center justify-center hover:bg-[#A9624C] transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={14} />
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-[#C87D65] italic animate-fade-in flex items-center gap-1">
                  <Heart size={12} className="inline fill-current" /> Thank you for subscribing to our journal!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('/privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => onNavigate('/terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <span>•</span>
            <span className="text-[#C87D65]">Designed for Modern Elegance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
