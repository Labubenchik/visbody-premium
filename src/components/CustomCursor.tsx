import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { playSoftClick } from "../utils/sounds";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const springConfig = { stiffness: 500, damping: 28 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        if (!isHovering) playSoftClick(220); // Deep 220Hz click for UI
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering, mouseX, mouseY]);

  return (
    <>
      {/* Glow Effect Layer */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-brand-accent/20 rounded-full blur-[40px] pointer-events-none z-[9999] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.5 : 1,
        }}
      />

      {/* Outer Ring with Gradient */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-blue-400/30 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 1 : 0.6,
          background: isHovering ? "radial-gradient(circle, rgba(0, 242, 255, 0.15) 0%, transparent 70%)" : "transparent",
          borderColor: isHovering ? "rgba(0, 242, 255, 0.5)" : "rgba(14, 165, 233, 0.3)",
        }}
      >
        <div className="absolute inset-0 border border-brand-accent/10 rounded-full scale-125 animate-pulse" />
      </motion.div>

      {/* Inner Soft Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-full pointer-events-none z-[10000] hidden md:block shadow-[0_0_15px_rgba(0,242,255,0.8)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 0.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
      />
    </>
  );
}
