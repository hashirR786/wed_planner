import React from 'react';
import { SEO } from '../components/ui/SEO';
import { HeroVideo } from '../components/home/HeroVideo';
import { IntroWeddings } from '../components/home/IntroWeddings';
import { MeetPlanner } from '../components/home/MeetPlanner';
import { PortfolioTeaser } from '../components/home/PortfolioTeaser';
import { Testimonials } from '../components/home/Testimonials';
import { ContactBanner } from '../components/home/ContactBanner';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <SEO
        title="Cinematic Wedding & Couple Photography London — United Stories by Arun"
        description="Authentic, emotional wedding, couple, maternity, and graduation photography studio based in London, UK."
      />

      <main className="w-full">
        {/* 1. Full-Bleed Cinematic Hero Video */}
        <div id="hero">
          <HeroVideo onNavigate={onNavigate} />
        </div>

        {/* 2. Photography Intro & Archways Showcase */}
        <div id="intro">
          <IntroWeddings onNavigate={onNavigate} />
        </div>

        {/* 3. Meet Photographer */}
        <div id="about">
          <MeetPlanner onNavigate={onNavigate} />
        </div>

        {/* 4. Portfolio Teaser */}
        <div id="portfolio">
          <PortfolioTeaser onNavigate={onNavigate} />
        </div>

        {/* 5. Testimonials Carousel */}
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* 6. Contact CTA Banner */}
        <div id="contact">
          <ContactBanner onNavigate={onNavigate} />
        </div>
      </main>
    </>
  );
};
