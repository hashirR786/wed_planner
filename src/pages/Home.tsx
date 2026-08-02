import React from 'react';
import { SEO } from '../components/ui/SEO';
import { HeroVideo } from '../components/home/HeroVideo';
import { IntroWeddings } from '../components/home/IntroWeddings';
import { DestinationsBlock } from '../components/home/DestinationsBlock';
import { MeetPlanner } from '../components/home/MeetPlanner';
import { PortfolioTeaser } from '../components/home/PortfolioTeaser';
import { Testimonials } from '../components/home/Testimonials';
import { BlogPreview } from '../components/home/BlogPreview';
import { ContactBanner } from '../components/home/ContactBanner';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <SEO
        title="Weddings, Planned Beautifully"
        description="Bespoke luxury wedding planning & editorial design studio. Crafting timeless celebrations in [LOCATION] and global destinations."
      />

      <main className="w-full">
        {/* 1. Full-Bleed Cinematic Hero Video */}
        <div id="hero">
          <HeroVideo onNavigate={onNavigate} />
        </div>

        {/* 2. Weddings Intro */}
        <div id="weddings">
          <IntroWeddings onNavigate={onNavigate} />
        </div>

        {/* 3. Destinations Block */}
        <div id="destinations">
          <DestinationsBlock onNavigate={onNavigate} />
        </div>

        {/* 4. Meet Planner */}
        <div id="about">
          <MeetPlanner onNavigate={onNavigate} />
        </div>

        {/* 5. Portfolio Teaser */}
        <div id="portfolio">
          <PortfolioTeaser onNavigate={onNavigate} />
        </div>

        {/* 6. Testimonials Carousel */}
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* 7. Blog Preview */}
        <div id="blog">
          <BlogPreview onNavigate={onNavigate} />
        </div>

        {/* 8. Contact CTA Banner */}
        <div id="contact">
          <ContactBanner onNavigate={onNavigate} />
        </div>
      </main>
    </>
  );
};
