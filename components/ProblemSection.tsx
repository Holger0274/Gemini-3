import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Target, Users, CheckCircle } from 'lucide-react';

const problems = [
  {
    icon: <Target className="w-6 h-6 text-neonMagenta" />,
    title: "Tool-Überflutung",
    text: "Welche der tausenden AI-Tools passen wirklich zu Ihren Prozessen und Datenschutz-Anforderungen?"
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-orange-400" />,
    title: "Unklarer ROI",
    text: "Investitionen in KI verpuffen oft ohne messbaren Mehrwert, weil die Strategie fehlt."
  },
  {
    icon: <Users className="w-6 h-6 text-electricBlue" />,
    title: "Fehlendes Know-how",
    text: "Teams sind unsicher im Umgang mit Prompts und KI-Ethik, was zu Ablehnung führt."
  }
];

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-deepSpace relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          
          <div className="lg:col-span-3 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-starkWhite mb-6">
                Wo stehen KMUs bei der <br/>
                <span className="text-electricBlue">KI-Integration?</span>
              </h2>
              <p className="text-slateBlue text-lg leading-relaxed max-w-2xl">
                Der Markt bewegt sich rasant. Viele Unternehmen spüren den Druck, wissen aber nicht, wo sie anfangen sollen. Das führt zu Insellösungen und frustrierten Mitarbeitern.
              </p>
            </motion.div>

            <div className="space-y-6">
              {problems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-white/5 hover:bg-white/5 transition-all"
                >
                  <div className="shrink-0 p-3 bg-navy rounded-lg border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-1 rounded-2xl bg-gradient-to-br from-electricBlue to-neonMagenta"
            >
              <div className="bg-navy rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-electricBlue/20 blur-3xl rounded-full"></div>
                <h3 className="text-2xl font-montserrat font-bold text-white mb-6">Die Lösung</h3>
                <p className="text-starkWhite mb-8 text-lg">
                  Wir helfen mit einer klaren 3-Schritte-Strategie:
                </p>
                <ul className="space-y-4">
                  {[
                    "Analyse & Potenzialerkennung",
                    "Schulung & Empowerment",
                    "Implementierung & Automation"
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-slateBlue">
                      <CheckCircle className="w-5 h-5 text-neonMagenta shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                   <div className="h-2 w-full bg-deepSpace rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-electricBlue to-neonMagenta"
                      />
                   </div>
                   <p className="text-right text-xs text-slate-500 mt-2">100% Klarheit in 4 Wochen</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;