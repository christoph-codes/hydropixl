import { Heading } from "@radix-ui/themes";

export const consultingContent = {
	header: {
		title: "Consulting Services",
		description:
			"Guiding your outdoor vision by offering specialized consulting services to provide expert guidance and insights for your outdoor projects.",
		imgSrc: "/consulting.png",
		imgAlt: "Man consulting and holding landscape design plans",
	},
	leadingTitle: "How Our Consulting Services Work",
	leadingDescription:
		"HydroPixl's consulting services are your trusted guide to outdoor project success. With expertise in landscaping and irrigation, our team offers tailored insights, covering landscape design, irrigation optimization, sustainability, and project management. We start with a thorough assessment, assist in planning, and remain committed to your project's triumph. Count on HydroPixl's experience and innovation to bring your outdoor vision to life.",
	numberedPoints: true,
	numberedPointsContent: [
		{
			title: "Initial Assessment",
			description:
				"Our consulting process begins with a thorough assessment of your project. We take the time to understand your goals, challenges, and specific requirements. This initial step forms the foundation for our tailored consulting approach.",
		},
		{
			title: "Expert Recommendations",
			description:
				"Based on the assessment, our team provides expert recommendations and strategic insights to address your unique needs. Whether it's landscape design, irrigation system optimization, or sustainable landscaping practices, we offer actionable advice to move your project forward.",
		},
		{
			title: "Project Planning Support",
			description:
				"We assist in the planning phase, helping you outline the scope of work, budget considerations, and timeline estimates. Our expertise ensures that your project is set up for success from the very beginning.",
		},
		{
			title: "Ongoing Guidance and Support",
			description:
				"Throughout the duration of your project, we remain available for ongoing consultation. Our team is here to answer questions, provide additional insights, and offer guidance to help you navigate any challenges that may arise.",
		},
	],
	serviceGridPhotos: [
		{ src: "/irrigation.png", alt: "Irrigation" },
		{ src: "/irrigation.png", alt: "Irrigation" },
		{ src: "/irrigation.png", alt: "Irrigation" },
		{ src: "/irrigation.png", alt: "Irrigation" },
	],
	serviceContent: (
		<>
			<Heading className="mb-3">Areas of Expertise</Heading>
			<p className="mb-6">
				Our consulting services cover a wide range of areas within the
				landscaping and irrigation industry, including:
			</p>
			<ul className="mb-6">
				<li>Landscape Design and Planning</li>
				<li>Irrigation System Optimization</li>
				<li>Sustainable Landscaping Practices</li>
				<li>Project Management and Coordination</li>
			</ul>
			<Heading className="mb-3">Why Choose HydroPixl for Consulting</Heading>
			<p className="mb-6">
				With a proven track record of successful projects and a commitment to
				excellence, HydroPixl is your trusted partner in achieving outdoor
				project success. Our team combines practical experience with innovative
				solutions to ensure your vision is realized.
			</p>
		</>
	),
	footer: {
		title: "Get Started with HydroPixl Consulting",
		description:
			"Ready to take the next step in your outdoor project? Contact us today to learn more about our consulting services and how we can help bring your vision to life.",
	},
};
