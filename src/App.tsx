import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageTransition } from './components/ui/PageTransition';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Events } from './pages/Events';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

export const getNormalizedPath = (rawPath: string) => {
  let clean = rawPath.split('?')[0];
  // Strip sub-folder repo path if hosted on GitHub Pages (e.g. /wed_planner)
  clean = clean.replace(/^\/wed_planner\/?/i, '/');
  if (!clean.startsWith('/')) clean = '/' + clean;
  return clean;
};

export const getAssetUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : base + '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanBase + cleanPath;
};

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return getNormalizedPath(window.location.pathname) + window.location.search;
  });

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const targetUrl = (cleanBase + path).replace(/\/+/g, '/');
    window.history.pushState({}, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getNormalizedPath(window.location.pathname) + window.location.search);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const normalizedBasePath = getNormalizedPath(currentPath);

  const renderPage = () => {
    switch (normalizedBasePath) {
      case '/about':
        return <About onNavigate={handleNavigate} />;
      case '/weddings':
      case '/services':
        return <Services onNavigate={handleNavigate} />;
      case '/portfolio':
      case '/our-work':
        return <Portfolio />;
      case '/events':
        return <Events onNavigate={handleNavigate} />;
      case '/contact':
        return <Contact />;
      case '/privacy':
      case '/privacy-policy':
        return <PrivacyPolicy onNavigate={handleNavigate} />;
      case '/terms':
      case '/terms-of-service':
        return <TermsOfService onNavigate={handleNavigate} />;
      case '/':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] font-sans antialiased text-[#2C2A29]">
      <CustomCursor />
      <ScrollProgress />
      <Header currentPath={normalizedBasePath} onNavigate={handleNavigate} />
      <div className="flex-grow">
        <PageTransition currentPath={currentPath}>
          {renderPage()}
        </PageTransition>
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
