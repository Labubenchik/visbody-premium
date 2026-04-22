import { motion } from "framer-motion";
import { BookOpen, Search, ArrowRight, Clock } from "lucide-react";

const ARTICLES = [
  {
    title: "Как 3D-сканер тела помогает продавать персональные тренировки",
    desc: "Психология визуализации: почему клиенты больше доверяют аватару, чем тренеру.",
    category: "Бизнес",
    readTime: "5 мин"
  },
  {
    title: "Топ-5 ошибок при внедрении анализа состава тела в фитнес-клубе",
    desc: "Разбор типичных факапов: от неправильно выбранного места до отсутствия скриптов у тренеров.",
    category: "Опыт",
    readTime: "8 мин"
  },
  {
    title: "Что такое саркопения и как ее выявить с помощью Visbody",
    desc: "Медицинский аспект: как вовремя заметить возрастную потерю мышечной массы.",
    category: "Медицина",
    readTime: "12 мин"
  },
  {
    title: "Кейс: как студия похудения увеличила чек на 40%",
    desc: "Расчет юнит-экономики после внедрения платных диагностик на Visbody.",
    category: "Кейсы",
    readTime: "7 мин"
  },
  {
    title: "Сравнение BIA-анализаторов: Visbody vs InBody",
    desc: "Технический баттл: точность, удобство использования и скорость работы.",
    category: "Обзор",
    readTime: "10 мин"
  }
];

export default function Blog() {
  return (
    <div className="relative pb-24 bg-transparent text-white min-h-screen font-sans">
      {/* Dynamic Background Glows for Dark Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <section className="py-24 text-center max-w-4xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-block bg-blue-500/10 text-brand-accent px-5 py-2 rounded-full font-sans text-[10px] font-extrabold uppercase mb-8 tracking-[0.2em] border border-blue-400/20 shadow-sm backdrop-blur-md">Knowledge Base</motion.div>
        <h1 className="text-6xl md:text-8xl font-sans font-extrabold uppercase tracking-tighter mb-8 leading-[0.85] text-white">
          База <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">Знаний</span>
        </h1>
        <p className="text-xl text-slate-300 font-sans tracking-tight max-w-2xl mx-auto opacity-80">
           Экспертные статьи по биометрии, фитнес-маркетингу и цифровой медицине.
        </p>
      </section>

      {/* Search mock */}
      <section className="max-w-xl mx-auto px-4 mb-20 relative z-10">
         <div className="relative">
            <input 
               type="text" 
               placeholder="Поиск по теме..." 
               className="w-full bg-white/5 border border-white/10 p-6 pl-14 font-sans text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-all rounded-2xl shadow-2xl backdrop-blur-md"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
         </div>
      </section>

      {/* Articles List */}
      <section className="max-w-5xl mx-auto px-4">
         <div className="space-y-8">
            {ARTICLES.map((post, i) => (
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 key={i} 
                 className="group border border-white/5 bg-[#0a1930]/30 backdrop-blur-md p-8 flex flex-col md:flex-row gap-8 items-start hover:border-brand-accent/30 transition-all cursor-pointer rounded-xl"
               >
                  <div className="md:w-1/4">
                     <div className="text-brand-accent font-dot text-xs uppercase tracking-widest mb-3">// {post.category}</div>
                     <div className="flex items-center gap-2 text-gray-500 font-sans text-[10px] uppercase tracking-[0.2em]">
                        <Clock size={12} /> {post.readTime} чтения
                     </div>
                  </div>
                  <div className="md:w-3/4">
                     <h3 className="text-2xl font-dot uppercase text-white mb-4 group-hover:text-brand-accent transition-colors leading-tight">
                        {post.title}
                     </h3>
                     <p className="text-gray-400 font-sans leading-relaxed mb-6">
                        {post.desc}
                     </p>
                     <div className="flex items-center gap-2 text-white font-dot uppercase text-xs tracking-widest">
                        Читать статью <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      <section className="py-24 text-center">
         <button className="text-gray-600 font-dot uppercase tracking-widest text-xs border-b border-gray-600 hover:text-white hover:border-white transition-all pb-1">Показать все статьи</button>
      </section>
    </div>
  );
}
