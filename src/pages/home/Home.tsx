import { Activity, Building2, Dumbbell, ShieldCheck } from "lucide-react";
import RoiCalculator from "../../components/forms/RoiCalculator";
import HeroSection from "./components/HeroSection";

export default function Home() {
	return (
		<div className="relative bg-transparent text-white font-sans overflow-x-hidden selection:bg-brand-accent/20 max-md:-ml-6 max-md:-mr-6">
			{/* Dynamic Background Glows for Dark Theme */}
			<div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none"></div>

			{/* 1. hero section */}
			<HeroSection />

			<div className="mt-48 mb-32 max-w-7xl mx-auto px-4">
				{/* 3. TARGET AUDIENCE */}
				<section className="mb-32">
					<h3 className="text-center font-sans font-extrabold text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-16">
						// TARGET SEGMENTS
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{ icon: Dumbbell, title: "Фитнес-клубы", text: "Апселл и удержание" },
							{ icon: Activity, title: "Мед. Центры", text: "Объективный анализ" },
							{ icon: Building2, title: "Студии реабилитации", text: "Оценка прогресса" },
							{ icon: ShieldCheck, title: "Wellness", text: "Премиум сервис" },
						].map((item, idx) => (
							<div
								key={idx}
								className="glass-card p-10 flex flex-col items-center hover:-translate-y-2 transition-all border border-white/5 shadow-xl bg-white/5"
							>
								<div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center text-brand-accent mb-6">
									<item.icon size={32} />
								</div>
								<h4 className="font-sans font-extrabold uppercase text-lg text-white mb-3 leading-none">
									{item.title}
								</h4>
								<p className="font-sans text-sm text-slate-400 leading-relaxed">{item.text}</p>
							</div>
						))}
					</div>
				</section>

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
							Внедрение 3D-аналитики напрямую конвертирует базовых клиентов в покупателей персональных
							тренировок.
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

				<section className="mb-32 text-center">
					<h3 className="text-center font-sans font-extrabold text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-16">
						// THE PROCESS
					</h3>
					<div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
						<div className="hidden md:block absolute top-[60%] left-[15%] right-[15%] h-[2px] bg-white/5 -z-10"></div>
						{[
							{ step: "01", title: "Вход в систему", desc: "Автоматическое определение веса и баланса" },
							{
								step: "02",
								title: "3D Сканирование",
								desc: "Безопасное оптическое создание цифрового двойника",
							},
							{ step: "03", title: "Анализ данных", desc: "ИИ анализирует осанку и состав тела" },
						].map((s, idx) => (
							<div
								key={idx}
								className="border border-white/5 p-10 w-full md:w-1/3 relative z-10 glass-card shadow-xl bg-white/5"
							>
								<span className="text-6xl font-sans font-extrabold text-brand-accent/5 absolute top-6 right-6">
									{s.step}
								</span>
								<div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-brand-accent mb-8 font-sans font-extrabold text-xl">
									{idx + 1}
								</div>
								<h4 className="text-xl font-sans font-extrabold uppercase text-white mb-4">
									{s.title}
								</h4>
								<p className="font-sans text-slate-400 leading-relaxed text-sm opacity-80">{s.desc}</p>
							</div>
						))}
					</div>
				</section>

				<section className="mb-24">
					<div className="bg-brand-accent/5 border-l-4 border-brand-accent rounded-r-[32px] p-12 mb-16 max-w-4xl mx-auto shadow-sm backdrop-blur-md">
						<p className="font-sans text-xl text-slate-300 italic mb-6 leading-relaxed">
							"После установки Visbody M60, продажи пакетов персональных тренировок в нашем клубе выросли
							на 30% всего за два месяца. Это лучший инструмент для тренера."
						</p>
						<span className="font-sans font-extrabold uppercase text-brand-accent tracking-widest text-xs">
							— Сеть фитнес-клубов X
						</span>
					</div>

					<div className="glass-card p-12 bg-white/5 border border-white/10">
						<RoiCalculator />
					</div>
				</section>
			</div>
		</div>
	);
}
