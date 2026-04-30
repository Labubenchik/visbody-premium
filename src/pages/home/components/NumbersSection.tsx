export default function NumbersSection() {
	return (
		<section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-900/40 border border-white/5 rounded-[48px] p-16 relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full nothing-dot-grid opacity-30"></div>
			<div className="relative z-10">
				<div className="text-8xl md:text-9xl font-sans font-extrabold text-brand-accent mb-2 tracking-tighter shadow-sm">
					+356%
				</div>
				<div className="text-2xl font-sans font-extrabold uppercase tracking-tight text-white/90">
					Рост выручки
				</div>
				<p className="font-sans text-slate-400 mt-6 leading-relaxed text-lg opacity-80">
					Внедрение 3D-аналитики напрямую конвертирует базовых клиентов в покупателей персональных тренировок.
				</p>
			</div>
			<div className="relative z-10">
				<div className="text-8xl md:text-9xl font-sans font-extrabold text-white/20 mb-2 tracking-tighter">
					+45%
				</div>
				<div className="text-2xl font-sans font-extrabold uppercase tracking-tight text-white/90">
					Удержание (LTV)
				</div>
				<p className="font-sans text-slate-400 mt-6 leading-relaxed text-lg opacity-80">
					Регулярный миллиметровый трекинг мотивирует не бросать занятия — результат виден сразу.
				</p>
			</div>
		</section>
	);
}
