import RoiCalculator from "../../components/forms/RoiCalculator";
// import AdvantagesList from "./components/AdvantagesList";
// import TargetAudience from "./components/TargetAudience";
import HeroSection from "./components/HeroSection";
import NumbersSection from "./components/NumbersSection";
import Quote from "./components/Quote";

export default function Home() {
	return (
		<div className="relative bg-transparent text-white font-sans overflow-x-hidden selection:bg-brand-accent/20 max-md:-ml-6 max-md:-mr-6">
			{/* Dynamic Background Glows for Dark Theme */}
			<div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
			<div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none"></div>

			<HeroSection />

			<div className="mt-28 mb-28 max-w-7xl mx-auto px-4">
				{/* <TargetAudience /> */}

				<NumbersSection />

				{/* <AdvantagesList /> */}

				<section className="mb-24">
					<Quote />

					<div className="glass-card p-12 bg-white/5 border border-white/10">
						<RoiCalculator />
					</div>
				</section>
			</div>
		</div>
	);
}
