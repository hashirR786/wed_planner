import React, { useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    const defaultTitle = `${siteConfig.businessName} — Luxury Wedding & Event Planning Studio | ${siteConfig.location}`;
    const pageTitle = title ? `${title} | ${siteConfig.businessName}` : defaultTitle;
    document.title = pageTitle;

    const metaDescription = description || siteConfig.businessSubtext;
    let element = document.querySelector('meta[name="description"]');
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', 'description');
      document.head.appendChild(element);
    }
    element.setAttribute('content', metaDescription);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description]);

  return null;
};
