import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

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
			<ChevronDown
				size={18}
				className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white"
				aria-hidden="true"
			/>
		</div>
	);
}
