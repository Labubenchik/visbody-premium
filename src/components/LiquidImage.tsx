import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface LiquidImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function LiquidImage({ src, alt, className = "" }: LiquidImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smoother movement (not instantaneous)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate relative mouse position (0 to 1) within the image
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden cursor-crosshair ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Base Image */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain relative z-0 transition-transform duration-700 ease-out"
        style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}
      />

      {/* Distortion Layer - Revealed on hover via clip-path mask */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          clipPath: `circle(25% at ${springX}% ${springY}%)`,
          transition: "opacity 0.3s ease-in-out"
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-contain filter"
          style={{ // Chromatic shift + blur + contrast
             filter: "hue-rotate(90deg) saturate(200%) blur(5px) contrast(1.5)",
             mixBlendMode: "hard-light",
             transform: "scale(1.05)"
          }}
        />
      </motion.div>

      {/* Glitch Overlay scanline triggered by hover */}
      <div 
         className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent via-brand-accent/20 to-transparent"
         style={{
            transform: isHovered ? "translateY(100%)" : "translateY(-100%)",
            transition: "transform 1.5s ease-in-out",
            height: "20%"
         }}
      />
    </div>
  );
}
