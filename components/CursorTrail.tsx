import React, { useEffect, useRef } from 'react';

interface Trail {
  x: number;
  y: number;
  timestamp: number;
  hue: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailsRef = useRef<Trail[]>([]);
  const frameRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Add new trail point with brand color (electricBlue or neonMagenta)
      const hue = Math.random() > 0.5 ? 200 : 320; // electricBlue (200) or neonMagenta (320)
      trailsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        hue,
      });

      // Limit trail length
      if (trailsRef.current.length > 30) {
        trailsRef.current.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const now = Date.now();
      const maxAge = 800; // Trail duration in ms

      // Filter out old trails
      trailsRef.current = trailsRef.current.filter(
        (trail) => now - trail.timestamp < maxAge
      );

      // Draw trails
      trailsRef.current.forEach((trail, index) => {
        const age = now - trail.timestamp;
        const lifeRatio = 1 - age / maxAge;

        // Calculate size and opacity based on age
        const size = 8 * lifeRatio;
        const opacity = lifeRatio * 0.6;

        // Create gradient
        const gradient = ctx.createRadialGradient(
          trail.x,
          trail.y,
          0,
          trail.x,
          trail.y,
          size * 2
        );

        const lightness = trail.hue === 200 ? '70%' : '60%';
        gradient.addColorStop(0, `hsla(${trail.hue}, 100%, ${lightness}, ${opacity})`);
        gradient.addColorStop(1, `hsla(${trail.hue}, 100%, ${lightness}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines between trail points for smooth effect
        if (index > 0) {
          const prevTrail = trailsRef.current[index - 1];
          ctx.strokeStyle = `hsla(${trail.hue}, 100%, ${lightness}, ${opacity * 0.3})`;
          ctx.lineWidth = size * 0.5;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(prevTrail.x, prevTrail.y);
          ctx.lineTo(trail.x, trail.y);
          ctx.stroke();
        }
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;
