import type { SelectHTMLAttributes } from "react";

export type SelectOption = {
	value: string;
	label: string;
};

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
	options: SelectOption[];
};

export default function Select({ options, className = "", ...props }: SelectProps) {
	return (
		<div className="relative">
			<select
				className={`w-full appearance-none bg-brand-dark border border-white/10 p-3 pr-11 rounded-xl text-white focus:outline-none focus:border-brand-accent ${className}`}
				{...props}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-chevron-down-icon lucide-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white"
			>
				<path d="m6 9 6 6 6-6" />
			</svg>
		</div>
	);
}
