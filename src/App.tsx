import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageTransition } from './components/ui/PageTransition';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Destinations } from './pages/Destinations';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Events } from './pages/Events';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About onNavigate={handleNavigate} />;
      case '/weddings':
      case '/services':
        return <Services onNavigate={handleNavigate} />;
      case '/destinations':
        return <Destinations onNavigate={handleNavigate} />;
      case '/portfolio':
      case '/our-work':
        return <Portfolio />;
      case '/blog':
      case '/journal':
        return <Blog onNavigate={handleNavigate} />;
      case '/events':
        return <Events onNavigate={handleNavigate} />;
      case '/contact':
        return <Contact />;
      case '/':
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] font-sans antialiased text-[#2C2A29]">
      <CustomCursor />
      <ScrollProgress />
      <Header currentPath={currentPath} onNavigate={handleNavigate} />
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
