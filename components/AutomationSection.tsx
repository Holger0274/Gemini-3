import React from 'react';
import { motion } from 'framer-motion';
import { Bot, FileText, Mic, BarChart, Shield } from 'lucide-react';

const useCases = [
  {
    title: "Meeting Summarization",
    desc: "Automatische Transkription & Zusammenfassung von Teams/Zoom Calls in Ihr CRM.",
    status: "flagship"
  },
  {
    title: "Document Analysis",
    desc: "KI extrahiert Daten aus Rechnungen & Verträgen und legt sie strukturiert ab.",
    status: "poc"
  },
  {
    title: "Sales Intelligence",
    desc: "Anreicherung von Leads mit Daten aus dem Web vor dem ersten Anruf.",
    status: "dev"
  },
  {
    title: "Knowledge Base",
    desc: "Ein interner Chatbot, der alle Ihre PDFs und Wikis kennt und Antworten liefert.",
    status: "poc"
  },
];

const AutomationSection: React.FC = () => {
  return (
    <section id="automatisierung" className="py-24 bg-[#050f1e] overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text & Cards */}
          <div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-starkWhite mb-6">
              Multi-Agent <br/>
              <span className="text-neonMagenta">Systeme & Automation</span>
            </h2>
            <p className="text-slateBlue text-lg mb-12">
              Verbinden Sie isolierte Prozesse zu einem intelligenten Ökosystem. Unsere Agenten arbeiten 24/7 für Sie.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2 bg-white/5 rounded-lg text-electricBlue group-hover:text-white transition-colors">
                      <Bot className="w-5 h-5" />
                    </div>
                    {useCase.status === 'flagship' && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neonMagenta bg-neonMagenta/10 px-2 py-1 rounded animate-pulse">
                        Flaggschiff
                      </span>
                    )}
                    {useCase.status === 'poc' && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-electricBlue bg-electricBlue/10 px-2 py-1 rounded">
                        PoC Phase
                      </span>
                    )}
                     {useCase.status === 'dev' && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                        In Entwicklung
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-white mb-2">{useCase.title}</h4>
                  <p className="text-sm text-slate-400">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Orbit Visualization (Desktop) / Carousel (Mobile) */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            {/* Center Node */}
            <div className="relative z-20 w-32 h-32 bg-gradient-to-r from-electricBlue to-neonMagenta rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(96,175,255,0.3)]">
              <span className="font-bold text-white text-center leading-tight">Zentrales<br/>System</span>
            </div>

            {/* Orbit Rings */}
            <div className="absolute border border-white/10 rounded-full w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]" />
            <div className="absolute border border-white/5 rounded-full w-[380px] h-[380px] lg:w-[550px] lg:h-[550px]" />

            {/* Orbiting Elements - CSS Animation */}
            <div className="absolute w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] animate-orbit">
               {/* Planet 1 */}
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center border border-neonMagenta/50 shadow-lg shadow-neonMagenta/20 origin-center animate-[spin_20s_linear_infinite_reverse]">
                  <FileText className="w-5 h-5 text-neonMagenta" />
               </div>
               {/* Planet 2 */}
               <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center border border-electricBlue/50 origin-center animate-[spin_20s_linear_infinite_reverse]">
                  <Mic className="w-5 h-5 text-electricBlue" />
               </div>
               {/* Planet 3 */}
               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center border border-purple-500/50 origin-center animate-[spin_20s_linear_infinite_reverse]">
                  <BarChart className="w-5 h-5 text-purple-500" />
               </div>
            </div>

             <div className="absolute w-[380px] h-[380px] lg:w-[550px] lg:h-[550px] animate-orbit" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
               {/* Planet 4 */}
               <div className="absolute top-1/4 -left-4 w-10 h-10 bg-navy rounded-full flex items-center justify-center border border-white/20 origin-center animate-[spin_30s_linear_infinite]">
                  <Shield className="w-4 h-4 text-slate-300" />
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AutomationSection;