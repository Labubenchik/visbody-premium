import { Activity, Building2, Dumbbell, ShieldCheck } from "lucide-react";

export default function TargetAudience() {
	const targets = [
		{ icon: Dumbbell, title: "Фитнес-клубы", text: "Апселл и удержание" },
		{ icon: Activity, title: "Мед. Центры", text: "Объективный анализ" },
		{ icon: Building2, title: "Студии реабилитации", text: "Оценка прогресса" },
		{ icon: ShieldCheck, title: "Wellness", text: "Премиум сервис" },
	];

	return (
		<section className="mb-32">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				{targets.map((item) => (
					<div
						key={item.title}
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
	);
}
