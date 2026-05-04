import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Map, Globe, ScanLine } from "lucide-react";
import LeadForm from "../components/forms/LeadForm";
import { CONTACT_DATA } from "../static-data";

export default function Contact() {
	return (
		<div className="relative pb-24 bg-transparent text-white min-h-screen font-sans">
			{/* Dynamic Background Glows for Dark Theme */}
			<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

			<section className="py-24 text-center max-w-4xl mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="inline-block bg-blue-500/10 text-brand-accent px-5 py-2 rounded-full font-sans text-[10px] font-extrabold uppercase mb-8 tracking-[0.2em] border border-blue-400/20 shadow-sm backdrop-blur-md"
				>
					Get in Touch
				</motion.div>
				<h1 className="text-6xl md:text-9xl font-sans font-extrabold uppercase tracking-tighter mb-8 leading-[0.85] text-white">
					Свяжитесь{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
						с нами
					</span>
				</h1>
				<p className="text-xl text-slate-300 font-sans tracking-tight max-w-xl mx-auto opacity-80">
					Официальный дистрибьютор Visbody в России — WellFitness.
				</p>
			</section>

			<section className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
				{/* Info Column */}
				<div className="space-y-12">
					<div>
						<h3 className="text-2xl font-dot uppercase text-white mb-6 tracking-widest">
							// Прямые контакты
						</h3>
						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="bg-brand-accent/10 p-3 border border-brand-accent/20">
									<Phone className="text-brand-accent" size={24} />
								</div>
								<div>
									<div className="text-gray-500 font-dot text-xs uppercase mb-1">Горячая линия</div>
									<a className="text-2xl font-sans text-white" href={CONTACT_DATA.PHONE.LINK}>
										{CONTACT_DATA.PHONE.TEXT}
									</a>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="bg-brand-accent/10 p-3 border border-brand-accent/20">
									<Mail className="text-brand-accent" size={24} />
								</div>
								<div>
									<div className="text-gray-500 font-dot text-xs uppercase mb-1">Email</div>
									<a className="text-2xl font-sans text-white" href={CONTACT_DATA.EMAIL.LINK}>
										{CONTACT_DATA.EMAIL.TEXT}
									</a>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-2xl font-dot uppercase text-white mb-6 tracking-widest">
							// Шоу-рум в Москве
						</h3>
						<div className="flex items-start gap-4">
							<div className="bg-brand-accent/10 p-3 border border-brand-accent/20">
								<MapPin className="text-brand-accent" size={24} />
							</div>
							<div>
								<p className="text-gray-400 font-sans leading-relaxed max-w-sm">
									<a href={CONTACT_DATA.ADDRESS.LINK} target="_blank">
										{CONTACT_DATA.ADDRESS.TEXT}
									</a>
									<br />
									<span className="text-brand-accent mt-2 inline-block">
										Запись на демо — обязательна.
									</span>
								</p>
							</div>
						</div>
					</div>

					<div className="bg-brand-dark/50 border border-white/5 p-8 relative overflow-hidden">
						<ScanLine className="absolute -bottom-6 -right-6 w-32 h-32 text-white/5" />
						<h4 className="text-white font-dot uppercase text-lg mb-4">WellFitness</h4>
						<p className="text-sm text-gray-500 font-sans leading-relaxed">
							Мы — крупнейший поставщик профессионального фитнес-оборудования на территории РФ. 15 лет
							опыта, тысячи оснащенных клубов и собственная сервисная сеть.
						</p>
					</div>
				</div>

				{/* Form Column */}
				<div className="glass-card">
					<LeadForm title="Записаться на демонстрацию" />
				</div>
			</section>

			{/* Dealer Map Mock */}
			<section className="max-w-6xl mx-auto px-4">
				<div className="bg-black/50 border border-white/10 h-96 relative overflow-hidden flex items-center justify-center group cursor-pointer">
					<div className="absolute inset-0 opacity-20 nothing-dot-grid group-hover:opacity-30 transition-opacity"></div>
					<div className="relative text-center z-10">
						<Map className="text-brand-accent mx-auto mb-6 opacity-50" size={64} />
						<h3 className="text-3xl font-dot uppercase text-white mb-2">Интерактивная карта дилеров</h3>
						<p className="text-gray-500 font-sans text-sm uppercase tracking-widest">Скоро появится</p>
					</div>
					{/* Visual pointers mock */}
					<div className="absolute top-1/4 left-1/3 w-3 h-3 bg-brand-accent rounded-full animate-ping"></div>
					<div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-brand-accent rounded-full opacity-50"></div>
				</div>
			</section>
		</div>
	);
}
