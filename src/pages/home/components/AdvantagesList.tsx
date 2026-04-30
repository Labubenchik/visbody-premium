export default function AdvantagesList() {
	const advantages = [
		{ step: "01", title: "Вход в систему", desc: "Автоматическое определение веса и баланса" },
		{
			step: "02",
			title: "3D Сканирование",
			desc: "Безопасное оптическое создание цифрового двойника",
		},
		{ step: "03", title: "Анализ данных", desc: "ИИ анализирует осанку и состав тела" },
	];

	return (
		<section className="mb-32 text-center">
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
				<div className="hidden md:block absolute top-[60%] left-[15%] right-[15%] h-[2px] bg-white/5 -z-10"></div>
				{advantages.map(({ step, title, desc }, idx) => (
					<div
						key={step}
						className="border border-white/5 p-10 w-full md:w-1/3 relative z-10 glass-card shadow-xl bg-white/5"
					>
						<span className="text-6xl font-sans font-extrabold text-brand-accent/5 absolute top-6 right-6">
							{step}
						</span>
						<div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-brand-accent mb-8 font-sans font-extrabold text-xl">
							{idx + 1}
						</div>
						<h4 className="text-xl font-sans font-extrabold uppercase text-white mb-4">{title}</h4>
						<p className="font-sans text-slate-400 leading-relaxed text-sm opacity-80">{desc}</p>
					</div>
				))}
			</div>
		</section>
	);
}
