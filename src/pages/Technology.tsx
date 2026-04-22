import { motion } from "framer-motion";
import { Play, ShieldCheck, Zap, BarChart3, Database } from "lucide-react";
import LeadForm from "../components/forms/LeadForm";
import ScanningHUD from "../components/hud/ScanningHUD";

export default function Technology() {
  return (
    <div className="relative pb-24 bg-transparent text-white font-sans overflow-hidden">
      {/* Dynamic Background Glows for Dark Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <section className="py-32 text-center max-w-5xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-blue-500/10 text-brand-accent px-5 py-2 rounded-full font-sans text-[10px] font-extrabold uppercase mb-8 tracking-[0.2em] border border-blue-400/20 shadow-sm backdrop-blur-md">Scientific Core</motion.div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="text-6xl md:text-9xl font-sans font-extrabold uppercase mb-8 tracking-tighter text-white leading-[0.85]"
        >
          Вершина <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">3D</span> биометрии
        </motion.h1>
        <p className="text-xl text-slate-300 font-sans leading-relaxed tracking-tight max-w-3xl mx-auto opacity-80">
          Как Visbody объединяет оптику, ИИ и биоимпедансный анализ для создания самого точного цифрового двойника.
        </p>
      </section>

      {/* 3D Scanning Section */}
      <section className="py-32 bg-white/5 border-y border-white/5 relative">
        <div className="absolute inset-0 nothing-dot-grid opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-block bg-brand-accent text-white px-4 py-1.5 rounded-xl font-sans font-bold text-[10px] uppercase mb-8 tracking-[0.2em]">Этап 01</div>
            <h2 className="text-4xl font-sans font-extrabold uppercase mb-8 text-white tracking-tight">Оптическое 3D-сканирование</h2>
            <p className="text-slate-400 font-sans leading-relaxed mb-10 text-lg">
              За 30 секунд система совершает полный оборот, используя структурированный свет для захвата более 1 миллиона точек данных. Результат — идеальный 3D-аватар с точностью до 1 мм.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl border border-white/5 bg-white/5">
                <Zap className="text-brand-accent mb-3" size={28} />
                <h4 className="text-white font-sans font-extrabold uppercase text-xs mb-1">Скорость</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">32 сек на скан</p>
              </div>
              <div className="p-6 rounded-3xl border border-white/5 bg-white/5">
                <Target size={28} className="text-brand-accent mb-3" />
                <h4 className="text-white font-sans font-extrabold uppercase text-xs mb-1">Точность</h4>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">+/- 1 мм</p>
              </div>
            </div>
          </div>
          <div className="aspect-video bg-white/5 rounded-[40px] border border-white/10 shadow-2xl relative group overflow-hidden cursor-pointer flex items-center justify-center p-8">
             <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="w-20 h-20 rounded-full bg-brand-accent flex items-center justify-center text-white shadow-xl shadow-blue-500/40 group-hover:scale-110 transition-transform">
                <Play size={32} />
             </div>
             <div className="absolute bottom-6 left-6 font-sans font-bold text-[10px] text-slate-500 uppercase tracking-widest leading-none">Видео: демонстрация 3D сканирования</div>
          </div>
        </div>
      </section>

      {/* AI Visual Showcase */}
      <section className="max-w-6xl mx-auto px-4 my-32">
         <div className="glass-card overflow-hidden flex flex-col lg:flex-row items-center border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[48px] shadow-2xl">
            <div className="lg:w-1/2 p-12 lg:p-20 order-2 lg:order-1">
               <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="text-brand-accent font-sans text-[10px] font-extrabold uppercase tracking-[0.4em] mb-6 opacity-60">// AI VISUALIZATION</div>
                  <h2 className="text-4xl md:text-5xl font-sans font-extrabold uppercase mb-8 leading-tight text-white tracking-tight">Цифровой двойник под микроскопом</h2>
                  <p className="text-slate-400 font-sans leading-relaxed text-lg mb-10">
                     Visbody не просто сканирует поверхность — наш ИИ реконструирует внутреннюю архитектуру вашего тела. Мы визуализируем мышечный каркас, жировые депо и костную структуру с точностью медицинского оборудования.
                  </p>
                  <div className="space-y-4">
                     {["Сегментарный анализ мышц", "Визуализация скелетной системы", "Оценка висцерального жира"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-300 font-sans font-bold">
                           <div className="w-2 h-2 bg-brand-accent rounded-full shadow-lg shadow-blue-500/40" />
                           {item}
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>
            <div className="lg:w-1/2 bg-blue-500/10 flex items-center justify-center p-8 order-1 lg:order-2 self-stretch overflow-hidden">
               <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full" />
                  <video 
                     src="/avatar_scan.mp4" 
                     autoPlay 
                     loop 
                     muted 
                     playsInline 
                     className="relative z-10 w-full h-full object-contain mix-blend-lighten scale-150 opacity-80"
                  />
                  <ScanningHUD />
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative p-12">
             <div className="absolute inset-0 bg-blue-500/10 blur-[100px] opacity-20 rounded-full"></div>
             <img src="https://visbody.com/wp-content/uploads/2023/10/model-m30.png" alt="BIA technology" className="relative z-10 mx-auto" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-xl font-sans font-bold text-[10px] uppercase mb-8 tracking-[0.2em]">Этап 02</div>
            <h2 className="text-4xl font-sans font-extrabold uppercase mb-8 text-white tracking-tight">BIA: 8 электродов и 4 частоты</h2>
            <p className="text-slate-400 font-sans leading-relaxed mb-10 text-lg">
              В отличие от бытовых весов, Visbody использует сегментарный анализ. 8 электродов пропускают токи разных частот через каждую конечность и туловище по отдельности.
            </p>
            <ul className="space-y-6 font-sans text-slate-300 font-bold">
              <li className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5 shadow-sm"><ShieldCheck className="text-brand-accent flex-shrink-0" /> Точность DEXA (&gt;98%)</li>
              <li className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5 shadow-sm"><ShieldCheck className="text-brand-accent flex-shrink-0" /> Анализ клеточной и внеклеточной жидкости</li>
              <li className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5 shadow-sm"><ShieldCheck className="text-brand-accent flex-shrink-0" /> Сегментарная оценка мышечной и жировой массы</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 max-w-4xl mx-auto px-4">
         <div className="glass-card p-12 border border-slate-100 bg-white/40">
            <LeadForm title="Узнать больше о технологии" />
         </div>
      </section>
    </div>
  );
}

function Target({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
