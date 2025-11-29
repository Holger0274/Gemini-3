import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';

const navItems = [
  { label: 'Schulungen', href: '#schulungen' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Automatisierung', href: '#automatisierung' },
  { label: 'Insights', href: '#blog' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electricBlue via-neonMagenta to-purple-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? 'py-4' : 'py-6'
        )}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className={cn(
              "mx-auto max-w-5xl rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between relative group",
              scrolled
                ? 'backdrop-blur-xl bg-navy/80 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]'
                : 'bg-transparent backdrop-blur-sm'
            )}
            aria-label="Hauptnavigation"
          >
            {/* Animated glow effect on scroll */}
            {scrolled && (
              <div className="absolute -inset-1 bg-gradient-to-r from-electricBlue/20 via-neonMagenta/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
            )}

            {/* Logo with enhanced animations */}
            <motion.a
              href="#"
              className="font-montserrat font-bold text-xl md:text-2xl tracking-tight text-white group/logo relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              AI
              <motion.span
                className="text-electricBlue group-hover/logo:text-neonMagenta transition-colors inline-block"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(96, 175, 255, 0.5)",
                    "0 0 20px rgba(249, 0, 147, 0.5)",
                    "0 0 10px rgba(96, 175, 255, 0.5)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                .mation
              </motion.span>
            </motion.a>

            {/* Desktop Nav with glow effects */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium group/nav-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={cn(
                      "relative z-10 transition-colors duration-300",
                      isActive ? "text-electricBlue" : "text-slateBlue group-hover/nav-item:text-white"
                    )}>
                      {item.label}
                    </span>

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-electricBlue/10 to-neonMagenta/10 opacity-0 group-hover/nav-item:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        boxShadow: "0 0 20px rgba(96, 175, 255, 0.3)"
                      }}
                    />

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-electricBlue shadow-[0_0_10px_rgba(96,175,255,0.8)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-4 bg-gradient-to-r from-neonMagenta to-purple-600 text-white text-sm font-bold px-6 py-2.5 rounded-full overflow-hidden group/cta"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-neonMagenta opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Erstgespräch</span>

                {/* Animated glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-neonMagenta to-purple-600 rounded-full opacity-0 group-hover/cta:opacity-70 blur-lg -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.a>
            </div>

            {/* Mobile Toggle with animation */}
            <motion.button
              className="md:hidden text-white p-2 relative group/toggle"
              onClick={() => setIsOpen(true)}
              aria-label="Menü öffnen"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6 relative z-10" />
              <div className="absolute inset-0 rounded-lg bg-electricBlue/20 opacity-0 group-hover/toggle:opacity-100 blur transition-opacity duration-300" />
            </motion.button>
          </motion.nav>
        </div>
      </header>

      {/* Premium Mobile Menu with enhanced blur effects */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 md:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed right-0 top-0 bottom-0 w-[85%] max-w-sm z-50 p-6 md:hidden flex flex-col relative",
                "backdrop-blur-xl bg-gradient-to-br from-navy/95 to-deepSpace/95",
                "border-l border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
              )}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/5 via-transparent to-neonMagenta/5 pointer-events-none" />

              {/* Header */}
              <div className="flex justify-between items-center mb-8 relative z-10">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-montserrat font-bold text-xl text-white"
                >
                  Navigation
                </motion.span>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-slateBlue hover:text-white p-2 relative group/close"
                  aria-label="Menü schließen"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 rounded-lg bg-neonMagenta/20 opacity-0 group-hover/close:opacity-100 blur transition-opacity duration-300" />
                </motion.button>
              </div>

              {/* Navigation items with stagger animation */}
              <div className="flex flex-col space-y-2 flex-grow relative z-10">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group/mobile-item relative px-4 py-4 rounded-xl overflow-hidden"
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-electricBlue/10 to-neonMagenta/10 opacity-0 group-hover/mobile-item:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-lg font-medium text-starkWhite group-hover/mobile-item:text-electricBlue transition-colors">
                        {item.label}
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ChevronRight className="w-5 h-5 text-electricBlue group-hover/mobile-item:text-neonMagenta transition-colors" />
                      </motion.div>
                    </div>

                    {/* Bottom border */}
                    <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-auto relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-center bg-gradient-to-r from-neonMagenta to-purple-600 text-white font-bold py-4 rounded-xl relative overflow-hidden group/mobile-cta"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-neonMagenta opacity-0 group-hover/mobile-cta:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Jetzt Starten</span>

                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-neonMagenta to-purple-600 rounded-xl opacity-0 group-hover/mobile-cta:opacity-50 blur-xl transition-opacity duration-500 -z-10" />
                </motion.a>
              </motion.div>

              {/* Decorative floating orbs */}
              <motion.div
                className="absolute top-1/4 right-10 w-32 h-32 bg-electricBlue/10 rounded-full blur-3xl pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/3 left-10 w-40 h-40 bg-neonMagenta/10 rounded-full blur-3xl pointer-events-none"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;