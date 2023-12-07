export type TLink = {
	label: string;
	href?: string;
	cta?: boolean;
	children?: TLink[];
};

export const navLinks: TLink[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Contact",
		href: "/contact",
	},

	{
		label: "Services",
		href: "#",
		children: [
			{
				label: "Irrigation Services",
				href: "/services/irrigation",
			},
			{
				label: "Landscape Design Services",
				href: "/services/landscape-design",
			},
			{
				label: "Consulting Services",
				href: "/services/consulting",
			},
		],
	},
	{
		label: "Request Consultation",
		href: "/ready",
		cta: true,
	},
];
