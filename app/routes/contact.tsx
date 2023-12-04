import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import PageLayout from "~/templates/PageLayout/PageLayout";
import Button from "~/components/Button";
import Section from "~/components/Section";
import Card from "~/components/Card";
import PageHeader from "~/components/PageHeader";

export const meta: MetaFunction = () => {
	return [
		{ title: "Contact HydroPixl" },
		{
			name: "description",
			content:
				"We're thrilled that you're considering HydroPixl for your landscaping and irrigation needs. Whether you're a homeowner with a vision or a professional seeking expert advice, we're here to assist you.",
		},
	];
};

export default function About() {
	return (
		<PageLayout style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}>
			<PageHeader
				title="Contact"
				description="We're thrilled that you're considering HydroPixl for your landscaping and irrigation needs. Whether you're a homeowner with a vision or a professional seeking expert advice, we're here to assist you."
			/>
			<Section className="min-h-96 items-center">
				<Flex className="mx-auto justify-centeritems-center flex-col sm:flex-row gap-20 mb-6">
					<img
						className="object-cover rounded-md w-full md:w-1/2 "
						src="/contact_photo.png"
						alt="Integrity"
					/>
					<Box>
						<Heading as="h3" size="4" className="mb-3">
							Address
						</Heading>
						<p className="mb-6">
							HydroPixl LLC.
							<br />
							PO Box 1234
							<br />
							Las Vegas, NV 89149
						</p>
						<Heading as="h3" size="4" className="mb-3">
							Business Hours
						</Heading>
						<p className="mb-6">
							Monday - Friday: 8:00 AM - 6:00 PM
							<br />
							Saturday - Sunday: Closed
						</p>
						<Heading as="h3" size="4" className="mb-3">
							General Inquiries
						</Heading>
						<p className="mb-6">
							For general questions, comments, or inquiries about our services,
							please feel free to reach out to us via email or phone. Our team
							will be happy to assist you.
						</p>
						<Heading as="h3" size="4" className="mb-3">
							Phone
						</Heading>
						<p className="mb-6">702-123-4567</p>
						<Heading as="h3" size="4" className="mb-3">
							Email
						</Heading>
						<p className="mb-6">operations@hydropixl.com</p>
					</Box>
				</Flex>
			</Section>
			<Section className="bg-primary">
				<Card className="text-center md:w-3/4 w-full mx-auto">
					<Heading as="h2" size="8" className="mb-4 text-white">
						Get Started with HydroPixl Consulting
					</Heading>
					<Text as="p" className="text-white mb-8">
						Ready to take the next step in your outdoor project? Contact us
						today to learn more about our consulting services and how we can
						help bring your vision to life.
					</Text>
					<Button className="mx-auto" href="/ready">
						Request Consultation
					</Button>
				</Card>
			</Section>
		</PageLayout>
	);
}
