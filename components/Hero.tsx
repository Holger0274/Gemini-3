import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Constellation Effect - Pure CSS/SVG for performance */}
      <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#60AFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60AFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 2 + 1}
              fill="white"
              className="animate-pulse-slow"
              style={{ animationDelay: `${Math.random() * 4}s` }}
            />
          ))}
          <circle cx="80%" cy="20%" r="300" fill="url(#grad1)" className="opacity-20 animate-blob filter blur-3xl" />
          <circle cx="20%" cy="80%" r="250" fill="#f90093" className="opacity-10 animate-blob filter blur-3xl" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full border border-electricBlue/30 bg-electricBlue/10 text-electricBlue text-xs md:text-sm font-semibold mb-6 tracking-wide"
          >
            Ihre Wettbewerber automatisieren bereits. Wann starten Sie?
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-starkWhite leading-tight mb-6"
          >
            Automatisierung mit{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-neonMagenta">
              Intelligenz
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slateBlue mb-8 max-w-2xl mx-auto lg:mx-0 font-light"
          >
            Ganzheitliche KI-Transformation für KMUs. Wir begleiten Sie von der strategischen Planung über Teamschulungen bis zur technischen Implementierung von Agenten-Systemen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gradient-to-r from-neonMagenta to-purple-600 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(249,0,147,0.4)] hover:shadow-[0_0_30px_rgba(249,0,147,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Transformation Starten <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#schulungen"
              className="w-full sm:w-auto glass-card text-starkWhite font-semibold py-3.5 px-8 rounded-full hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2"
              aria-label="Mehr über unsere Prozesse erfahren"
            >
              <PlayCircle className="w-5 h-5 text-electricBlue" />
              Prozess ansehen
            </a>
          </motion.div>

          {/* Social Proof Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/5"
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Vertraut von Innovativen KMUs</p>
            <div className="flex gap-6 justify-center lg:justify-start opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <div className="h-8 w-24 bg-white/20 rounded"></div>
               <div className="h-8 w-24 bg-white/20 rounded"></div>
               <div className="h-8 w-24 bg-white/20 rounded hidden sm:block"></div>
            </div>
          </motion.div>
        </div>

        {/* Visual Element (Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Abstract Glass Cards Composition */}
          <div className="relative w-full aspect-square max-w-lg mx-auto perspective-1000">
             <div className="absolute inset-0 bg-gradient-to-tr from-electricBlue/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
             
             <div className="absolute top-10 right-10 w-3/4 h-3/4 glass-card rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-700 z-20 flex flex-col justify-between border-t border-l border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3 font-mono text-xs text-electricBlue/80">
                  <div className="flex gap-2"><span className="text-neonMagenta">const</span> <span>roi_analysis</span> = <span className="text-yellow-400">await</span> ai.audit();</div>
                  <div className="flex gap-2"><span className="text-neonMagenta">if</span> (efficiency &lt; 90) &#123;</div>
                  <div className="pl-4">implement_agents(<span className="text-green-400">'Sales'</span>);</div>
                  <div>&#125;</div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                   <div className="text-white font-bold">Status: Optimiert</div>
                   <div className="text-green-400 font-mono">98.5%</div>
                </div>
             </div>

             <div className="absolute -bottom-5 -left-5 w-1/2 h-1/3 glass-card rounded-xl z-30 p-4 transform -rotate-6 hover:rotate-0 transition-all duration-500 animate-float">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neonMagenta to-purple-600 flex items-center justify-center font-bold text-white">AI</div>
                   <div>
                      <div className="text-xs text-slateBlue">Agent Active</div>
                      <div className="text-sm font-bold text-white">Lead Parsing...</div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;