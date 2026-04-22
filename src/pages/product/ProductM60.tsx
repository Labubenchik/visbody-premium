import { Scanner } from "../../services/db";
import { Suspense, lazy } from "react";
import LeadForm from "../../components/forms/LeadForm";
import LiquidImage from "../../components/LiquidImage";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Activity, Cloud, Play } from "lucide-react";

const ThreeCanvas = lazy(() => import("../../components/ThreeCanvas"));

export default function ProductM60({ product }: { product: Scanner }) {
  return (
    <div className="pt-8 relative bg-gradient-to-br from-[#0c0c0c] via-[#111111] to-[#000000] text-white min-h-screen pb-24 overflow-hidden">
       {/* Ambient Glow Background */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

       {/* 1. HERO BLOCK */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto px-4 pt-12">
           {/* LEFT: 3D Hologram / Render with Glowing Rings */}
           <div className="h-[650px] relative flex items-center justify-center">
             
             {/* Glowing Light Rings Background (Silver/Cyan theme for M60) */}
             <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[450px] h-[450px] rounded-full border-[1px] border-white/20 blur-[1px] animate-[spin_15s_linear_infinite]"></div>
                <div className="absolute w-[400px] h-[400px] rounded-full border-t border-brand-accent/40 blur-[2px] animate-[spin_10s_linear_infinite_reverse]"></div>
                <div className="absolute w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-[150px]"></div>
                
                {/* Scanner Base Platform Glow */}
                <div className="absolute bottom-[10%] w-[300px] h-[50px] bg-brand-accent/20 blur-[40px] rounded-[100%] scale-y-50"></div>
             </div>

             <div className="absolute inset-0 z-10">
                <Suspense fallback={<div className="animate-pulse flex items-center justify-center font-dot text-brand-accent p-10 h-full">ИНИЦИАЛИЗАЦИЯ 3D СКАНЕРА...</div>}>
                   <ThreeCanvas productId={product.id} />
                </Suspense>
             </div>
           </div>
           
           <div className="relative z-20">
              <div className="inline-block border border-brand-accent/50 text-brand-accent px-4 py-1 uppercase font-dot text-xs mb-6 tracking-[0.3em] bg-brand-accent/5 backdrop-blur-md">Flagship Model</div>
              <h1 className="text-6xl md:text-8xl font-dot uppercase tracking-tighter mb-6 leading-none text-white overflow-hidden">
                 Visbody <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">M60</span>
              </h1>
              <p className="text-2xl font-sans text-gray-400 mb-10 leading-relaxed max-w-lg">
                 Зеркальный 3D-сканер премиум-сегмента для тех, кто не ищет компромиссов в точности.
              </p>
              
              <div className="space-y-6 mb-12 font-sans border-l-2 border-brand-accent/20 pl-6">
                 <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full border border-brand-accent/50 flex items-center justify-center group-hover:bg-brand-accent transition-colors"><CheckCircle2 size={16} className="text-brand-accent group-hover:text-white" /></div>
                    <span className="text-lg text-gray-200">Медицинская точность (8-электродная BIA)</span>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full border border-brand-accent/50 flex items-center justify-center group-hover:bg-brand-accent transition-colors"><CheckCircle2 size={16} className="text-brand-accent group-hover:text-white" /></div>
                    <span className="text-lg text-gray-200">Полноростовое 3D зеркало с тач-панелью</span>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full border border-brand-accent/50 flex items-center justify-center group-hover:bg-brand-accent transition-colors"><CheckCircle2 size={16} className="text-brand-accent group-hover:text-white" /></div>
                    <span className="text-lg text-gray-200">Глубокая аналитика состава тела + Осанка</span>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                 <button onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="bg-white text-black font-dot uppercase tracking-widest py-5 px-10 hover:bg-brand-accent hover:text-white transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">Запросить КП</button>
                 <button className="border border-white/10 text-white font-dot uppercase tracking-widest py-5 px-10 hover:bg-white/5 transition-all flex items-center gap-3">
                    <Play size={18} className="fill-white" /> Смотреть обзор
                 </button>
              </div>
           </div>
       </div>

       {/* 2. LIQUID IMAGE FEATURE SHOWCASE */}
       <section className="py-24 bg-black/40 border-y border-white/5 text-center">
          <div className="max-w-4xl mx-auto px-4">
             <h2 className="text-4xl font-dot uppercase mb-12">Никаких серых сводок.<br/>Только футуристичная визуализация.</h2>
             <p className="text-gray-400 mb-12 font-sans">Наведите курсор на изображение, чтобы активировать тепловизионный фильтр мышечного дисбаланса.</p>
             <div className="w-full h-96 border border-white/10 ring-4 ring-brand-dark overflow-hidden mx-auto bg-brand-dark/20 p-4">
                 <LiquidImage src={product.imageUrl} alt={product.name} className="w-full h-full" />
             </div>
          </div>
       </section>

       {/* 3. CASE ROI */}
       <section className="py-24 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-12 relative overflow-hidden group border-brand-accent/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-3xl rounded-full"></div>
              <div className="text-6xl font-dot text-white mb-2">+498%</div>
              <div className="text-brand-accent font-dot uppercase tracking-widest mb-6">ROI в первый год</div>
              <p className="text-gray-400 font-sans">По статистике внедрения M60 в премиум сегменте окупаемость достигается благодаря повышению ценности базового контракта.</p>
          </div>
          <div className="glass-card p-12 relative overflow-hidden group border-blue-500/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
              <div className="text-6xl font-dot text-white mb-2">-49%</div>
              <div className="text-blue-500 font-dot uppercase tracking-widest mb-6">Снижение затрат на маркетинг</div>
              <p className="text-gray-400 font-sans">Сам аппарат выступает лид-магнитом (бесплатный скрининг тела) для привлечения потока из соцсетей.</p>
          </div>
       </section>

       {/* 4. COMPARISON WITH S30 */}
       <section className="py-24 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-dot uppercase mb-12 text-center">Сравнение Флагманов</h2>
          <div className="w-full overflow-x-auto">
              <table className="w-full text-left font-sans border-collapse">
                 <thead>
                    <tr className="border-b border-brand-accent font-dot uppercase tracking-wider text-sm text-gray-400">
                       <th className="py-4 px-6">Функция</th>
                       <th className="py-4 px-6 text-brand-accent">Visbody M60</th>
                       <th className="py-4 px-6 text-green-500">Visbody S30</th>
                    </tr>
                 </thead>
                 <tbody className="text-gray-300">
                    <tr className="border-b border-white/5">
                       <td className="py-4 px-6">BIA Технология</td>
                       <td className="py-4 px-6">8-электродная (Медицина)</td>
                       <td className="py-4 px-6">Гибридная (Фитнес)</td>
                    </tr>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                       <td className="py-4 px-6">3D Сканирование</td>
                       <td className="py-4 px-6">Миллиметровая точность</td>
                       <td className="py-4 px-6">Базовая оценка</td>
                    </tr>
                    <tr className="border-b border-white/5">
                       <td className="py-4 px-6">Корпус</td>
                       <td className="py-4 px-6">Зеркальная панель-монолит</td>
                       <td className="py-4 px-6">Стойка + база</td>
                    </tr>
                 </tbody>
              </table>
          </div>
       </section>

       {/* 5. ECOSYSTEM & FORM */}
       <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-brand-dark border-y border-white/10 p-16 flex flex-col justify-center">
             <Cloud className="text-brand-accent w-16 h-16 mb-6" />
             <h2 className="text-3xl font-dot uppercase mb-4 text-white">Экосистема WellnessHub</h2>
             <p className="font-sans text-gray-400 leading-relaxed">
                Все сканирования мгновенно попадают в облако. Клиент получает пуш-уведомление в мобильном приложении с подробным отчетом. Администратор видит аналитику по всем членам клуба в веб-панели.
             </p>
          </div>
          <div className="bg-black/80 flex items-center p-8 lg:p-16 border-y border-white/10">
             <div className="w-full">
               <LeadForm title="Оставьте заявку на КП" />
             </div>
          </div>
       </section>
    </div>
  );
}
