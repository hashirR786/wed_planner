import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  backgroundImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge = 'Aurelia & Co.',
  backgroundImage = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80',
}) => {
  return (
    <section className="relative pt-36 pb-24 bg-[#1A1918] overflow-hidden text-center text-white">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#E09F87] font-semibold bg-black/40 px-4 py-1.5 rounded-full border border-[#E09F87]/30 backdrop-blur-sm">
          {badge}
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#FDFBF7] font-normal leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
