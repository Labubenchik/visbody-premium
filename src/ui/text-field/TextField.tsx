import type { InputHTMLAttributes } from "react";
import styles from "./TextField.module.css";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
	className?: string;
};

export default function TextField({ className = "", ...props }: TextFieldProps) {
	const classes = [styles.field, className].filter(Boolean).join(" ");

	return <input className={classes} {...props} />;
}
