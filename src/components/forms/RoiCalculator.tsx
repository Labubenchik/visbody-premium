import { useState } from "react";
import Select from "../ui/Select";

const businessTypeOptions = [
	{ value: "fitness", label: "Фитнес-клуб / Студия (S30)" },
	{ value: "clinic", label: "Медицинская клиника (R60)" },
];

export default function RoiCalculator() {
	const [clients, setClients] = useState(100);
	const [check, setCheck] = useState(3000);
	const [type, setType] = useState("fitness");

	const extraRevenue = clients * 0.3 * check; // Assume 30% conversion to PT
	const machineCost = type === "fitness" ? 1200000 : 1800000;
	const roiMonths = Math.ceil(machineCost / extraRevenue);

	return (
		<div className="glass-card p-5 md:p-8 border border-brand-accent/30 relative">
			<div className="absolute top-0 right-0 bg-brand-accent text-white font-dot text-xs px-4 py-2 rounded-tr-3xl rounded-bl-lg uppercase">
				Калькулятор
			</div>
			<h3 className="text-3xl font-dot uppercase tracking-wider text-white mb-6">
				Рассчитайте окупаемость Visbody для вашего бизнеса
			</h3>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div className="space-y-6">
					<div>
						<label className="block text-gray-400 font-sans text-sm uppercase tracking-wide mb-2">
							Тип бизнеса
						</label>
						<Select value={type} onChange={(e) => setType(e.target.value)} options={businessTypeOptions} />
					</div>

					<div>
						<label className="block text-gray-400 font-sans text-sm uppercase tracking-wide mb-2">
							Количество активных клиентов / мес.
						</label>
						<input
							type="range"
							min="50"
							max="1000"
							step="50"
							value={clients}
							onChange={(e) => setClients(parseInt(e.target.value))}
							className="w-full accent-brand-accent"
						/>
						<div className="text-right text-white font-dot text-xl mt-1">{clients} чел.</div>
					</div>

					<div>
						<label className="block text-gray-400 font-sans text-sm uppercase tracking-wide mb-2">
							Средний чек (абонемент или услуга)
						</label>
						<input
							type="range"
							min="1000"
							max="15000"
							step="500"
							value={check}
							onChange={(e) => setCheck(parseInt(e.target.value))}
							className="w-full accent-brand-accent"
						/>
						<div className="text-right text-white font-dot text-xl mt-1">{check} руб.</div>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center bg-black/40 border border-white/5 p-6 rounded-3xl text-center">
					<h4 className="text-gray-400 font-dot uppercase tracking-widest text-sm mb-4">
						Ожидаемая окупаемость:
					</h4>
					<div className="text-7xl font-dot text-brand-accent mb-2 mt-2">{roiMonths}</div>
					<div className="text-xl text-white font-sans font-light uppercase tracking-wide mb-3">Месяцев</div>
					<p className="text-xs text-gray-500 mt-auto max-w-[260px] leading-relaxed">
						*при условии подключения услуги сканирования к каждому активному клиенту
					</p>
				</div>
			</div>
		</div>
	);
}
