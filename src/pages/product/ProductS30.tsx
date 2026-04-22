import { Scanner } from "../../services/db";
import { Suspense, lazy } from "react";
import LeadForm from "../../components/forms/LeadForm";
import LiquidImage from "../../components/LiquidImage";
import { motion } from "framer-motion";
import { CheckCircle2, Cloud } from "lucide-react";

const ThreeCanvas = lazy(() => import("../../components/ThreeCanvas"));

export default function ProductS30({ product }: { product: Scanner }) {
  return (
    <div className="pt-8 relative bg-gradient-to-br from-[#0a1930] via-[#050f20] to-[#020610] text-white overflow-hidden pb-24">
       {/* 1. HERO BLOCK */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 max-w-6xl mx-auto px-4 pt-10">
           
           {/* LEFT: 3D Render & Glowing Rings */}
           <div className="h-[600px] relative flex items-center justify-center">
             
             {/* Glowing Light Rings Background */}
             <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[400px] h-[400px] rounded-full border-[10px] border-blue-400/30 blur-[2px] shadow-[0_0_50px_rgba(59,130,246,0.6)] animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }}></div>
                <div className="absolute w-[300px] h-[300px] rounded-full border-[6px] border-blue-300/40 blur-[1px] shadow-[0_0_30px_rgba(96,165,250,0.8)] animate-[spin_7s_linear_infinite_reverse]" style={{ borderBottomColor: 'transparent' }}></div>
                <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[100px]"></div>
             </div>

             {/* The 3D Canvas */}
             <div className="absolute inset-0 z-10">
                <Suspense fallback={<div className="font-dot text-blue-400 animate-pulse text-center p-10 h-full flex items-center justify-center">Загрузка 3D модели...</div>}>
                   <ThreeCanvas productId={product.id} />
                </Suspense>
             </div>
           </div>
           
           {/* RIGHT: Main Value */}
              <h1 className="text-5xl md:text-6xl font-sans font-bold tracking-tight mb-4 leading-none text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                 <span className="text-blue-200 bg-white/10 px-3 py-1 rounded inline-block mb-3 text-lg font-normal tracking-normal border border-blue-300/30">Visbody-S30</span><br/>
                 3D-Анализатор тела
              </h1>
              <p className="text-lg font-sans text-blue-100/80 mb-8 leading-relaxed">
                 Первый в мире гибридный 3D-сканер, объединяющий IBS-сканирование и BIA+BDA-анализ для комплексной 360°-оценки тела, включая измерение роста.
              </p>
              
              <div className="space-y-4 mb-10 font-sans">
                 <p className="font-semibold text-blue-100">Безупречная точность:</p>
                 <div className="flex items-center gap-3"><CheckCircle2 className="text-white fill-blue-500" /> <span className="text-blue-50"><strong className="text-white">Детализированный</strong> анализ состава тела</span></div>
                 <div className="flex items-center gap-3"><CheckCircle2 className="text-white fill-blue-500" /> <span className="text-blue-50">Измерение <strong className="text-white">охватов тела</strong></span></div>
                 <div className="flex items-center gap-3"><CheckCircle2 className="text-white fill-blue-500" /> <span className="text-blue-50">Оценка <strong className="text-white">гибкости суставов</strong></span></div>
                 <div className="flex items-center gap-3"><CheckCircle2 className="text-white fill-blue-500" /> <span className="text-blue-50">Оценка <strong className="text-white">осанки</strong></span></div>
              </div>

              <div className="flex items-center gap-6 mb-8 opacity-70">
                 <span className="text-3xl font-bold tracking-tighter">CE</span>
                 <span className="text-3xl font-bold tracking-tighter">FC</span>
                 <span className="text-xl font-bold tracking-widest border rounded px-1">ISO</span>
                 <span className="text-2xl font-bold">RoHS</span>
              </div>

              <button onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="bg-white text-blue-900 font-bold uppercase tracking-wider py-4 px-10 rounded shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] hover:scale-105 transition-all">Получить презентацию</button>
           </div>
       </div>

       {/* 2. LIQUID IMAGE FEATURE SHOWCASE */}
       <section className="py-24 bg-[#030914]/80 border-y border-blue-900/30 text-center">
          <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-4xl font-sans font-bold mb-8 text-white">Интерактивный интерфейс</h2>
             <div className="w-full h-[500px] rounded-xl overflow-hidden mx-auto bg-[#0a1930] p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                 <LiquidImage src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
             </div>
          </div>
       </section>
       
       <section className="grid grid-cols-1 lg:grid-cols-2 mt-12 mb-12">
          <div className="bg-[#050f20] border-y border-blue-900/30 p-16 flex flex-col justify-center">
             <h2 className="text-3xl font-sans font-bold mb-4 text-white">Непревзойденная эстетика</h2>
             <p className="font-sans text-blue-100/70 leading-relaxed mb-6">
                Младший брат модели M60 сохраняет премиальный дизайн и космическую технологичность. Скрытая светодиодная подсветка, плавные линии и абсолютная автономность клиента.
             </p>
             <ul className="text-blue-100 font-sans space-y-3">
                <li className="flex gap-2"><CheckCircle2 className="text-blue-400 w-5 h-5 flex-shrink-0" /> Компактное основание с физическими ручками BIA</li>
                <li className="flex gap-2"><CheckCircle2 className="text-blue-400 w-5 h-5 flex-shrink-0" /> Вертикальный тач-скрин дисплей высокой четкости</li>
                <li className="flex gap-2"><CheckCircle2 className="text-blue-400 w-5 h-5 flex-shrink-0" /> Вращающаяся на 360° платформа</li>
             </ul>
          </div>
          <div className="bg-[#020610] flex items-center p-8 lg:p-16 border-y border-blue-900/30">
             <div className="w-full">
               <LeadForm title="Скачать PDF Брошюру" />
             </div>
          </div>
       </section>
    </div>
  );
}
