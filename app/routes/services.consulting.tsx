import type { MetaFunction } from "@vercel/remix";
import { servicesContent } from "utils/servicesContent";
import ServicesLayout from "~/templates/ServicesLayout";

export const meta: MetaFunction = () => {
	return [
		{ title: "HydroPixl Consulting Services" },
		{
			name: "description",
			content:
				"Guiding your outdoor vision by offering specialized consulting services to provide expert guidance and insights for your outdoor projects.",
		},
	];
};

export default function Consulting() {
	const content = servicesContent.consulting;
	return <ServicesLayout content={content} />;
}
