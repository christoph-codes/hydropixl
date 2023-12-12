import type { MetaFunction } from "@vercel/remix";
import { servicesContent } from "utils/servicesContent";
import ServicesLayout from "~/templates/ServicesLayout";

export const meta: MetaFunction = () => {
	return [
		{ title: "HydroPixl Irrigation Services" },
		{
			name: "description",
			content:
				"Nurture your outdoor oasis with HydroPixl's specialized Irrigation Services. From precision maintenance to cutting-edge repairs, trust us to keep your landscape thriving.",
		},
	];
};

export default function Irrigation() {
	const content = servicesContent.irrigation;
	return <ServicesLayout content={content} />;
}
