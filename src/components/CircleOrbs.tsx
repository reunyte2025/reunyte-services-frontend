'use client';

import React, { useEffect, useRef } from 'react';

interface Orb {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  offsetX: number;
  offsetY: number;
  phase: number;
  opacity: number;
}

const CircleOrbs: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<Orb[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initializeOrbs();
    };
    
    const initializeOrbs = () => {
      const rect = container.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // ============================================
      // 🎨 EASY ORB CONFIGURATION
      // ============================================
      // Just copy-paste a line to add more orbs!
      // 
      // Format: createOrb(horizontalPosition, verticalPosition, size, transparency, animationSpeed)
      // 
      // horizontalPosition: left(-) or right(+) from center (try values like -400, 0, 300)
      // verticalPosition: up(-) or down(+) from center (try values like -200, 0, 400)
      // size: radius of the orb in pixels (recommended: 40-80)
      // transparency: how see-through it is (0.2 = very light, 0.5 = medium, 0.8 = strong)
      // animationSpeed: different number for each orb (0, 1.2, 2.4, 3.6, etc.)
      
      const createOrb = (xOffset: number, yOffset: number, size: number, opacity: number, phase: number): Orb => ({
        x: cx + xOffset,
        y: cy + yOffset,
        baseX: cx + xOffset,
        baseY: cy + yOffset,
        size,
        offsetX: 0,
        offsetY: 0,
        phase,
        opacity
      });

      orbsRef.current = [
        // Left top area
        createOrb(-500, -200, 80, 0.4, 0),
        
        // Right top area
        createOrb(280, -250, 80, 0.35, 1.2),

        createOrb(650, 40, 80, 0.35, 1.2),
        
        // Center area
        createOrb(0, 150, 70, 0.45, 2.4),
        
        // Left bottom area
        createOrb(-450, 600, 55, 0.38, 3.6),
        
        // Right bottom area
        createOrb(280, 390, 80, 0.42, 4.8),

        createOrb(-350, 100, 55, 0.42, 4.8),
        
        // 💡 WANT MORE ORBS? Just copy any line above and change the numbers!
        // Example: createOrb(-200, 100, 45, 0.3, 6.0),
      ];
    };

    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawOrb = (orb: Orb) => {
      // Save context state for transparency
      ctx.save();
      
      // Set global alpha for the entire orb
      ctx.globalAlpha = orb.opacity;

      const g = ctx.createRadialGradient(
        orb.x,
        orb.y,
        0,
        orb.x,
        orb.y,
        orb.size
      );

      // 🎯 CLEAN, NON-STACKING GRADIENT with transparency
      g.addColorStop(0.0, '#407BFF');   // Bright center
      g.addColorStop(0.75, '#122246');  // Deep blue
      g.addColorStop(1.0, '#000000');   // Black edge

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Restore context state
      ctx.restore();
    };

    let t = 0;

    const animate = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      t += 0.003;

      orbsRef.current.forEach((orb) => {
        // 🌊 FLOAT (very subtle)
        const floatX = Math.cos(t + orb.phase) * 6;
        const floatY = Math.sin(t + orb.phase) * 6;

        // 🧲 MOUSE INFLUENCE (Three.js style)
        const dx = mouseRef.current.x - orb.baseX;
        const dy = mouseRef.current.y - orb.baseY;
        const dist = Math.hypot(dx, dy);

        const influence = Math.max(0, 1 - dist / 500);

        const targetX = orb.baseX + dx * influence * 0.04 + floatX;
        const targetY = orb.baseY + dy * influence * 0.04 + floatY;

        // ✨ LERP = smooth cinematic motion
        orb.x += (targetX - orb.x) * 0.04;
        orb.y += (targetY - orb.y) * 0.04;

        drawOrb(orb);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-[1]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default CircleOrbs;