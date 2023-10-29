import { Heading } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import PageLayout from "~/PageLayout/PageLayout";

export const meta: MetaFunction = () => {
	return [
		{ title: "HydroPixl" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<PageLayout
			style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}
		>
			<Heading>Welcome to HydroPixl</Heading>
			<Heading>Welcome to HydroPixl</Heading>
			<Heading>Welcome to HydroPixl</Heading>
			<Heading>Welcome to HydroPixl</Heading>
			<Heading>Welcome to HydroPixl</Heading>
		</PageLayout>
	);
}
