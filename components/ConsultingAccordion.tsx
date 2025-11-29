import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSearch, BarChart4, Lightbulb, ChevronDown } from 'lucide-react';

const items = [
  {
    id: 1,
    title: "AI Readiness Assessment",
    icon: <FileSearch className="w-6 h-6" />,
    description: "Wir analysieren Ihre Datenstruktur, Software-Landschaft und Prozesse, um die 'Low-Hanging Fruits' für Automatisierung zu identifizieren.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Strategie & Audit",
    icon: <BarChart4 className="w-6 h-6" />,
    description: "Entwicklung einer langfristigen Roadmap. Welches Tool ersetzt welchen manuellen Prozess? Wie skalieren wir sicher?",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "ROI Workshop",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "Berechnung konkreter Einsparpotenziale. Wir definieren KPIs, damit der Erfolg der KI-Integration messbar wird.",
    color: "from-orange-500 to-yellow-500"
  }
];

const ConsultingAccordion: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="consulting" className="py-24 bg-deepSpace relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-electricBlue/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-neonMagenta/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-starkWhite mb-4">
            Strategisches <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonMagenta to-purple-600">Consulting</span>
          </h2>
          <p className="text-slateBlue max-w-2xl mx-auto">
            Wir bringen Licht in den Dschungel der Möglichkeiten und entwickeln einen klaren Plan.
          </p>
        </div>

        {isMobile ? (
          // Mobile: Vertical Stack
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="glass-card rounded-2xl overflow-hidden border border-white/10"
              >
                <button
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                  className="w-full p-6 flex items-center justify-between text-left focus:outline-none focus-visible:bg-white/5"
                  aria-expanded={activeId === item.id}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} text-white`}>
                      {item.icon}
                    </div>
                    <span className="font-bold text-white text-lg">{item.title}</span>
                  </div>
                  <ChevronDown className={`text-slateBlue transition-transform duration-300 ${activeId === item.id ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slateBlue border-t border-white/5">
                        {item.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          // Desktop: Horizontal Hover Expand
          <div className="flex gap-4 h-[500px] w-full max-w-6xl mx-auto">
            {items.map((item) => (
              <motion.div
                key={item.id}
                onHoverStart={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border border-white/10 ${
                  activeId === item.id ? 'flex-[3]' : 'flex-[1]'
                }`}
              >
                {/* Background Image/Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className={`absolute top-8 left-8 p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  
                  <motion.div layout>
                    <h3 className={`font-bold text-white mb-4 ${activeId === item.id ? 'text-3xl' : 'text-xl rotate-0 whitespace-nowrap'}`}>
                      {item.title}
                    </h3>
                    
                    {activeId === item.id && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-starkWhite text-lg leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ConsultingAccordion;