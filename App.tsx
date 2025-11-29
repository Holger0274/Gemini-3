import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import BentoGrid from './components/BentoGrid';
import ConsultingAccordion from './components/ConsultingAccordion';
import AutomationSection from './components/AutomationSection';
import BlogSection from './components/BlogSection';
import TrustSection from './components/TrustSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  // Accessibility: Handle reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('scroll-behavior', 'auto');
    }
  }, []);

  return (
    <div className="bg-deepSpace min-h-screen text-slateBlue font-sans overflow-x-hidden selection:bg-neonMagenta selection:text-white">
      <a 
        href="#contact" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-electricBlue text-deepSpace px-4 py-2 font-bold rounded"
      >
        Zum Kontaktformular springen
      </a>

      <Navbar />
      
      <main>
        <Hero />
        <ProblemSection />
        <BentoGrid />
        <ConsultingAccordion />
        <AutomationSection />
        <BlogSection />
        <TrustSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;