import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPath === '/';

  // Mega-menu popups data
  const popups: Record<string, { title: string; items: { label: string; sub: string; path: string }[] }> = {
    '/weddings': {
      title: 'Our Photography Collections',
      items: [
        { label: 'Motherhood in London Maternity (£200)', sub: '1-Hour session at Central London landmarks', path: '/weddings' },
        { label: 'Love in London Couple Shoot (£200)', sub: '2-Hour session across 2 Central London locations', path: '/portfolio?category=Couples' },
        { label: 'Preschool Portrait Session (£150)', sub: 'Magical 1-hour outdoor shoot for ages 2–5', path: '/weddings' },
      ],
    },
    '/portfolio': {
      title: 'Featured Galleries',
      items: [
        { label: 'Love in London (Couple Sessions)', sub: 'Central London romantic portraiture', path: '/portfolio?category=Couples' },
        { label: 'Motherhood in London (Maternity)', sub: 'Westminster, Big Ben & Tower Bridge shoots', path: '/portfolio?category=Maternity' },
        { label: 'Preschool & Milestone Portraits', sub: 'Early childhood joy & personality', path: '/portfolio?category=Graduation' },
      ],
    },
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Weddings', path: '/weddings', hasPopup: true },
    { name: 'Our Work', path: '/portfolio', hasPopup: true },
    { name: 'Events', path: '/events' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-header-scrolled py-2.5 text-[#2C2A29] opacity-100'
            : isHome
            ? 'opacity-0 pointer-events-none py-4'
            : 'bg-[#FDFBF7]/95 backdrop-blur-md py-3.5 text-[#2C2A29] border-b border-[#2C4A3E]/10 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Logo — transparent PNG (removebg) */}
            <button
              onClick={() => onNavigate('/')}
              className="text-left group focus:outline-none transition-transform duration-300 hover:scale-[1.03]"
              aria-label="United Stories by Arun"
            >
              <img
                src="/Gemini_Generated_Image_rye0vdrye0vdrye0-removebg-preview.png"
                alt="United Stories by Arun"
                style={{
                  height: '110px',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'all 0.3s',
                  filter: isScrolled || !isHome ? 'brightness(0)' : 'brightness(0) invert(1)',
                }}
              />
            </button>


            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                const hasPopup = link.hasPopup && popups[link.path];

                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => hasPopup && setActiveDropdown(link.path)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => onNavigate(link.path)}
                      className={`text-xs font-medium uppercase tracking-[0.15em] transition-all py-2.5 px-1 flex items-center gap-1 nav-link-hover ${
                        isActive
                          ? 'font-semibold text-[#C87D65]'
                          : isScrolled || !isHome
                          ? 'text-[#2C2A29] hover:text-[#C87D65]'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {hasPopup && (
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.path ? 'rotate-180 text-[#C87D65]' : 'opacity-70'
                          }`}
                        />
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C87D65] rounded-full animate-fade-in" />
                      )}
                    </button>

                    {/* Popover Dropdown Popup on Hover */}
                    {hasPopup && activeDropdown === link.path && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50 animate-nav-popup">
                        <div className="bg-[#FDFBF7] text-[#2C2A29] rounded-2xl p-5 shadow-2xl border border-[#2C4A3E]/15 backdrop-blur-xl">
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2C4A3E]/10">
                            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C87D65]">
                              {popups[link.path].title}
                            </span>
                          </div>

                          <div className="space-y-3">
                            {popups[link.path].items.map((item, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  onNavigate(item.path);
                                  setActiveDropdown(null);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-[#F7F3EC] transition-colors group/item flex items-start justify-between"
                              >
                                <div>
                                  <span className="block text-xs font-semibold text-[#2C2A29] group-hover/item:text-[#C87D65] transition-colors">
                                    {item.label}
                                  </span>
                                  <span className="block text-[10px] text-[#65605C] font-light mt-0.5">
                                    {item.sub}
                                  </span>
                                </div>
                                <ArrowRight size={12} className="text-[#C87D65] opacity-0 group-hover/item:opacity-100 transition-opacity mt-1" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center ml-4">
              <button
                onClick={() => onNavigate('/contact')}
                className={`text-xs uppercase tracking-[0.2em] font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                  isScrolled || !isHome
                    ? 'bg-[#2C4A3E] text-[#FDFBF7] hover:bg-[#3B5E50] shadow-md hover:shadow-xl hover:-translate-y-0.5'
                    : 'bg-[#C87D65] text-white hover:bg-[#A9624C] shadow-lg hover:-translate-y-0.5'
                }`}
              >
                Inquire Now
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md focus:outline-none transition-colors ${
                  isScrolled || !isHome ? 'text-[#2C2A29]' : 'text-white'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FDFBF7] animate-fade-in">
          {/* Header Inside Mobile Drawer */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#2C4A3E]/10">
            <div>
              <img
                src="/Gemini_Generated_Image_rye0vdrye0vdrye0-removebg-preview.png"
                alt="United Stories by Arun"
                style={{
                  height: '80px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0)',
                }}
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#2C2A29] hover:text-[#C87D65] focus:outline-none"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col justify-center space-y-5 text-center">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => {
                    onNavigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`font-serif text-2xl tracking-wider transition-colors ${
                    isActive ? 'text-[#C87D65] italic font-semibold' : 'text-[#2C2A29] hover:text-[#2C4A3E]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <div className="pt-6 border-t border-[#2C4A3E]/10 flex flex-col items-center space-y-4">
              <button
                onClick={() => {
                  onNavigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full btn-terracotta justify-center text-center py-3.5 text-xs tracking-widest"
              >
                Book a Consultation
              </button>

              <div className="flex items-center space-x-6 pt-4 text-xs text-[#65605C]">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 hover:text-[#2C4A3E]">
                  <Mail size={14} /> Email Studio
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1 hover:text-[#2C4A3E]">
                  <Phone size={14} /> Call Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
