import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import SolutionShowcase from './components/SolutionShowcase';
import AppSection from './components/AppSection';
import MDLHolder from './pages/MDLHolder';
import MDLVerifier from './pages/MDLVerifier';

function HomePage() {
  const scrollToNext = () => {
    const showcase = document.getElementById('solution');
    showcase?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-elegant-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex flex-col items-center justify-center px-4 section-preview">
        <div className="max-w-4xl text-center space-y-6 reveal-on-scroll">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            ELMEHDAOUI Ahmed zine el abidine
          </h1>
          <p className="text-xl text-gray-300">
            Software Engineer | Mobile Developer | Full-Stack Developer | IOT Enthusiast
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/ahmed-elmehdaoui-234182278/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ELMEHDAOUIAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 animate-bounce"
          aria-label="Scroll to solution showcase"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Solution Showcase */}
      <SolutionShowcase />

      {/* App Section */}
      <AppSection />

      {/* Tech Stack */}
      <TechStack />
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mdl_holder" element={<MDLHolder />} />
      <Route path="/mdl_verifier" element={<MDLVerifier />} />
    </Routes>
  );
}

export default App;