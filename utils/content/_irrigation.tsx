import { Heading } from "@radix-ui/themes";
import type { TServiceContentItems } from "utils/servicesContent";

export const irrigationContent: TServiceContentItems = {
	header: {
		title: "Irrigation Services",
		description:
			"Nurture your outdoor oasis with HydroPixl's specialized Irrigation Services. From precision maintenance to cutting-edge repairs, trust us to keep your landscape thriving.",
		imgSrc: "/irrigation.png",
		imgAlt: "Irrigation Sprinklers spraying on grass",
	},
	leadingTitle: "Our Approach to Irrigation Excellence",
	leadingDescription:
		"At HydroPixl, we understand the vital role irrigation plays in maintaining lush, vibrant outdoor spaces. Our dedicated team brings over a decade of expertise to ensure your irrigation systems are not only functional but optimized for efficiency and sustainability.",
	featuredPoints: true,
	featuredPointsContent: [
		{
			icon: "/icons/ruler_icon.svg",
			title: "Precision Maintenance",
			description:
				"Our meticulous approach to irrigation maintenance ensures every component of your system operates at peak performance. From inspecting valves to evaluating water pressure, we leave no stone unturned.",
		},
		{
			icon: "/icons/hammer_icon.svg",
			title: "Cutting-Edge Repairs",
			description:
				"When issues arise, our team is equipped with the latest techniques and tools to swiftly and effectively address them. We diagnose problems accurately and implement durable solutions that stand the test of time.",
		},
		{
			icon: "/icons/leaf_icon.svg",
			title: "Sustainable Solutions",
			description:
				"We're committed to sustainable irrigation practices. Our experts employ modern techniques and technology to minimize water waste while maximizing the health of your landscape.",
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
			<Heading className="mb-3">Expertise You Can Trust</Heading>
			<p className="mb-6">
				Backed by years of experience and a passion for environmental
				stewardship, our team at HydroPixl is dedicated to delivering irrigation
				services that go above and beyond industry standards.
			</p>
			<Heading className="mb-3">Irrigation Services Include</Heading>
			<ul className="mb-6">
				<li>
					Routine Inspections: Proactive maintenance to catch issues before they
					escalate.
				</li>
				<li>
					Sprinkler System Optimization: Ensuring even coverage and minimizing
					water usage.
				</li>
				<li>
					Valve and Controller Checks: Guaranteeing proper functionality and
					efficiency.
				</li>
				<li>
					Repairs and Upgrades: Swift, durable solutions for any irrigation
					system issue.
				</li>
				<li>
					Smart Irrigation Solutions: Harnessing technology for optimal water
					management.
				</li>
			</ul>
		</>
	),
	footer: {
		title: "Partner With Us",
		description:
			"Elevate your outdoor space with irrigation services that prioritize efficiency, sustainability, and long-lasting performance. Contact us today to schedule a consultation.",
	},
};
