import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScanningHUD from "../../../components/hud/ScanningHUD";

export default function HeroSection() {
	type CardItem = {
		title: string;
		subtitle: string;
		linkTo: string;
		imageUrl?: string;
	};
	const cardList: CardItem[] = [
		{
			title: "Visbody S30",
			subtitle: "Premium Mirror System",
			linkTo: "/product/visbody-m30",
			imageUrl: "/images/S-30.webp",
		},
		{
			title: "Visbody М30",
			subtitle: "Premium Mirror System",
			linkTo: "/product/visbody-m30",
			imageUrl: "/images/M-30.webp",
		},
		{
			title: "Creator A600",
			subtitle: "Premium Mirror System",
			linkTo: "/product/visbody-m30",
			imageUrl: "/images/Creator_A600.webp",
		},
	];

	return (
		<section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-12 mb-12 overflow-hidden">
			{/* Background AI Video Avatar (Light Mode Blending) */}
			<div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
				{/* Soft Floating Rings */}
				<div className="absolute w-[800px] h-[800px] rounded-full border border-blue-100/50 animate-[spin_40s_linear_infinite]"></div>
				<div className="absolute w-[600px] h-[600px] rounded-full border border-cyan-100/50 animate-[spin_25s_linear_infinite_reverse]"></div>

				<div className="relative w-full h-full mx-auto flex items-center justify-center">
					<video
						src="/avatar_scan.mp4"
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover object-[50%_20%] mix-blend-screen filter brightness-125 contrast-125 opacity-60"
					/>
					<ScanningHUD />
					<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#0a1930]/40 pointer-events-none" />
				</div>
			</div>

			<div className="relative z-10 w-full mb-auto px-12">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="text-4xl max-md:text-3xl font-sans font-extrabold uppercase tracking-[0.025em] leading-[1.2] text-white mb-2 w-full max-w-[30rem]"
				>
					Мировой лидер <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-accent to-blue-400">
						AI-решений&#32;
					</span>
					для комплексной диагностики тела
				</motion.h1>
			</div>

			<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-24 px-4 pb-20">
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="flex flex-col items-start md:col-start-2 md:-col-end-1 md:row-start-1 md:row-end-4 glass-card glass-card-hover md:p-12 p-6 bg-white/5 border border-white/10 group"
				>
					<div className="flex justify-between items-start mb-7">
						<div>
							<h2 className="text-4xl max-md:text-3xl font-sans font-extrabold uppercase tracking-tight text-white mb-2">
								Visbody M60
							</h2>
							<p className="text-slate-400 font-sans text-xs font-bold uppercase tracking-[0.3em]">
								Premium Mirror System
							</p>
						</div>
					</div>
					<img
						className="mx-auto max-md:max-w-[360px] w-full"
						src="/images/М-60.webp"
						width="460"
						height="460"
						alt="Visbody M60"
					/>
					<p className="text-slate-300 font-sans text-sm mt-6 mb-6">
						Visbody M60 — это инновационная система мониторинга состава тела, которая позволяет в реальном
						времени отслеживать состав вашего тела и предоставляет полезную информацию о его состоянии.
					</p>
					<Link
						to="/product/visbody-m60"
						className="mt-auto inline-flex items-center gap-3 bg-white text-slate-900 font-sans font-extrabold uppercase tracking-widest text-xs py-4 px-8 rounded-2xl hover:bg-brand-accent hover:text-white transition-all shadow-xl"
					>
						Подробнее <ArrowRight size={18} />
					</Link>
				</motion.div>

				{cardList.map(({ title, subtitle, linkTo, imageUrl }) => (
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="relative overflow-hidden glass-card glass-card-hover sm:p-12 p-6 bg-white/5 border border-white/10 group"
					>
						<div className="relative z-30 flex justify-between items-start mb-10">
							<div>
								<h2 className="text-4xl max-md:text-3xl font-sans font-extrabold uppercase tracking-tight text-white mb-2">
									{title}
								</h2>
								<p className="text-slate-400 font-sans text-xs font-bold uppercase sm:tracking-[0.3em]">
									{subtitle}
								</p>
							</div>
						</div>
						<img
							className="absolute z-10 top-0 -right-10 max-lg:-right-16"
							src={imageUrl}
							width="260"
							height="260"
							alt={title}
						/>

						<Link
							to={linkTo}
							className="relative z-30 inline-flex items-center gap-3 bg-white text-slate-900 font-sans font-extrabold uppercase tracking-widest text-xs py-4 px-8 rounded-2xl hover:bg-brand-accent hover:text-white transition-all shadow-xl"
						>
							Подробнее <ArrowRight size={18} />
						</Link>
					</motion.div>
				))}
			</div>
		</section>
	);
}
