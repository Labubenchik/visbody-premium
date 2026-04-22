import { Link } from "react-router-dom";
import { ShoppingCart, ScanLine } from "lucide-react";
import { playSoftClick } from "../utils/sounds";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[9999] backdrop-blur-xl border-b border-white/5 bg-[#020617]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" onMouseEnter={() => playSoftClick(220)} className="flex items-center gap-3 text-2xl font-sans font-extrabold uppercase group tracking-tighter">
             <div className="bg-brand-accent p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20"><ScanLine size={24} className="text-white" /></div>
             <span className="text-white">Visbody</span><span className="text-brand-accent">.</span>
          </Link>
          
          <div className="hidden lg:flex gap-8 items-center uppercase font-sans text-[10px] tracking-[0.2em] font-extrabold">
             <div className="group relative">
                <span onMouseEnter={() => playSoftClick(220)} className="text-slate-300 hover:text-brand-accent transition-colors cursor-pointer py-8 inline-block">Решения</span>
                <div className="absolute top-[90%] left-0 w-64 bg-[#0a1930] border border-white/10 p-3 hidden group-hover:block backdrop-blur-3xl shadow-2xl rounded-2xl">
                   <Link to="/solutions/fitness" onMouseEnter={() => playSoftClick(220)} className="block px-6 py-4 text-slate-300 hover:bg-white/5 hover:text-brand-accent transition-all mb-1 rounded-xl">Фитнес-клубам</Link>
                   <Link to="/solutions/medical" onMouseEnter={() => playSoftClick(220)} className="block px-6 py-4 text-slate-300 hover:bg-white/5 hover:text-brand-accent transition-all rounded-xl">Клиникам</Link>
                </div>
             </div>
             <Link to="/catalog" onMouseEnter={() => playSoftClick(220)} className="text-slate-300 hover:text-brand-accent transition-colors">Оборудование</Link>
             <Link to="/technology" onMouseEnter={() => playSoftClick(220)} className="text-slate-300 hover:text-brand-accent transition-colors">Технология</Link>
             <Link to="/cases" onMouseEnter={() => playSoftClick(220)} className="text-slate-300 hover:text-brand-accent transition-colors">Кейсы</Link>
             <Link to="/blog" onMouseEnter={() => playSoftClick(220)} className="text-slate-300 hover:text-brand-accent transition-colors">Блог</Link>
             <Link to="/contact" onMouseEnter={() => playSoftClick(220)} className="bg-brand-accent text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all ml-4 shadow-lg shadow-blue-500/25">Контакты</Link>
          </div>
          
          <div className="flex gap-4 items-center">
             <Link to="/cart" className="relative text-slate-400 hover:text-brand-accent transition-colors mt-1">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-brand-accent text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full text-white shadow-md">0</span>
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
