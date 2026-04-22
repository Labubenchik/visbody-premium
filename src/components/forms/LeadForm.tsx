import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadForm({ title = "Оставьте заявку" }: { title?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-brand-accent/20 border border-brand-accent p-8 text-center">
        <h3 className="text-2xl font-dot text-white mb-2">ЗАЯВКА ПРИНЯТА</h3>
        <p className="text-gray-300 font-sans">Мы отправим вам КП в течение 24 часов.</p>
      </div>
    );
  }

  return (
    <div className="bg-black/50 border border-white/10 p-8 relative overflow-hidden">
       {/* Decorative tech corners */}
       <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-accent"></div>
       <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-accent"></div>
       <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-accent"></div>
       <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-accent"></div>

      <h3 className="text-2xl font-dot uppercase tracking-widest text-white mb-2">{title}</h3>
      <p className="text-gray-400 font-sans text-sm mb-6">Получите коммерческое предложение в течение 24 часов.</p>
      
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
        <div>
          <input type="text" placeholder="Имя" required className="w-full bg-brand-dark/50 border border-white/10 p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent transition-colors font-sans" />
        </div>
        <div>
          <input type="text" placeholder="Компания" required className="w-full bg-brand-dark/50 border border-white/10 p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent transition-colors font-sans" />
        </div>
        <div className="grid grid-cols-2 gap-4">
           <input type="tel" placeholder="Телефон" required className="w-full bg-brand-dark/50 border border-white/10 p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent transition-colors font-sans" />
           <input type="text" placeholder="Город" required className="w-full bg-brand-dark/50 border border-white/10 p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent transition-colors font-sans" />
        </div>
        <button type="submit" className="w-full bg-white hover:bg-brand-accent text-black hover:text-white transition-colors font-dot uppercase tracking-widest py-4 mt-4">
          Получить КП
        </button>
      </form>
    </div>
  );
}
