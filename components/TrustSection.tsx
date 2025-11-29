import React from 'react';
import { Sparkles, Zap, Users, Building2 } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-deepSpace">
      <div className="container mx-auto px-4">
        
        {/* Why Us Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: <Sparkles />, label: "Transparent", text: "Keine versteckten Kosten, klare Roadmaps." },
            { icon: <Zap />, label: "Agil", text: "Schnelle Umsetzung von MVPs statt Monolithen." },
            { icon: <Users />, label: "Enablement", text: "Wir machen Ihr Team unabhängig von uns." },
            { icon: <Building2 />, label: "KMU-Fokus", text: "Lösungen, die zu Ihrer Größe passen." }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
              <div className="inline-flex p-3 rounded-full bg-electricBlue/10 text-electricBlue mb-4">
                {item.icon}
              </div>
              <h4 className="text-white font-bold mb-2">{item.label}</h4>
              <p className="text-sm text-slateBlue">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-center text-starkWhite mb-12">
            Ihr Weg zur <span className="text-neonMagenta">KI-Exzellenz</span>
          </h2>
          
          <div className="relative border-l border-white/10 ml-6 md:ml-0 space-y-12">
            {[
              { title: "Erstgespräch", desc: "30 Min, kostenlos. Wir klären Potenziale und Chemie.", step: "01" },
              { title: "Assessment & Strategie", desc: "Tiefenanalyse Ihrer Prozesse und Erstellung der Roadmap.", step: "02" },
              { title: "Umsetzung & Begleitung", desc: "Technische Implementierung und Schulung der Teams.", step: "03" }
            ].map((item, i) => (
              <div key={i} className="relative pl-12 md:pl-24 group">
                {/* Dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-electricBlue shadow-[0_0_10px_#60AFFF] group-hover:scale-150 transition-transform" />
                
                {/* Step Number */}
                <span className="absolute left-6 md:left-8 top-0 text-3xl font-montserrat font-black text-white/5 group-hover:text-white/10 transition-colors">
                  {item.step}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slateBlue">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;