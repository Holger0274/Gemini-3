import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Code2, Briefcase, Users2, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

// 3D Tilt Card Component with glassmorphism
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  gridArea: string;
  delay?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className, gridArea, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        gridArea,
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      className={cn("group relative", className)}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "relative rounded-3xl p-8 overflow-hidden transition-all duration-300",
          "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5",
          "border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
          "hover:border-electricBlue/30"
        )}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/10 via-purple-500/10 to-neonMagenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-electricBlue via-purple-500 to-neonMagenta rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

        {children}
      </motion.div>
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section id="schulungen" className="py-24 bg-navy relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electricBlue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neonMagenta/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-starkWhite mb-4">
            Maßgeschneiderte <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-neonMagenta">Schulungen</span>
          </h2>
          <p className="text-slateBlue text-lg">
            Keine Theorie-Vorlesungen, sondern praxisnahe Workshops für jede Ebene Ihres Unternehmens.
          </p>
        </motion.div>

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
          <TiltCard gridArea="tech" delay={0}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deepSpace/60 z-0" />
            <div className="absolute inset-0 opacity-10 font-mono text-xs p-4 text-electricBlue overflow-hidden select-none">
              {`import { Agent } from 'ai.mation';\nconst workflow = new Agent({ role: 'dev' });\nworkflow.optimize();\n// Automated deployment pipeline...`}
            </div>

            <div className="relative z-20 h-full flex flex-col justify-end">
              <motion.div
                className="p-3 bg-electricBlue/20 w-fit rounded-lg mb-4 backdrop-blur-sm border border-electricBlue/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code2 className="w-8 h-8 text-electricBlue" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Für Technical Teams</h3>
              <p className="text-slateBlue mb-6">
                Deep Dive in n8n, Make.com und Python-Integrationen. Wir bauen im Workshop echte Automatisierungen.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-electricBlue rounded-full shadow-[0_0_8px_rgba(96,175,255,0.8)]"></span>
                  API Integrationen & Webhooks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-electricBlue rounded-full shadow-[0_0_8px_rgba(96,175,255,0.8)]"></span>
                  Custom LLM Chains
                </li>
              </ul>
              <motion.button
                className="flex items-center gap-2 text-electricBlue font-semibold group-hover:text-neonMagenta transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Details ansehen <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </TiltCard>

          {/* Medium Card: Management */}
          <TiltCard gridArea="management" delay={0.1}>
            <div className="relative z-20">
              <motion.div
                className="p-3 bg-neonMagenta/20 w-fit rounded-lg mb-4 backdrop-blur-sm border border-neonMagenta/30"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Briefcase className="w-6 h-6 text-neonMagenta" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Für Führungskräfte</h3>
              <p className="text-slateBlue mb-4 text-sm">
                Strategie, KI-Ethik und Change Management. Wie Sie Ihr Team auf die Reise mitnehmen.
              </p>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-neonMagenta/20 blur-2xl rounded-full"
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
          </TiltCard>

          {/* Medium Card: Employees */}
          <TiltCard gridArea="employees" delay={0.2}>
            <div className="relative z-20">
              <motion.div
                className="p-3 bg-purple-500/20 w-fit rounded-lg mb-4 backdrop-blur-sm border border-purple-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users2 className="w-6 h-6 text-purple-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">Für Mitarbeiter</h3>
              <p className="text-slateBlue mb-4 text-sm">
                Effektives Prompting und Daily Business Hacks mit Microsoft Copilot & ChatGPT.
              </p>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full"
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
          </TiltCard>

        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="relative bg-transparent border border-white/20 hover:border-electricBlue text-white font-medium py-3 px-8 rounded-full transition-all group/catalog overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-electricBlue/10 to-neonMagenta/10 opacity-0 group-hover/catalog:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover/catalog:text-electricBlue transition-colors">
              Zum Schulungskatalog
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-electricBlue to-neonMagenta rounded-full opacity-0 group-hover/catalog:opacity-30 blur-lg transition-opacity duration-500 -z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;