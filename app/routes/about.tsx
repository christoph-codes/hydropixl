import { Flex, Heading, Text } from "@radix-ui/themes";
import type { MetaFunction } from "@vercel/remix";
import PageLayout from "~/templates/PageLayout/PageLayout";
import Button from "~/components/Button";
import Section from "~/components/Section";
import Card from "~/components/Card";
import PageHeader from "~/components/PageHeader";

export const meta: MetaFunction = () => {
	return [
		{ title: "About HydroPixl" },
		{
			name: "description",
			content:
				"At HydroPixl, we're more than just a landscape rendering and irrigation company – we're your partners in turning outdoor dreams into vibrant, living realities.",
		},
	];
};

export default function About() {
	return (
		<PageLayout style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}>
			<PageHeader
				title="About"
				description="At HydroPixl, we're more than just a landscape rendering and
						irrigation company – we're your partners in turning outdoor dreams
						into vibrant, living realities."
				imgSrc="/landscape.png"
				imgAlt="About HydroPixl landscape design plans photo"
			/>
			<Section className="min-h-96 items-center">
				<Flex className="mx-auto justify-center max-w-[700px] flex-col mb-6">
					<Heading as="h1" size="8" className="mb-3">
						Our Story
					</Heading>
					<p className="mb-6">
						HydroPixl began as a vision of providing the highest level of
						craftsmanship and innovation in the landscaping and irrigation
						industry. Jim set out with a simple goal: to create a company that
						blends artistry and technology to transform outdoor spaces into
						breathtaking works of art.
					</p>
					<p>
						With a passion for the environment and a keen eye for detail, Jim
						embarked on this journey, dedicating years to honing the craft and
						perfecting the art of landscape design and irrigation systems. The
						result is HydroPixl, a company born from experience, expertise, and
						a relentless commitment to excellence.
					</p>
				</Flex>
				<Flex className="mx-auto justify-center max-w-[700px] flex-col mb-6">
					<Heading as="h1" size="8" className="mb-3">
						Our Committment
					</Heading>
					<p className="mb-6">
						At HydroPixl, we take pride in our dedication to both our clients
						and our team members. Our core values are built on the principles of
						integrity, creativity, and sustainability. We are committed to
						providing the highest quality of service, not only meeting but
						exceeding your expectations.
					</p>
					<p>
						But our commitment doesn't stop there. We're equally passionate
						about creating a workplace where our valued employees thrive. We
						believe that happy, motivated team members deliver exceptional
						results. That's why we strive to compensate our team at rates
						significantly higher than industry standards, we believe that when
						our team is well taken care of, they, in turn, take exceptional care
						of our clients.
					</p>
				</Flex>
				<Flex className="mx-auto justify-center max-w-[700px] flex-col">
					<Heading as="h1" size="8" className="mb-3">
						Our Vision
					</Heading>
					<p className="mb-6">
						As we embark on this exciting journey, our vision for HydroPixl is
						clear: to become a leading force in the landscape and irrigation
						industry, setting new standards for excellence, innovation, and
						workplace satisfaction. We envision a future where every outdoor
						space we touch becomes a masterpiece, and every member of our team
						is empowered to reach their full potential.
					</p>
				</Flex>
			</Section>
			<Section className="bg-primary">
				<Card className="text-center md:w-3/4 w-full mx-auto">
					<Heading as="h2" size="8" className="mb-4 text-white">
						Ready To Get Started?
					</Heading>
					<Text as="p" className="text-white mb-8">
						We invite you to join us on this journey of transformation and
						growth. Whether you're a homeowner seeking to bring your landscape
						dreams to life or a talented professional looking for a rewarding
						career, HydroPixl is here to serve and inspire.
					</Text>
					<Text as="p" className="text-white mb-8">
						Thank you for considering HydroPixl for your landscaping and
						irrigation needs. Together, we'll turn your outdoor vision into a
						living masterpiece.
					</Text>
					<Button className="mx-auto" href="/ready">
						Request Consultation
					</Button>
				</Card>
			</Section>
		</PageLayout>
	);
}
