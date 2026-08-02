import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig, type PortfolioItem } from '../config/siteConfig';
import { ImageModal } from '../components/ui/ImageModal';
import { Eye, Filter } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Coastal', 'Estate', 'European', 'Intimate', 'Modern'];

  const filteredItems = activeCategory === 'All'
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Our Work — Real Wedding Portfolio"
        description="Explore real wedding stories, editorial styling moodboards, and destination celebrations designed by [BUSINESS NAME]."
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="Our Work & Gallery"
          subtitle="A curated portfolio of editorial celebrations, luxury tablescapes, and timeless love stories."
          badge="Real Weddings"
          backgroundImage="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=80"
        />

        {/* Portfolio Gallery Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-[#65605C] font-semibold mr-2 flex items-center gap-1">
              <Filter size={14} /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#2C4A3E] text-[#FDFBF7] font-semibold shadow-md'
                    : 'bg-[#F7F3EC] text-[#65605C] hover:bg-[#EFEAE1] hover:text-[#2C2A29]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-[#F7F3EC] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#2C4A3E]/10 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#FDFBF7] text-[#2C2A29] px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Eye size={14} className="text-[#C87D65]" /> View Full Story
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-semibold bg-[#2C4A3E]/90 text-[#FDFBF7] px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-2xl text-[#2C2A29] group-hover:text-[#C87D65] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#65605C] font-light">
                    {item.location} • {item.guestCount}
                  </p>
                  <p className="text-xs text-[#65605C]/80 font-light line-clamp-2 pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />

        </section>
      </main>
    </>
  );
};
