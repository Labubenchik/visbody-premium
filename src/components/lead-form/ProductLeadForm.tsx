import { useState, type FormEvent } from "react";
import Button from "@ui/button/Button";
import TextField from "@ui/text-field/TextField";
import styles from "./ProductLeadForm.module.css";

type ProductLeadFormProps = {
	formId?: string;
	submitLabel?: string;
	note?: string;
	successMessage?: string;
};

export default function ProductLeadForm({
	formId = "m60LeadForm",
	submitLabel = "Отправить заявку",
	note = "Нажимая на кнопку, вы соглашаетесь с политикой обработки персональных данных",
	successMessage = "Спасибо за заявку! Наш менеджер свяжется с вами в ближайшее время для подготовки коммерческого предложения.",
}: ProductLeadFormProps) {
	const [status, setStatus] = useState("");

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		event.currentTarget.reset();
		setStatus(successMessage);
	}

	return (
		<form id={formId} className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.fieldGroup}>
				<TextField type="text" name="name" placeholder="Ваше имя" required autoComplete="name" />
			</div>
			<div className={styles.fieldGroup}>
				<TextField type="tel" name="phone" placeholder="Номер телефона" required autoComplete="tel" />
			</div>
			<div className={styles.fieldGroup}>
				<TextField type="email" name="email" placeholder="E-mail" required autoComplete="email" />
			</div>
			<div className={styles.fieldGroup}>
				<TextField type="text" name="company" placeholder="Название компании / клуба" autoComplete="organization" />
			</div>

			<Button variant="primary" type="submit" className={styles.submit}>
				{submitLabel}
			</Button>

			{status && (
				<p className={styles.status} role="status">
					{status}
				</p>
			)}
			<p className={styles.note}>{note}</p>
		</form>
	);
}
