import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_DATA } from "../static-data";

export default function Footer() {
	return (
		<footer className="relative bg-[#020617] border-t border-white/5 pt-24 pb-12 overflow-hidden">
			{/* Background Glow */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
					{/* Brand Col */}
					{/* <div className="space-y-6">
						<Link
							to="/"
							className="flex overflow-hidden items-center gap-3 text-2xl font-dot tracking-tighter uppercase group"
						>
							<img className="w-[180px] ml-[-8px]" src="/logo/logo.svg" width="304" height="70" />
						</Link>
						<p className="text-gray-500 font-sans text-sm leading-relaxed max-w-xs">
							Мировой лидер в области 3D-сканирования состава тела и интеллектуальной биометрии.
							Официальный дистрибьютор в РФ и СНГ.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="p-3 bg-white/5 border border-white/10 hover:border-brand-accent transition-all rounded-full text-gray-400 hover:text-white"
							>
								<Facebook size={18} />
							</a>
							<a
								href="#"
								className="p-3 bg-white/5 border border-white/10 hover:border-brand-accent transition-all rounded-full text-gray-400 hover:text-white"
							>
								<Instagram size={18} />
							</a>
							<a
								href="#"
								className="p-3 bg-white/5 border border-white/10 hover:border-brand-accent transition-all rounded-full text-gray-400 hover:text-white"
							>
								<Linkedin size={18} />
							</a>
						</div>
					</div> */}

					{/* Navigation */}
					<div>
						<h4 className="text-white font-dot uppercase text-xs tracking-[0.3em] mb-8">// Навигация</h4>
						<ul className="space-y-4 font-sans text-sm text-gray-500">
							<li>
								<Link to="/catalog" className="hover:text-brand-accent transition-colors">
									Оборудование
								</Link>
							</li>
							<li>
								<Link to="/technology" className="hover:text-brand-accent transition-colors">
									Технологии
								</Link>
							</li>
							<li>
								<Link to="/cases" className="hover:text-brand-accent transition-colors">
									Кейсы
								</Link>
							</li>
							<li>
								<Link to="/solutions/fitness" className="hover:text-brand-accent transition-colors">
									Для фитнеса
								</Link>
							</li>
							<li>
								<Link to="/solutions/medical" className="hover:text-brand-accent transition-colors">
									Для медицины
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h4 className="text-white font-dot uppercase text-xs tracking-[0.3em] mb-8">// Поддержка</h4>
						<ul className="space-y-4 font-sans text-sm text-gray-500">
							<li>
								<Link to="/blog" className="hover:text-brand-accent transition-colors">
									База знаний
								</Link>
							</li>
							<li>
								<Link to="/contact" className="hover:text-brand-accent transition-colors">
									Связаться с нами
								</Link>
							</li>
							<li>
								<a href="#" className="hover:text-brand-accent transition-colors">
									Сервисный центр
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-brand-accent transition-colors">
									Документация
								</a>
							</li>
						</ul>
					</div>

					{/* Contacts Area */}
					<div className="space-y-6">
						<h4 className="text-white font-dot uppercase text-xs tracking-[0.3em] mb-8">// Контакты</h4>
						<div className="space-y-4 text-sm text-gray-500 font-sans">
							<div className="flex items-center gap-3">
								<Phone size={16} className="text-brand-accent" />
								<a href={CONTACT_DATA.PHONE.LINK}>{CONTACT_DATA.PHONE.TEXT}</a>
							</div>
							<div className="flex items-center gap-3">
								<Mail size={16} className="text-brand-accent" />
								<a href={CONTACT_DATA.EMAIL.LINK}>{CONTACT_DATA.EMAIL.TEXT}</a>
							</div>
							<div className="flex items-start gap-3">
								<MapPin size={16} className="text-brand-accent mt-1" />
								<a href={CONTACT_DATA.ADDRESS.LINK} target="_blank">
									{CONTACT_DATA.ADDRESS.TEXT}
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-gray-600 font-sans text-xs uppercase tracking-widest">
						© 2026 Visbody Russia. All systems operational.
					</p>
					<div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest">
						<a href="#" className="hover:text-white transition-colors">
							Политика конфиденциальности
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Публичная оферта
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
