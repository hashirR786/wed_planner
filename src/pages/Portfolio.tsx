import React, { useState, useEffect } from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { Filter } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

const categoryDescriptions: Record<string, { title: string; subtitle: string; description: string }> = {
  All: {
    title: "Curated Fine Art & Milestone Stories",
    subtitle: "Complete Portfolio Collection",
    description: "Explore our complete gallery of authentic couple sessions, fine art maternity portraiture, and graduation milestone stories captured in natural light across London and worldwide."
  },
  Couples: {
    title: "Couple & Pre-Wedding Stories",
    subtitle: "Intimate Romantic Portraiture",
    description: "Intimate, cinematic couple portraiture capturing genuine emotion, laughter, and golden hour romance across iconic London streetscapes, classic architecture, and peaceful countryside settings."
  },
  Maternity: {
    title: "Fine Art Maternity Portraiture",
    subtitle: "Celebrating New Life & Motherhood",
    description: "Gentle, timeless maternity portraiture celebrating the beauty of new life, soft natural light, and quiet family connections in elegant fine-art styling."
  },
  Graduation: {
    title: "Graduation & Academic Distinction",
    subtitle: "Honoring Accomplishment & Legacy",
    description: "Triumphant and elegant graduation portraits capturing academic achievement, personal distinction, and milestone pride with fine art polish."
  },
  Preschool: {
    title: "Preschool & Early Childhood (Age 2–5)",
    subtitle: "Capturing Childhood Joy & Expression",
    description: "Magical 1-hour outdoor portrait sessions capturing your little one's unique expressions, early childhood joy, and personality in a natural, artistic style."
  }
};

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Couples', 'Maternity', 'Graduation', 'Preschool'];

  // Sync active category with URL parameter ?category=...
  useEffect(() => {
    const updateCategoryFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get('category');
      if (categoryParam && categories.includes(categoryParam)) {
        setActiveCategory(categoryParam);
      } else {
        setActiveCategory('All');
      }
    };

    updateCategoryFromUrl();
    window.addEventListener('popstate', updateCategoryFromUrl);
    return () => window.removeEventListener('popstate', updateCategoryFromUrl);
  }, []);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const newUrl = cat === 'All' ? '/portfolio' : `/portfolio?category=${cat}`;
    window.history.pushState({}, '', newUrl);
  };

  const filteredItems = activeCategory === 'All'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter((item) => item.category === activeCategory);

  const currentMeta = categoryDescriptions[activeCategory] || categoryDescriptions.All;

  return (
    <>
      <SEO
        title="Our Work & Portfolio — United Stories by Arun"
        description="A curated gallery of authentic couple sessions, fine art maternity portraiture, and graduation milestone stories in London and worldwide."
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Our Portfolio"
          subtitle="An editorial gallery of authentic love stories, maternity milestones, and graduation portraits captured across London and fine art venues."
          badge="Featured Galleries"
          backgroundImage="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=80"
        />

        {/* Portfolio Gallery Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#65605C] font-semibold mr-2 flex items-center gap-1">
              <Filter size={14} /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-xs uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#2C4A3E] text-[#FDFBF7] font-semibold shadow-lg scale-105'
                    : 'bg-[#F7F3EC] text-[#65605C] hover:bg-[#EFEAE1] hover:text-[#2C2A29]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* General Category Header Banner */}
          <div className="max-w-3xl mx-auto text-center mb-16 px-4 animate-fade-in">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C87D65] font-semibold block mb-2">
              {currentMeta.subtitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] mb-4">
              {currentMeta.title}
            </h2>
            <p className="text-sm text-[#65605C] font-light leading-relaxed">
              {currentMeta.description}
            </p>
          </div>

          {/* Clean Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-[#1A1918]"
              >
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category Badge Tag Overlay */}
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-semibold bg-[#1A1918]/80 text-[#FDFBF7] px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 z-10">
                  {item.category}
                </span>
              </div>
            ))}
          </div>

        </section>
      </main>
    </>
  );
};
