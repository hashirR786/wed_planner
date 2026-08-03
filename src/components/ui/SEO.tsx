import React, { useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  type = 'website',
}) => {
  useEffect(() => {
    const defaultTitle = `${siteConfig.businessName} — Cinematic Wedding & Couple Photography | ${siteConfig.location}`;
    const pageTitle = title ? `${title} | ${siteConfig.businessName}` : defaultTitle;
    const metaDesc = description || 'Authentic, emotional, and fine art wedding, couple, maternity, and graduation photography studio based in London, UK.';

    // Title
    document.title = pageTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr.includes(':') ? 'property' : 'name', attr);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Standard
    setMeta('meta[name="description"]', 'description', metaDesc);
    setMeta('meta[name="robots"]', 'robots', 'index, follow');
    setMeta('meta[name="author"]', 'author', siteConfig.plannerName);

    // Open Graph
    setMeta('meta[property="og:title"]', 'og:title', pageTitle);
    setMeta('meta[property="og:description"]', 'og:description', metaDesc);
    setMeta('meta[property="og:image"]', 'og:image', image);
    setMeta('meta[property="og:type"]', 'og:type', type);
    setMeta('meta[property="og:url"]', 'og:url', window.location.href);
    setMeta('meta[property="og:site_name"]', 'og:site_name', siteConfig.businessName);

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'twitter:title', pageTitle);
    setMeta('meta[name="twitter:description"]', 'twitter:description', metaDesc);
    setMeta('meta[name="twitter:image"]', 'twitter:image', image);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, image, type]);

  return null;
};
