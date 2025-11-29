import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { cn } from '../lib/utils';

// Particle system for mouse-interactive effects
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

const ParticleCanvas: React.FC<{ mouseX: number; mouseY: number }> = ({
  mouseX,
  mouseY,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: Math.random() * 50 + 30,
        size: Math.random() * 2 + 1,
        hue: Math.random() > 0.5 ? 200 : 320, // electricBlue or neonMagenta
      };
    };

    const animate = () => {
      ctx.fillStyle = "rgba(2, 12, 27, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (mouseX > 0 && mouseY > 0 && Math.random() < 0.2) {
        particlesRef.current.push(createParticle(mouseX, mouseY));
      }

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;

        const alpha = p.life / p.maxLife;
        ctx.fillStyle = `hsla(${p.hue}, 100%, ${p.hue === 200 ? '70%' : '60%'}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${alpha * 0.8})`;

        return p.life > 0;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 opacity-60"
    />
  );
};

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 800], [5, -5]);
  const rotateY = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1200], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #60AFFF 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #f90093 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, #60AFFF 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #60AFFF 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-20"
        />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 80% 20%, #f90093 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, #60AFFF 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, #f90093 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #f90093 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-15"
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96, 175, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 175, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particle canvas */}
      <ParticleCanvas mouseX={mousePosition.x} mouseY={mousePosition.y} />

      <div className="container mx-auto px-4 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-4 py-1.5 rounded-full border border-electricBlue/30 bg-electricBlue/10 text-electricBlue text-xs md:text-sm font-semibold mb-6 tracking-wide backdrop-blur-sm shadow-[0_0_20px_rgba(96,175,255,0.3)]"
          >
            Ihre Wettbewerber automatisieren bereits. Wann starten Sie?
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              rotateX,
              rotateY,
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-starkWhite leading-tight mb-6"
          >
            Automatisierung mit{' '}
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-neonMagenta"
              animate={{
                textShadow: [
                  "0 0 20px rgba(96, 175, 255, 0.5)",
                  "0 0 40px rgba(249, 0, 147, 0.5)",
                  "0 0 20px rgba(96, 175, 255, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Intelligenz
            </motion.span>
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
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-neonMagenta to-purple-600 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(249,0,147,0.4)] hover:shadow-[0_0_40px_rgba(249,0,147,0.7)] transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-neonMagenta opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Transformation Starten <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>
            <motion.a
              href="#schulungen"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto glass-card text-starkWhite font-semibold py-3.5 px-8 rounded-full hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2 group"
              aria-label="Mehr über unsere Prozesse erfahren"
            >
              <PlayCircle className="w-5 h-5 text-electricBlue group-hover:text-neonMagenta transition-colors" />
              Prozess ansehen
            </motion.a>
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

        {/* Visual Element (Desktop) - Premium Glass Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Abstract Glass Cards Composition with 3D depth */}
          <div className="relative w-full aspect-square max-w-lg mx-auto" style={{ perspective: "1200px" }}>
             {/* Animated glow background */}
             <motion.div
               animate={{
                 scale: [1, 1.2, 1],
                 opacity: [0.3, 0.5, 0.3],
               }}
               transition={{
                 duration: 4,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
               className="absolute inset-0 bg-gradient-to-tr from-electricBlue/20 to-neonMagenta/20 rounded-full filter blur-3xl"
             />

             {/* Main Code Card with enhanced glassmorphism */}
             <motion.div
               initial={{ rotateY: -15, rotateX: 10 }}
               whileHover={{
                 rotateY: 0,
                 rotateX: 0,
                 scale: 1.02,
                 z: 50,
               }}
               transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
               className={cn(
                 "absolute top-10 right-10 w-3/4 h-3/4 rounded-2xl p-6 z-20",
                 "backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5",
                 "border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                 "flex flex-col justify-between group"
               )}
               style={{
                 transformStyle: "preserve-3d",
                 boxShadow: "0 20px 60px rgba(96, 175, 255, 0.2), 0 0 40px rgba(249, 0, 147, 0.1)",
               }}
             >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electricBlue/10 via-purple-500/10 to-neonMagenta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                  <div className="space-y-3 font-mono text-xs text-electricBlue/90">
                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="text-neonMagenta">const</span> <span>roi_analysis</span> = <span className="text-yellow-400">await</span> ai.audit();
                    </motion.div>
                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className="text-neonMagenta">if</span> (efficiency &lt; 90) &#123;
                    </motion.div>
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      implement_agents(<span className="text-green-400">'Sales'</span>);
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      &#125;
                    </motion.div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                     <div className="text-white font-bold">Status: Optimiert</div>
                     <motion.div
                       className="text-green-400 font-mono"
                       animate={{
                         textShadow: [
                           "0 0 10px rgba(34, 197, 94, 0.5)",
                           "0 0 20px rgba(34, 197, 94, 0.8)",
                           "0 0 10px rgba(34, 197, 94, 0.5)",
                         ]
                       }}
                       transition={{ duration: 2, repeat: Infinity }}
                     >
                       98.5%
                     </motion.div>
                  </div>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-electricBlue via-purple-500 to-neonMagenta rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
             </motion.div>

             {/* Floating AI Agent Card with enhanced effects */}
             <motion.div
               initial={{ rotateY: 15, rotateX: -10 }}
               whileHover={{
                 rotateY: 0,
                 rotateX: 0,
                 scale: 1.05,
                 z: 60,
               }}
               animate={{
                 y: [0, -10, 0],
               }}
               transition={{
                 y: {
                   duration: 3,
                   repeat: Infinity,
                   ease: "easeInOut",
                 },
                 hover: {
                   duration: 0.6,
                   type: "spring",
                   stiffness: 100,
                 }
               }}
               className={cn(
                 "absolute -bottom-5 -left-5 w-1/2 h-1/3 rounded-xl p-4 z-30 group",
                 "backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5",
                 "border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
               )}
               style={{
                 transformStyle: "preserve-3d",
                 boxShadow: "0 15px 40px rgba(249, 0, 147, 0.25), 0 0 30px rgba(96, 175, 255, 0.15)",
               }}
             >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neonMagenta/20 via-purple-500/20 to-electricBlue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-center gap-3">
                   <motion.div
                     className="w-10 h-10 rounded-full bg-gradient-to-br from-neonMagenta to-purple-600 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(249,0,147,0.5)]"
                     animate={{
                       boxShadow: [
                         "0 0 20px rgba(249, 0, 147, 0.5)",
                         "0 0 30px rgba(249, 0, 147, 0.8)",
                         "0 0 20px rgba(249, 0, 147, 0.5)",
                       ]
                     }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     AI
                   </motion.div>
                   <div>
                      <div className="text-xs text-slateBlue">Agent Active</div>
                      <div className="text-sm font-bold text-white">Lead Parsing...</div>
                   </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neonMagenta via-purple-500 to-electricBlue rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;