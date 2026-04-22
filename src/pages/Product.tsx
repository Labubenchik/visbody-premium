import { Suspense, lazy, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getScannerById, Scanner } from "../services/db";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ShoppingCart, ChevronRight, Home as HomeIcon } from "lucide-react";

const ThreeCanvas = lazy(() => import("../components/ThreeCanvas"));
const ProductM60 = lazy(() => import("./product/ProductM60"));
const ProductS30 = lazy(() => import("./product/ProductS30"));

const Breadcrumbs = ({ name }: { name: string }) => (
  <nav className="flex mb-8 text-sm font-sans uppercase tracking-[0.2em] text-gray-500 items-center gap-2 overflow-x-auto whitespace-nowrap pb-2">
    <Link to="/" className="hover:text-brand-accent transition-colors flex items-center gap-1">
      <HomeIcon size={14} /> Главная
    </Link>
    <ChevronRight size={14} />
    <Link to="/catalog" className="hover:text-brand-accent transition-colors">Оборудование</Link>
    <ChevronRight size={14} />
    <span className="text-brand-accent font-bold truncate">{name}</span>
  </nav>
);

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Scanner | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getScannerById(id).then(data => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
     return (
       <div className="py-24 flex justify-center items-center h-screen">
         <div className="font-dot text-4xl animate-pulse tracking-widest text-brand-gray">LOADING...</div>
       </div>
     );
  }

  if (!product && !loading) {
     return <div className="py-24 text-center font-dot text-2xl text-red-500 uppercase">SYSTEM ERROR. DEVICE NOT FOUND. <br/><Link to="/catalog" className="text-brand-accent underline mt-4 inline-block">RETURN TO CATALOG</Link></div>;
  }

  const renderProductContent = () => {
    if (!product) return null;
    const pid = product.id.toLowerCase();
    
    if (pid.includes('m60')) {
      return (
        <Suspense fallback={<div className="py-24 text-center font-dot text-2xl animate-pulse">ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ M60...</div>}>
          <ProductM60 product={product} />
        </Suspense>
      );
    }
    
    if (pid.includes('s30')) {
      return (
        <Suspense fallback={<div className="py-24 text-center font-dot text-2xl animate-pulse">ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ S30...</div>}>
          <ProductS30 product={product} />
        </Suspense>
      );
    }

    return (
      <div className="glass-card rounded-none p-6 md:p-12 border border-white/10 relative">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-accent z-20"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-accent z-20"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-[400px] lg:h-[600px] w-full bg-brand-dark/80 border border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0 opacity-20 nothing-dot-grid"></div>
                <Suspense fallback={<div className="text-brand-accent animate-pulse font-dot text-2xl uppercase">Initializing 3D Core...</div>}>
                   <ThreeCanvas productId={product.id} />
                </Suspense>
            </div>

            <div className="bg-brand-dark/60 p-8 border-l border-white/10">
               <div className="font-dot text-brand-accent mb-2 uppercase tracking-widest text-sm">// SYSTEM DIAGNOSTICS //</div>
               <h1 className="text-4xl md:text-6xl font-dot uppercase mb-4 text-white tracking-wider">{product.name}</h1>
               <div className="text-4xl font-dot text-brand-accent mb-8 drop-shadow-[0_0_10px_rgba(255,0,21,0.5)]">
                  ${new Intl.NumberFormat('en-US').format(product.price)}
               </div>
               <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">{product.description}</p>
               <div className="mb-10">
                  <h3 className="font-dot uppercase tracking-wider text-gray-500 text-lg mb-4">Core Specifications</h3>
                  <ul className="space-y-4 font-sans font-light text-gray-300">
                     {product.features?.map((f: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm">
                           <CheckCircle2 size={16} className="text-brand-accent mr-3" />
                           {f}
                        </li>
                     ))}
                   </ul>
                </div>
               <button onClick={() => alert('Initiating order sequence...')} className="w-full md:w-auto flex items-center justify-center gap-3 bg-white hover:bg-brand-accent text-black hover:text-white font-dot uppercase tracking-widest text-xl py-4 px-10 transition-all border border-transparent hover:border-brand-accent">
                  <ShoppingCart size={22} /> Запросить КП
               </button>
            </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs name={product?.name || "Загрузка..."} />
        {renderProductContent()}
      </div>
    </motion.div>
  );
}
