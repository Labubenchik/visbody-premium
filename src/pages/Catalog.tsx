import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getScanners, Scanner } from "../services/db";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ProductCard from "../components/cards/ProductCard";

export default function Catalog() {
  const [scanners, setScanners] = useState<Scanner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getScanners().then((data) => {
      setScanners(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent pb-24 overflow-hidden">
      {/* Dynamic Background Glows for Dark Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 relative z-10">
        <div className="mb-20 text-center relative">
           <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-blue-500/10 text-brand-accent px-4 py-1.5 rounded-full font-sans text-[10px] font-extrabold uppercase mb-6 tracking-[0.2em] border border-blue-400/20 shadow-sm backdrop-blur-md">Hardware Ecosystem</motion.div>
           <h1 className="text-5xl md:text-8xl font-sans font-extrabold uppercase tracking-tighter mb-6 text-white">Системы <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">Visbody</span></h1>
           <p className="text-lg text-slate-300 font-sans tracking-tight max-w-2xl mx-auto opacity-80">Профессиональные решения для анализа состава тела и 3D-антропометрии</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="font-sans font-extrabold text-4xl animate-pulse tracking-widest text-brand-accent/20">LOADING...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {scanners.map((scanner, idx) => (
              <motion.div
                key={scanner.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/product/${scanner.id}`}>
                  <ProductCard {...scanner} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
