import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Activity, Building2, Dumbbell, ShieldCheck, Play, ArrowRight } from "lucide-react";
import RoiCalculator from "../components/forms/RoiCalculator";
import { Suspense, lazy } from "react";
import ScanningHUD from "../components/hud/ScanningHUD";

const ThreeCanvas = lazy(() => import("../components/ThreeCanvas"));

export default function Home() {
  return (
    <div className="relative bg-transparent text-white font-sans overflow-x-hidden selection:bg-brand-accent/20">
      {/* Dynamic Background Glows for Dark Theme */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-24 mb-12 overflow-hidden">
         {/* Background AI Video Avatar (Light Mode Blending) */}
         <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
            {/* Soft Floating Rings */}
            <div className="absolute w-[800px] h-[800px] rounded-full border border-blue-100/50 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border border-cyan-100/50 animate-[spin_25s_linear_infinite_reverse]"></div>
            
            <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center">
               <video 
                 src="/avatar_scan.mp4" 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-contain mix-blend-lighten scale-150 filter brightness-125 contrast-125 opacity-60"
                 className="w-full h-full object-contain mix-blend-screen scale-150 filter brightness-125 contrast-125 opacity-60"
               />
               <ScanningHUD />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#0a1930]/40 pointer-events-none" />
            </div>
         </div>

         <div className="relative z-10 text-center max-w-4xl px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-blue-500/10 text-brand-accent px-5 py-2 rounded-full font-sans text-[10px] font-extrabold uppercase mb-8 tracking-[0.2em] border border-blue-400/20 shadow-sm backdrop-blur-md">Global Leader in 3D Body Scanning</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-9xl font-sans font-extrabold uppercase tracking-tighter mb-8 leading-[0.85] text-white">
               Digital <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-blue-400">Health</span><br/>Engine.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-sans text-slate-300 max-w-2xl mx-auto tracking-tight leading-relaxed opacity-80">
               Visbody — ИИ-аналитика состава тела для самых прогрессивных фитнес-клубов и клиник.
            </motion.p>
         </div>

         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-24 px-4 pb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="glass-card glass-card-hover p-12 bg-white/5 border border-white/10 group">
               <div className="flex justify-between items-start mb-10">
                  <div>
                     <h2 className="text-4xl font-sans font-extrabold uppercase tracking-tight text-white mb-2">Visbody M60</h2>
                     <p className="text-slate-400 font-sans text-xs font-bold uppercase tracking-[0.3em]">Premium Mirror System</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-brand-accent shadow-inner">
                     <ShieldCheck size={32} />
                  </div>
               </div>
               <Link to="/product/visbody-m60" className="inline-flex items-center gap-3 bg-white text-slate-900 font-sans font-extrabold uppercase tracking-widest text-xs py-4 px-8 rounded-2xl hover:bg-brand-accent hover:text-white transition-all shadow-xl">
                  Подробнее <ArrowRight size={18} />
               </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="glass-card glass-card-hover p-12 bg-white/5 border border-white/10 group">
               <div className="flex justify-between items-start mb-10">
                  <div>
                     <h2 className="text-4xl font-sans font-extrabold uppercase tracking-tight text-white mb-2">Visbody S30</h2>
                     <p className="text-slate-400 font-sans text-xs font-bold uppercase tracking-[0.3em]">Hybrid Analysis System</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-brand-accent shadow-inner">
                     <Dumbbell size={32} />
                  </div>
               </div>
               <Link to="/product/visbody-s30" className="inline-flex items-center gap-3 bg-white text-slate-900 font-sans font-extrabold uppercase tracking-widest text-xs py-4 px-8 rounded-2xl hover:bg-brand-accent hover:text-white transition-all shadow-xl">
                  Подробнее <ArrowRight size={18} />
               </Link>
            </motion.div>
         </div>
      </section>

      <div className="mt-48 mb-32 max-w-7xl mx-auto px-4">
         
         {/* 3. TARGET AUDIENCE */}
         <section className="mb-32">
            <h3 className="text-center font-sans font-extrabold text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-16">// TARGET SEGMENTS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                  { icon: Dumbbell, title: "Фитнес-клубы", text: "Апселл и удержание" },
                  { icon: Activity, title: "Мед. Центры", text: "Объективный анализ" },
                  { icon: Building2, title: "Студии реабилитации", text: "Оценка прогресса" },
                  { icon: ShieldCheck, title: "Wellness", text: "Премиум сервис" },
               ].map((item, idx) => (
                  <div key={idx} className="glass-card p-10 flex flex-col items-center hover:-translate-y-2 transition-all border border-white/5 shadow-xl bg-white/5">
                     <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center text-brand-accent mb-6">
                        <item.icon size={32} />
                     </div>
                     <h4 className="font-sans font-extrabold uppercase text-lg text-white mb-3 leading-none">{item.title}</h4>
                     <p className="font-sans text-sm text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* 4. VALUE METRICS */}
         <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-900/40 border border-white/5 rounded-[48px] p-16 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full nothing-dot-grid opacity-30"></div>
             <div className="relative z-10">
                <div className="text-8xl md:text-9xl font-sans font-extrabold text-brand-accent mb-2 tracking-tighter shadow-sm">+356%</div>
                <div className="text-2xl font-sans font-extrabold uppercase tracking-tight text-white/90">Рост выручки</div>
                <p className="font-sans text-slate-400 mt-6 leading-relaxed text-lg opacity-80">Внедрение 3D-аналитики напрямую конвертирует базовых клиентов в покупателей персональных тренировок.</p>
             </div>
             <div className="relative z-10">
                <div className="text-8xl md:text-9xl font-sans font-extrabold text-white/20 mb-2 tracking-tighter">+45%</div>
                <div className="text-2xl font-sans font-extrabold uppercase tracking-tight text-white/90">Удержание (LTV)</div>
                <p className="font-sans text-slate-400 mt-6 leading-relaxed text-lg opacity-80">Регулярный миллиметровый трекинг мотивирует не бросать занятия — результат виден сразу.</p>
             </div>
         </section>

          {/* 5. HOW IT WORKS */}
          <section className="mb-32 text-center">
             <h3 className="text-center font-sans font-extrabold text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-16">// THE PROCESS</h3>
             <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
                <div className="hidden md:block absolute top-[60%] left-[15%] right-[15%] h-[2px] bg-white/5 -z-10"></div>
                {[
                   { step: "01", title: "Вход в систему", desc: "Автоматическое определение веса и баланса" },
                   { step: "02", title: "3D Сканирование", desc: "Безопасное оптическое создание цифрового двойника" },
                   { step: "03", title: "Анализ данных", desc: "ИИ анализирует осанку и состав тела" }
                ].map((s, idx) => (
                   <div key={idx} className="border border-white/5 p-10 w-full md:w-1/3 relative z-10 glass-card shadow-xl bg-white/5">
                      <span className="text-6xl font-sans font-extrabold text-brand-accent/5 absolute top-6 right-6">{s.step}</span>
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-brand-accent mb-8 font-sans font-extrabold text-xl">{idx + 1}</div>
                      <h4 className="text-xl font-sans font-extrabold uppercase text-white mb-4">{s.title}</h4>
                      <p className="font-sans text-slate-400 leading-relaxed text-sm opacity-80">{s.desc}</p>
                   </div>
                ))}
             </div>
          </section>

          {/* 6. SHORT CASE & ROI */}
          <section className="mb-24">
             <div className="bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-[32px] p-12 mb-16 max-w-4xl mx-auto shadow-sm backdrop-blur-md">
                <p className="font-sans text-xl text-slate-300 italic mb-6 leading-relaxed">"После установки Visbody M60, продажи пакетов персональных тренировок в нашем клубе выросли на 30% всего за два месяца. Это лучший инструмент для тренера."</p>
                <span className="font-sans font-extrabold uppercase text-brand-accent tracking-widest text-xs">— Сеть фитнес-клубов X</span>
             </div>

             <div className="glass-card p-12 bg-white/5 border border-white/10">
                <RoiCalculator />
             </div>
          </section>

      </div>
    </div>
  );
}
