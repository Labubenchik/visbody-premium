import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter, Milestone } from "lucide-react";
import LeadForm from "../components/forms/LeadForm";

const CATEGORIES = ["Все", "Фитнес", "Медицина", "Реабилитация", "Студии"];

const CASES_DATA = [
  {
    id: 1,
    category: "Фитнес",
    company: "Сеть клубов 'World Class'",
    task: "Низкая конверсия из гостевого визита в покупку абонемента и ПТ.",
    solution: "Внедрение Visbody S30 как обязательного этапа стартового тестирования.",
    result: { value: "+30%", desc: "Рост продаж ПТ за 3 мес." },
    imageUrl: "https://visbody.com/wp-content/uploads/2023/10/Explorer-front.png"
  },
  {
    id: 2,
    category: "Медицина",
    company: "Клиника 'МЕДСИ'",
    task: "Отсутствие визуальных доказательств эффективности программ похудения.",
    solution: "Использование Visbody M60 для создания отчетов 'До/После' в 3D.",
    result: { value: "4 мес.", desc: "Полная окупаемость аппарата" },
    imageUrl: "https://visbody.com/wp-content/uploads/2023/10/model-m30.png"
  },
  {
    id: 3,
    category: "Студии",
    company: "EMS-студия 'Fit-N-Go'",
    task: "Выделение на фоне конкурентов в малом формате бизнеса.",
    solution: "Установка Visbody M60 как центрального элемента клиентского сервиса.",
    result: { value: "+45%", desc: "LTV (жизненный цикл клиента)" },
    imageUrl: "https://visbody.com/wp-content/uploads/2023/10/model-s30.png"
  }
];

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredCases = activeCategory === "Все" 
    ? CASES_DATA 
    : CASES_DATA.filter(c => c.category === activeCategory);

  return (
    <div className="relative pb-24 bg-[#020617] text-white min-h-screen overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <section className="py-24 text-center px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-block border border-brand-accent/50 text-brand-accent px-4 py-1 uppercase font-dot text-xs mb-6 tracking-[0.3em]">Success Stories</motion.div>
        <h1 className="text-6xl md:text-8xl font-dot uppercase tracking-tighter mb-8 leading-none text-white">
           Результаты в <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">цифрах</span>
        </h1>
        <p className="text-xl text-gray-400 font-sans uppercase tracking-[0.2em] max-w-2xl mx-auto">
           Реальные кейсы внедрения Visbody в бизнес-процессы наших партнеров.
        </p>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
           {CATEGORIES.map(cat => (
             <button 
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-8 py-3 font-dot uppercase tracking-widest text-xs transition-all border ${activeCategory === cat ? 'bg-white text-black border-white' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
             >
               {cat}
             </button>
           ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
         <div className="grid grid-cols-1 gap-12">
            <AnimatePresence mode="popLayout">
               {filteredCases.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.id}
                    className="glass-card flex flex-col lg:flex-row overflow-hidden border border-white/5 hover:border-brand-accent/30 transition-colors"
                  >
                     {/* Image Column */}
                     <div className="lg:w-1/3 h-64 lg:h-auto bg-brand-dark/50 relative overflow-hidden flex items-center justify-center p-8">
                        <img src={item.imageUrl} alt={item.company} className="max-h-full object-contain relative z-10" />
                        <div className="absolute inset-0 nothing-dot-grid opacity-10"></div>
                     </div>
                     
                     {/* Content Column */}
                     <div className="lg:w-2/3 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                           <div>
                              <div className="text-brand-accent font-dot text-xs uppercase tracking-widest mb-2">// {item.category}</div>
                              <h2 className="text-3xl font-dot uppercase text-white">{item.company}</h2>
                           </div>
                           <div className="bg-brand-accent/10 border border-brand-accent/20 p-4 min-w-[200px] text-center">
                              <div className="text-3xl font-dot text-brand-accent">{item.result.value}</div>
                              <div className="text-[10px] font-sans text-gray-400 uppercase tracking-widest">{item.result.desc}</div>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-white/5 pt-8">
                           <div>
                              <h4 className="text-gray-500 font-dot uppercase text-xs mb-3">Задача:</h4>
                              <p className="text-sm text-gray-300 font-sans leading-relaxed">{item.task}</p>
                           </div>
                           <div>
                              <h4 className="text-gray-500 font-dot uppercase text-xs mb-3">Решение:</h4>
                              <p className="text-sm text-gray-300 font-sans leading-relaxed">{item.solution}</p>
                           </div>
                        </div>

                        <button className="flex items-center gap-2 text-white font-dot uppercase tracking-widest text-xs hover:text-brand-accent transition-colors group">
                           Свидетельство установки <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={16} />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </AnimatePresence>
         </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4">
         <div className="text-center mb-12">
            <h3 className="text-3xl font-dot uppercase mb-2">Хотите такой же результат?</h3>
            <p className="text-gray-400 font-sans uppercase tracking-widest text-xs">Обсудим вашу бизнес-модель и рассчитаем потенциал.</p>
         </div>
         <div className="glass-card">
            <LeadForm title="Обсудить кейс" />
         </div>
      </section>
    </div>
  );
}
