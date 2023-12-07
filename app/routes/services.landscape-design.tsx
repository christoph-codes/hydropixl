import type { MetaFunction } from "@remix-run/node";
import { servicesContent } from "utils/servicesContent";
import ServicesLayout from "~/templates/ServicesLayout";

export const meta: MetaFunction = () => {
	return [
		{ title: "HydroPixl Landscape Design Services" },
		{
			name: "description",
			content:
				"From conceptualization to execution, we turn visions into vibrant, living realities. Explore our design process and let's bring your outdoor dream to life.",
		},
	];
};

export default function LandscapeDesign() {
	const content = servicesContent.landscapeDesign;
	return <ServicesLayout content={content} />;
}
