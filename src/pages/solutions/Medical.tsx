import { motion } from "framer-motion";
import { Activity, ShieldCheck, FileCheck, BrainCircuit, ArrowRight } from "lucide-react";
import LeadForm from "../../components/forms/LeadForm";
import { Link } from "react-router-dom";

export default function Medical() {
  return (
    <div className="relative pb-24 bg-[#020617] text-white min-h-screen">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* HEADER */}
      <section className="py-24 text-center px-4 relative z-10">
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block border border-blue-500/50 text-blue-500 px-4 py-1.5 uppercase font-dot text-xs mb-6 bg-blue-500/10 tracking-[0.3em]">Medical Solution</motion.div>
         <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-dot uppercase tracking-tighter mb-8 text-white">Для <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">медицинских</span> центров</motion.h1>
         <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">Научно-обоснованный подход к анализу состава тела (BIA) и оценке функций опорно-двигательного аппарата.</p>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
         <div className="bg-brand-dark border border-white/5 p-10 relative overflow-hidden">
            <h3 className="text-gray-500 font-dot uppercase text-xl mb-4">// Проблема</h3>
            <p className="text-2xl font-sans font-light text-white leading-relaxed">Врачам не хватает объективных, валидируемых аппаратных данных для точной оценки прогресса реабилитации пациента.</p>
            <Activity className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5" />
         </div>
         <div className="bg-blue-500/5 border border-blue-500/20 p-10 relative overflow-hidden">
            <h3 className="text-blue-500 font-dot uppercase text-xl mb-4">// Решение Visbody</h3>
            <p className="text-2xl font-sans font-light text-white leading-relaxed">Использование Visbody M60/R60 как официального медицинского инструмента с акцентом на 8-электродный BIA и 3D-осанку.</p>
            <ShieldCheck className="absolute -bottom-10 -right-10 w-48 h-48 text-blue-500/10" />
         </div>
      </section>

      {/* DIRECTIONS */}
      <section className="py-12 max-w-6xl mx-auto px-4">
         <h2 className="text-3xl font-dot uppercase text-center mb-16">Для каких направлений</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
               { title: "Реабилитация", desc: "Анализ симметрии плеч, таза, выявление мышечных дисбалансов (ROM)." },
               { title: "Диетология", desc: "Точный расчет жировой и мышечной массы по сегментам." },
               { title: "Спортивная медицина", desc: "Мониторинг перетренированности и скрытых отеков." },
               { title: "Эстетика", desc: "Миллиметровый анализ изменения объемов тела до/после процедур." }
            ].map((dir, i) => (
               <div key={i} className="glass-card p-6 border-t border-white/10 hover:border-blue-500 transition-colors">
                  <h4 className="font-dot uppercase text-lg text-white mb-3 text-blue-400">{dir.title}</h4>
                  <p className="font-sans text-sm text-gray-400">{dir.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* SCIENCE AND INTEGRATION */}
      <section className="py-20 mb-20">
         <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-white/10 p-8">
               <FileCheck className="text-blue-500 mb-6" size={40} />
               <h3 className="text-2xl font-dot uppercase mb-4 text-white">Научная база</h3>
               <p className="text-gray-400 font-sans leading-relaxed mb-4">
                  Алгоритмы Visbody прошли строгую валидацию и сопоставимы с золотыми медицинскими стандартами (DEXA).
               </p>
               <ul className="text-sm text-gray-500 font-sans space-y-2">
                  <li>• Одобрение FDA (США)</li>
                  <li>• Совпадение с DEXA &gt; 98%</li>
               </ul>
            </div>
            <div className="border border-white/10 p-8">
               <BrainCircuit className="text-brand-accent mb-6" size={40} />
               <h3 className="text-2xl font-dot uppercase mb-4 text-white">IT-Интеграция</h3>
               <p className="text-gray-400 font-sans leading-relaxed">
                  Полная поддержка API для интеграции с клиническими системами (МИС), экспорт отчетов в формате PDF для электронных карт пациентов. Защищенное облако хранения.
               </p>
            </div>
         </div>
      </section>

      {/* LINK TO PRODUCT AND FORM */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div>
             <h3 className="text-3xl font-dot uppercase mb-6 leading-tight">Флагман для клиник:<br/>Visbody M60</h3>
             <p className="text-gray-400 font-sans mb-8">Интеллектуальный 3D-сканер с 8-электродным биоимпедансным анализом экспертного класса.</p>
             <Link to="/product/visbody-m60" className="inline-flex items-center gap-4 border border-blue-500 text-blue-500 px-8 py-4 font-dot uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
                Спецификация M60 <ArrowRight />
             </Link>
         </div>
         <div className="glass-card">
            <LeadForm title="Запросить презентацию для клиники" />
         </div>
      </div>
    </div>
  );
}
