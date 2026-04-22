import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { playSoftClick } from '../../utils/sounds';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({ id, name, description, price, imageUrl }: ProductCardProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Fallback for broken external images
  const localImage = id.includes('m60') ? '/images/m60.png' : 
                     id.includes('s30') ? '/images/s30.png' :
                     id.includes('r60') ? '/images/r60.png' :
                     id.includes('explorer') ? '/images/s30.png' : imageUrl;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovered(true);
    handleMouseMove(e);
    playSoftClick(220);
  };

  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className="relative glass-card overflow-hidden border border-white/5 bg-white/5 backdrop-blur-3xl group cursor-pointer transition-transform duration-500 hover:-translate-y-2"
    >
      {/* 1. LIQUID REVEAL LAYER */}
      <div 
        className="absolute inset-0 z-0 bg-[#00f2ff] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)]"
        style={{
          clipPath: `circle(${isHovered ? '150%' : '0%'} at ${mousePos.x}% ${mousePos.y}%)`,
        }}
      />

      {/* 2. CARD CONTENT */}
      <div className="relative z-10 flex flex-col h-full">
         <div className={`aspect-[4/5] relative flex items-center justify-center p-8 transition-all duration-500 ${isHovered ? 'bg-white/10' : 'bg-white/5'}`}>
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl"></div>
            <img
              src={localImage}
              alt={name}
              className={`w-full h-full object-contain relative z-10 transform transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
            />
         </div>

         <div className="p-10 flex flex-col flex-grow">
            <div className={`font-sans text-[10px] font-extrabold uppercase tracking-[0.3em] mb-3 transition-colors duration-500 ${isHovered ? 'text-[#020617]/40' : 'text-brand-accent opacity-60'}`}>SYSTEM_HARDWARE</div>
            <h3 className={`text-3xl font-sans font-extrabold tracking-tight mb-4 transition-colors duration-500 leading-none ${isHovered ? 'text-[#020617]' : 'text-white'}`}>{name}</h3>
            <p className={`font-sans text-sm line-clamp-2 mb-8 leading-relaxed transition-colors duration-500 ${isHovered ? 'text-[#020617]/70' : 'text-slate-400'}`}>{description}</p>
            
            <div className="mt-auto flex justify-between items-center">
               <span className={`text-2xl font-sans font-extrabold tracking-tight transition-colors duration-500 ${isHovered ? 'text-[#020617]' : 'text-white'}`}>
                  ${new Intl.NumberFormat().format(price)}
               </span>
               <span className={`p-4 rounded-2xl transition-all duration-500 ${isHovered ? 'bg-[#020617] text-white shadow-2xl' : 'bg-white text-slate-900 shadow-xl'}`}>
                  <ChevronRight size={24} />
               </span>
            </div>
         </div>
      </div>
    </div>
  );
}
