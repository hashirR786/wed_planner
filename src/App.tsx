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

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return (window.location.pathname + window.location.search) || '/';
  });

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath((window.location.pathname + window.location.search) || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    const basePath = currentPath.split('?')[0];
    switch (basePath) {
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
      <Header currentPath={currentPath.split('?')[0]} onNavigate={handleNavigate} />
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
