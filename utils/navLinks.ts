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
				href: "/servcies/irrigation",
			},
			{
				label: "Landscape Design Services",
				href: "/servcies/landscape-design",
			},
			{
				label: "Consulting Services",
				href: "/servcies/consulting",
			},
		],
	},
	{
		label: "Request Consultation",
		href: "/ready",
		cta: true,
	},
];
