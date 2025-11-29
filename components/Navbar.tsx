import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Schulungen', href: '#schulungen' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Automatisierung', href: '#automatisierung' },
  { label: 'Insights', href: '#blog' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <nav 
            className={`mx-auto max-w-5xl rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between
              ${scrolled 
                ? 'bg-navy/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20' 
                : 'bg-transparent'
              }`}
            aria-label="Hauptnavigation"
          >
            {/* Logo */}
            <a 
              href="#" 
              className="font-montserrat font-bold text-xl md:text-2xl tracking-tight text-white group"
            >
              AI<span className="text-electricBlue group-hover:text-neonMagenta transition-colors">.mation</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slateBlue hover:text-electricBlue transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gradient-to-r from-neonMagenta to-purple-600 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(249,0,147,0.4)] hover:shadow-[0_0_30px_rgba(249,0,147,0.6)] transition-all hover:-translate-y-0.5"
              >
                Erstgespräch
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-navy border-l border-white/10 z-50 p-6 md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-montserrat font-bold text-xl text-white">Navigation</span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-slateBlue hover:text-white p-2"
                  aria-label="Menü schließen"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 flex-grow">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-starkWhite border-b border-white/5 pb-4"
                  >
                    {item.label}
                    <ChevronRight className="w-5 h-5 text-electricBlue" />
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-electricBlue text-deepSpace font-bold py-4 rounded-lg active:scale-95 transition-transform"
                >
                  Jetzt Starten
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;