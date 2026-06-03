export const CONTACT_DATA = {
	phone: {
		label: "+7 499 677 56 32",
		link: "tel:+74996775632",
	},
	email: {
		label: "Info@wellfitness.ru",
		link: "mailto:Info@wellfitness.ru",
	},
	address: {
		label: "Москва, ул. Маршала Прошлякова, д. 30, офис 407",
		link: "#",
	},
} as const;

export const ROUTES = {
	catalog: {
		label: "Каталог",
		href: "/catalog",
		сhildren: {
			m60: {
				label: "Visbody M60",
				href: "/catalog/visbody-m60",
			},
			m30: {
				label: "Visbody M30",
				href: "/catalog/visbody-m30",
			},
			s30: {
				label: "Visbody S30",
				href: "/catalog/visbody-s30",
			},
			a600: {
				label: "Creator 600",
				href: "/catalog/creator-a600",
			},
		},
	},
	technology: {
		label: "Технология",
		href: "/technology",
	},
	cases: {
		label: "Кейсы",
		href: "/cases",
	},
	blog: {
		label: "Блог",
		href: "/blog",
	},
	contact: {
		label: "Контакты",
		href: "/contact",
	},
	solutions: {
		label: "Решения",
		href: "/solutions",
		children: {
			fitness: {
				label: "Фитнес-клубам",
				href: "/solutions/fitness",
			},
			medical: {
				label: "Клиникам",
				href: "/solutions/medical",
			},
		},
	},
} as const;
