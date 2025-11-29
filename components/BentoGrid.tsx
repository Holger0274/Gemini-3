import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Users2, ArrowUpRight } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section id="schulungen" className="py-24 bg-navy relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-starkWhite mb-4">
            Maßgeschneiderte <span className="text-electricBlue">Schulungen</span>
          </h2>
          <p className="text-slateBlue text-lg">
            Keine Theorie-Vorlesungen, sondern praxisnahe Workshops für jede Ebene Ihres Unternehmens.
          </p>
        </div>

        {/* CSS Grid Setup - mirroring requirements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-areas-mobile md:grid-areas-tablet lg:grid-areas-desktop">
          
          <style>{`
            .grid-areas-mobile {
              grid-template-areas: 
                "tech"
                "management"
                "employees";
            }
            @media (min-width: 768px) {
              .grid-areas-tablet {
                grid-template-areas: 
                  "tech tech"
                  "management employees";
              }
            }
            @media (min-width: 1024px) {
              .grid-areas-desktop {
                grid-template-areas: 
                  "tech tech management"
                  "tech tech employees";
              }
            }
          `}</style>

          {/* Large Card: Tech Teams */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group glass-card rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:border-electricBlue/30"
            style={{ gridArea: 'tech' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deepSpace/80 z-10" />
            <div className="absolute inset-0 opacity-10 font-mono text-xs p-4 text-electricBlue overflow-hidden select-none">
              {`import { Agent } from 'ai.mation';\nconst workflow = new Agent({ role: 'dev' });\nworkflow.optimize();\n// Automated deployment pipeline...`}
            </div>
            
            <div className="relative z-20 h-full flex flex-col justify-end">
              <div className="p-3 bg-electricBlue/20 w-fit rounded-lg mb-4">
                <Code2 className="w-8 h-8 text-electricBlue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Für Technical Teams</h3>
              <p className="text-slateBlue mb-6">
                Deep Dive in n8n, Make.com und Python-Integrationen. Wir bauen im Workshop echte Automatisierungen.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-electricBlue rounded-full"></span>API Integrationen & Webhooks</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-electricBlue rounded-full"></span>Custom LLM Chains</li>
              </ul>
              <button className="flex items-center gap-2 text-electricBlue font-semibold group-hover:translate-x-1 transition-transform">
                Details ansehen <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Medium Card: Management */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group glass-card rounded-3xl p-8 relative overflow-hidden hover:border-neonMagenta/30 transition-all"
            style={{ gridArea: 'management' }}
          >
            <div className="relative z-20">
              <div className="p-3 bg-neonMagenta/20 w-fit rounded-lg mb-4">
                <Briefcase className="w-6 h-6 text-neonMagenta" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Für Führungskräfte</h3>
              <p className="text-slateBlue mb-4 text-sm">
                Strategie, KI-Ethik und Change Management. Wie Sie Ihr Team auf die Reise mitnehmen.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neonMagenta/20 blur-2xl rounded-full group-hover:bg-neonMagenta/30 transition-colors" />
          </motion.div>

          {/* Medium Card: Employees */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group glass-card rounded-3xl p-8 relative overflow-hidden hover:border-purple-500/30 transition-all"
            style={{ gridArea: 'employees' }}
          >
            <div className="relative z-20">
              <div className="p-3 bg-purple-500/20 w-fit rounded-lg mb-4">
                <Users2 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Für Mitarbeiter</h3>
              <p className="text-slateBlue mb-4 text-sm">
                Effektives Prompting und Daily Business Hacks mit Microsoft Copilot & ChatGPT.
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/30 transition-colors" />
          </motion.div>

        </div>

        <div className="mt-12 text-center">
          <button className="bg-transparent border border-white/20 hover:border-white text-white font-medium py-3 px-8 rounded-full transition-all">
            Zum Schulungskatalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;