import { Heading } from "@radix-ui/themes";

export const landscapeDesignContent = {
	header: {
		title: "Landscape Design Services",
		description:
			"From conceptualization to execution, we turn visions into vibrant, living realities. Explore our design process and let's bring your outdoor dream to life.",
		imgSrc: "/landscape.png",
		imgAlt: "3d rendering of a backyard landscape design",
	},
	leadingTitle: "Our Design Process",
	leadingDescription:
		"Unleash the full potential of your outdoor space with HydroPixl's Landscape Design Services. Led by industry veteran Jim, our seasoned team merges artistry and technology to create breathtaking landscapes that leave a lasting impression.",
	numberedPoints: true,
	numberedPointsContent: [
		{
			title: "Vision and Consultation",
			description:
				"Every project starts with a vision. We sit down with you to understand your ideas, preferences, and the unique characteristics of your outdoor space. This initial consultation lays the foundation for the design process.",
		},
		{
			title: "Conceptualization and Planning",
			description:
				"Our team of designers and horticulturists work collaboratively to create a conceptual design that brings your vision to life. We consider factors like plant selection, hardscaping elements, and irrigation systems to ensure a harmonious and functional outdoor space.",
		},
		{
			title: "Detailed Design and Rendering",
			description:
				"Once the conceptual design is refined, we provide you with detailed blueprints and 3D renderings. This allows you to visualize the final result and make any necessary adjustments before the implementation phase.",
		},
		{
			title: "Implementation and Construction",
			description:
				"With the design finalized, our skilled team gets to work bringing your vision to life. We oversee every aspect of the construction process, ensuring that every element is executed to perfection.",
		},
	],
	secondaryTitle: "Tailored Solutions for Every Outdoor Space",
	secondaryDescription:
		"Whether you have a sprawling garden, a compact courtyard, or a commercial property, we customize our irrigation services to suit your unique needs. Our solutions are designed for seamless integration, providing your outdoor space with the precise hydration it requires.",
	serviceGridPhotos: [
		{ src: "/irrigation.png", alt: "Irrigation" },
		{ src: "/irrigation.png", alt: "Irrigation" },
		{ src: "/irrigation.png", alt: "Irrigation" },
		{ src: "/irrigation.png", alt: "Irrigation" },
	],
	serviceContent: (
		<>
			<Heading className="mb-3">Our Expertise</Heading>
			<p className="mb-6">
				With over a decade of experience, HydroPixl has earned a reputation for
				creating landscapes that not only meet but exceed client expectations.
				Our portfolio showcases a diverse range of projects, from intimate
				garden designs to expansive commercial landscapes.
			</p>
			<Heading className="mb-3">Sustainable Solutions</Heading>
			<p className="mb-6">
				At HydroPixl, we're committed to sustainable landscaping practices. We
				incorporate eco-friendly elements like native plant selections,
				efficient irrigation systems, and permeable paving options to minimize
				environmental impact.
			</p>
		</>
	),
	footer: {
		title: "Let’s Create Together",
		description:
			"Whether you have a specific vision in mind or need guidance in conceptualizing your dream outdoor space, HydroPixl is here to turn your ideas into vibrant, living realities. Explore our portfolio to see our past projects, and contact us to schedule a consultation.",
	},
};
