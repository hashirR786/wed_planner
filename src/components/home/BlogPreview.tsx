import React from 'react';
import { BookOpen, ArrowUpRight, Clock } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { ScrollReveal } from '../ui/ScrollReveal';
import { getAssetUrl } from '../../utils/asset';

interface BlogPreviewProps {
  onNavigate: (path: string) => void;
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({ onNavigate }) => {
  const posts = siteConfig.blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-[#FDFBF7] border-b border-[#2C4A3E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#2C4A3E]/10 gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87D65] font-semibold flex items-center gap-2">
                <BookOpen size={14} className="text-[#2C4A3E]" />
                Editorial Journal
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2A29]">
                Planning Advice & Inspiration
              </h2>
            </div>

            <button
              onClick={() => onNavigate('/blog')}
              className="btn-secondary text-xs py-3 px-6 self-start md:self-auto"
            >
              Visit Journal <ArrowUpRight size={15} />
            </button>
          </div>
        </ScrollReveal>

        {/* 3 Post Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <ScrollReveal key={post.id} variant="fade-up" delay={idx * 150} duration={800}>
              <article
                onClick={() => onNavigate('/blog')}
                className="group cursor-pointer bg-[#F7F3EC] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-[#2C4A3E]/10 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Cover Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                    <img
                      src={getAssetUrl(post.coverImage)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-semibold bg-[#FDFBF7] text-[#2C4A3E] px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-[#65605C]">
                      <span>{post.publishDate}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#2C2A29] leading-snug group-hover:text-[#C87D65] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#65605C] font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 pb-6 pt-2">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#2C4A3E] group-hover:text-[#C87D65] flex items-center gap-1 transition-colors">
                    Read Article <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
