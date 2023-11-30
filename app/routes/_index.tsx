import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import PageLayout from "~/templates/PageLayout/PageLayout";
import Button from "~/components/Button";
import Section from "~/components/Section";
import FlexCard from "~/components/FlexCard";
import Card from "~/components/Card";

export const meta: MetaFunction = () => {
	return [
		{ title: "HydroPixl" },
		{
			name: "description",
			content:
				"We are committed to where artistry and technology converge to transform your outdoor dreams into living masterpieces. Led by industry veteran Jim, with over 12 years of experience, HydroPixl is your trusted partner for unrivaled landscape renderings and top-tier irrigation services.",
		},
	];
};

export default function Index() {
	return (
		<PageLayout style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}>
			<Section className="min-h-96 items-center bg-home-hero bg-no-repeat bg-cover">
				<Card className="bg-white w-full md:w-1/2 p-6 sm:p-10 rounded-md text-center sm:text-left">
					<Heading as="h2" size="8" className="mb-3">
						Las Vegas Landscape Design & Irrigation
					</Heading>
					<Text as="p" size="6" className="mb-6 text-primary">
						Trusted partners in turning outdoor dreams into vibrant, living
						realities.
					</Text>
					<Button href="/ready" className="mx-auto sm:mx-0">
						Request Consultation
					</Button>
				</Card>
			</Section>
			<Section>
				<Flex
					gap={{ initial: "4", md: "8" }}
					direction={{ initial: "column", sm: "row" }}
				>
					<FlexCard
						imgUrl="/irrigation.png"
						label="Irrigation"
						link="/services/irrigation"
					/>
					<FlexCard
						imgUrl="/landscape.png"
						label="Landscape Designs"
						link="/services/landscape-designs"
					/>
					<FlexCard
						imgUrl="/consulting.png"
						label="Consultations"
						link="/services/consultations"
					/>
				</Flex>
			</Section>
			<Section>
				<Card className="text-center md:w-3/4 w-full mx-auto">
					<Heading as="h2" size="8" className="mb-4">
						Who Are We?
					</Heading>
					<Text as="p">
						We are committed to where artistry and technology converge to
						transform your outdoor dreams into living masterpieces. Led by
						industry veteran Jim, with over 12 years of experience, HydroPixl is
						your trusted partner for unrivaled landscape renderings and top-tier
						irrigation services.
					</Text>
				</Card>
			</Section>
			<Section>
				<Flex
					align="center"
					justify="center"
					gap="8"
					direction={{ initial: "column", md: "row" }}
				>
					<img
						src="/integrity.jpg"
						alt="hey"
						className="rounded-lg md:w-1/2 w-full"
					/>
					<Card className="pl-unset px-unset sm:pl-8 text-center sm:text-left">
						<Heading as="h2" size="8" className="mb-4">
							Integrity, Creativity, and Sustainability
						</Heading>
						<Text as="p" className="text-center sm:text-left">
							Our values define us. We’re dedicated to surpassing your
							expectations, delivering service that goes beyond the ordinary. We
							believe in more than landscapes; we believe in sustainable,
							transformative environments. Our workplace mirrors our ethos - a
							space where our valued team members flourish, ensuring that they,
							in turn, offer exceptional care to our clients.
						</Text>
					</Card>
				</Flex>
			</Section>
			<Section>
				<Card className="text-center md:w-3/4 w-full mx-auto">
					<Heading as="h2" size="8" className="mb-4">
						Our Work
					</Heading>
					<Text as="p">
						We are committed to where artistry and technology converge to
						transform your outdoor dreams into living masterpieces. Led by
						industry veteran Jim, with over 12 years of experience, HydroPixl is
						your trusted partner for unrivaled landscape renderings and top-tier
						irrigation services.
					</Text>
				</Card>
				<Grid
					columns={{ initial: "1", md: "3" }}
					gap={{ initial: "2", md: "6" }}
					width="auto"
					className="my-8"
				>
					<img
						src="/work/roseman3.png"
						alt="hey"
						className="rounded-lg w-full object-cover"
					/>
					<img
						src="/work/roseman5.png"
						alt="hey"
						className="rounded-lg w-full object-cover"
					/>
					<img
						src="/work/roseman6a.png"
						alt="hey"
						className="rounded-lg w-full object-cover"
					/>
					<img
						src="/work/roseman9.png"
						alt="hey"
						className="rounded-lg w-full object-cover"
					/>
					<img
						src="/work/safari_hoa_middle_island.png"
						alt="hey"
						className="rounded-lg w-full object-cover"
					/>
					<img
						src="/work/safari_hoa_west_corner.png"
						alt="hey"
						className="rounded-lg w-full object-cover"
					/>
				</Grid>
			</Section>
			<Section className="bg-primary">
				<Card className="text-center md:w-3/4 w-full mx-auto">
					<Heading as="h2" size="8" className="mb-4 text-white">
						Ready To Get Started?
					</Heading>
					<Text as="p" className="text-white mb-8">
						We are committed to where artistry and technology converge to
						transform your outdoor dreams into living masterpieces. Led by
						industry veteran Jim, with over 12 years of experience, HydroPixl is
						your trusted partner for unrivaled landscape renderings and top-tier
						irrigation services.
					</Text>
					<Button className="mx-auto" href="/ready">
						Request Consultation
					</Button>
				</Card>
			</Section>
		</PageLayout>
	);
}
