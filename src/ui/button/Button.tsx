import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "primaryWhite";

type SharedProps = {
	children: ReactNode;
	variant?: ButtonVariant;
	withArrow?: boolean;
	fullWidthOnMobile?: boolean;
	className?: string;
};

type LinkButtonProps = SharedProps &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
		href: string;
	};

type NativeButtonProps = SharedProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
		href?: undefined;
	};

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClass: Record<ButtonVariant, string> = {
	primary: styles.primary,
	secondary: styles.secondary,
	primaryWhite: styles.primaryWhite,
};

function ArrowIcon() {
	return (
		<svg
			aria-hidden="true"
			className={styles.arrow}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	);
}

export default function Button({
	children,
	variant = "primary",
	withArrow = false,
	fullWidthOnMobile = false,
	className = "",
	...props
}: ButtonProps) {
	const classes = [styles.button, variantClass[variant], fullWidthOnMobile ? styles.fullWidthOnMobile : "", className]
		.filter(Boolean)
		.join(" ");
	const content = (
		<>
			<span>{children}</span>
			{withArrow && <ArrowIcon />}
		</>
	);

	if ("href" in props && props.href) {
		return (
			<a className={classes} {...props}>
				{content}
			</a>
		);
	}

	return (
		<button className={classes} type="button" {...props}>
			{content}
		</button>
	);
}
