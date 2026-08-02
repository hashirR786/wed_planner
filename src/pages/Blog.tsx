import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { PageHeader } from '../components/shared/PageHeader';
import { siteConfig, type BlogPost } from '../config/siteConfig';
import { Clock, ArrowRight, X, User, Calendar } from 'lucide-react';

interface BlogProps {
  onNavigate?: (path: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = siteConfig.blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Journal & Editorial Wedding Planning Guides"
        description="Curated wedding planning advice, color trend previews, and destination guides by [BUSINESS NAME]."
      />

      <main className="bg-[#FDFBF7]">
        <PageHeader
          title="The Editorial Journal"
          subtitle="Refined insights, destination planning advice, tablescape design, and wedding inspiration."
          badge="Planning Journal"
          backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
        />

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-16">
            <input
              type="text"
              placeholder="Search articles by title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F7F3EC] border border-[#2C4A3E]/20 rounded-full px-6 py-3 text-xs text-[#2C2A29] placeholder-[#65605C] focus:outline-none focus:border-[#2C4A3E]"
            />
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer bg-[#F7F3EC] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-[#2C4A3E]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-semibold bg-[#FDFBF7] text-[#2C4A3E] px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

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

                <div className="px-6 pb-6 pt-2">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#2C4A3E] group-hover:text-[#C87D65] flex items-center gap-1 transition-colors">
                    Read Full Article <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>

        </section>

        {/* Blog Post Reader View Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div
              className="relative max-w-3xl w-full bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl border border-white/20 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close article"
              >
                <X size={20} />
              </button>

              {/* Reader View Header Image */}
              <div className="relative h-64 sm:h-80 shrink-0">
                <img
                  src={selectedPost.coverImage}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-black/30 to-black/60" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[10px] uppercase tracking-widest bg-[#C87D65] text-white px-3 py-1 rounded-full font-semibold">
                    {selectedPost.category}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl leading-snug font-medium">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Reader Article Content Body */}
              <div className="p-8 overflow-y-auto space-y-6">
                <div className="flex items-center justify-between text-xs text-[#65605C] border-b border-[#2C4A3E]/10 pb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 font-medium text-[#2C2A29]">
                      <User size={14} className="text-[#C87D65]" /> By {selectedPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {selectedPost.publishDate}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {selectedPost.readTime}
                  </span>
                </div>

                {/* Article Paragraphs */}
                <div className="space-y-4 text-base text-[#2C2A29] leading-relaxed font-light">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Pull Quote Box */}
                <blockquote className="p-6 bg-[#F7F3EC] rounded-2xl border-l-4 border-[#C87D65] italic font-serif text-xl text-[#2C4A3E]">
                  "{selectedPost.excerpt}"
                </blockquote>

                <div className="pt-6 border-t border-[#2C4A3E]/10 flex items-center justify-between">
                  <span className="text-xs text-[#65605C]">Written with care by {siteConfig.businessName}</span>
                  <div className="flex items-center gap-3">
                    {onNavigate && (
                      <button
                        onClick={() => {
                          setSelectedPost(null);
                          onNavigate('/contact');
                        }}
                        className="btn-terracotta py-2.5 px-6 text-xs"
                      >
                        Inquire With Planner
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="btn-primary py-2.5 px-6 text-xs"
                    >
                      Back to Journal
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </>
  );
};
