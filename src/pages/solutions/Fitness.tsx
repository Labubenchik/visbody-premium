import { motion } from "framer-motion";
import { Users, TrendingUp, Clock, Target, ArrowRight } from "lucide-react";
import RoiCalculator from "../../components/forms/RoiCalculator";
import { Link } from "react-router-dom";

export default function Fitness() {
  return (
    <div className="relative pb-24 bg-[#020617] text-white min-h-screen">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* HEADER */}
      <section className="py-24 text-center px-4 relative z-10">
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block border border-green-500/50 text-green-500 px-4 py-1.5 uppercase font-dot text-xs mb-6 bg-green-500/10 tracking-[0.3em]">Business Solution</motion.div>
         <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-dot uppercase tracking-tighter mb-8 text-white">Для фитнес-<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white">индустрии</span></motion.h1>
         <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">Инструмент удержания клиентов и кратного роста продаж персональных тренировок.</p>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
         <div className="bg-red-500/5 border border-red-500/20 p-10">
            <h3 className="text-red-500 font-dot uppercase text-xl mb-4">// Проблема</h3>
            <p className="text-2xl font-sans font-light text-white leading-relaxed">«Клиенты бросают тренировки на 2-3 месяц, потому что не видят визуального прогресса в обычном зеркале».</p>
         </div>
         <div className="bg-green-500/5 border border-green-500/20 p-10">
            <h3 className="text-green-500 font-dot uppercase text-xl mb-4">// Решение Visbody</h3>
            <p className="text-2xl font-sans font-light text-white leading-relaxed">Оцифровка прогресса. Визуализация миллиметровых изменений в 3D мотивирует продлевать абонементы.</p>
         </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 max-w-5xl mx-auto px-4">
         <h2 className="text-3xl font-dot uppercase text-center mb-16">Как внедрить в бизнес-процесс</h2>
         <div className="flex flex-col md:flex-row gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-brand-accent/30 -z-10"></div>
            {[
               { title: "Скрининг при старте", desc: "Входит в стартовую тренировку. Выявляет дисбалансы." },
               { title: "Промежуточные замеры", desc: "Каждые 4 недели для корректировки плана питания." },
               { title: "Отчеты и Upsell", desc: "Наглядный отчет продает следующие пакеты тренировок." }
            ].map((step, i) => (
               <div key={i} className="glass-card p-8 flex-1 border-t-2 border-brand-accent bg-brand-dark">
                  <div className="text-4xl font-dot text-brand-accent/50 mb-4">0{i+1}</div>
                  <h4 className="text-lg font-dot uppercase text-white mb-2">{step.title}</h4>
                  <p className="text-sm font-sans text-gray-400">{step.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* METRICS */}
      <section className="py-20 bg-black/50 border-y border-white/5 my-20">
         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
               <div className="text-6xl font-dot text-brand-accent mb-2">+356%</div>
               <div className="text-white font-dot uppercase tracking-wide">Рост выручки с ПТ</div>
            </div>
            <div>
               <div className="text-6xl font-dot text-green-500 mb-2">+20%</div>
               <div className="text-white font-dot uppercase tracking-wide">Вовлеченность клиентов</div>
            </div>
            <div>
               <div className="text-6xl font-dot text-blue-500 mb-2">-30%</div>
               <div className="text-white font-dot uppercase tracking-wide">Время на консультацию</div>
            </div>
         </div>
      </section>

      {/* LINK TO PRODUCT */}
      <div className="text-center mb-24">
         <h3 className="text-2xl font-dot uppercase mb-6">Рекомендуемое оборудование</h3>
         <Link to="/product/visbody-s30" className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 font-dot uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all">
            Смотреть Visbody S30 <ArrowRight />
         </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
         <RoiCalculator />
      </div>
    </div>
  );
}
