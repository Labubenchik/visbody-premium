import "./ScanningHUD.css";
import { useState, useEffect } from "react";

export default function ScanningHUD() {
	const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });

	useEffect(() => {
		const interval = setInterval(() => {
			setCoords({
				x: Math.random() * 100,
				y: Math.random() * 100,
				z: Math.random() * 100,
			});
		}, 150);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
			{/* 1. Scanning Beam */}
			<div
				className="scanning-hud__beam absolute w-full h-[2px] bg-brand-accent z-20"
				style={{
					boxShadow: "0 0 15px 2px #0ea5e9, 0 0 30px 5px rgba(14, 165, 233, 0.3)",
				}}
			/>

			{/* 2. HUD Corners */}
			<div className="absolute top-26 right-60 w-32 font-mono text-[10px] text-brand-accent opacity-60">
				<div className="flex justify-between border-b border-brand-accent/20 pb-1 mb-2">
					<span>STATUS</span>
					<span className="animate-pulse">SCANNING...</span>
				</div>
				<div className="space-y-1">
					<div className="flex justify-between">
						<span>X_POS</span>
						<span>{coords.x.toFixed(3)}</span>
					</div>
					<div className="flex justify-between">
						<span>Y_POS</span>
						<span>{coords.y.toFixed(3)}</span>
					</div>
					<div className="flex justify-between">
						<span>Z_POS</span>
						<span>{coords.z.toFixed(3)}</span>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 right-8 text-right font-mono text-[10px] text-brand-accent opacity-40">
				<div>VISBODY_CORE_V4.2</div>
				<div>ANATOMY_MAPPING_ACTIVE</div>
			</div>

			{/* 3. HUD Lines & Points (Visual Mockup) */}
			<svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
				<defs>
					<radialGradient id="point-glow">
						<stop offset="0%" stopColor="#0ea5e9" />
						<stop offset="100%" stopColor="transparent" />
					</radialGradient>
				</defs>

				{/* Animated points */}
				<circle
					cx="50%"
					cy="30%"
					r="4"
					fill="url(#point-glow)"
					className="pointer-events-auto cursor-crosshair"
				>
					<animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
					<animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
				</circle>
				<circle
					cx="45%"
					cy="60%"
					r="3"
					fill="url(#point-glow)"
					className="pointer-events-auto cursor-crosshair"
				>
					<animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite" />
					<animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
				</circle>

				{/* Dash lines */}
				<line
					x1="50%"
					y1="30%"
					x2="70%"
					y2="25%"
					stroke="#0ea5e9"
					strokeWidth="0.5"
					strokeDasharray="4 4"
					pathLength="1"
					className="scanning-hud__line"
				/>
			</svg>
		</div>
	);
}
