import PageHeader from "~/components/PageHeader";
import PageLayout from "../PageLayout";
import Section from "~/components/Section";
import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import Card from "~/components/Card";
import Button from "~/components/Button";
import type { TServiceContent } from "utils/servicesContent";

const ServicesLayout = ({ content }: TServiceContent) => {
	return (
		<PageLayout style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.8" }}>
			{content.header && (
				<PageHeader
					title={content.header.title}
					description={content.header.description}
					imgSrc={content.header.imgSrc}
					imgAlt={content.header.imgAlt}
				/>
			)}
			{content.leadingTitle && content.leadingDescription && (
				<Section className="min-h-96 items-center">
					<Flex className="mx-auto justify-center max-w-[700px] flex-col mb-6 text-center">
						<Heading as="h2" size="8" className="mb-3">
							{content.leadingTitle}
						</Heading>
						<p className="mb-6">{content.leadingDescription}</p>
					</Flex>
				</Section>
			)}
			{content.featuredPoints && content.featuredPointsContent && (
				<Section className="min-h-96 items-center">
					<Flex className="mx-auto justify-center mb-6 text-center">
						{content.featuredPointsContent.map((point) => (
							<Box key={point.title} className="inline text-center">
								<img
									src={point.icon}
									alt="decoration"
									className="inline-block mb-6"
								/>
								<Heading as="h3" size="5" className="mb-3">
									{point.title}
								</Heading>
								<p className="mb-6">{point.description}</p>
							</Box>
						))}
					</Flex>
				</Section>
			)}
			{content.numberedPoints && content.numberedPointsContent && (
				<Section className="min-h-96 items-center">
					<Grid
						className="mx-auto justify-center mb-6 text-center"
						columns={{ initial: "1", md: "2" }}
						gap="5"
					>
						{content.numberedPointsContent.map((point, index) => (
							<Flex key={point.title} className="gap-8">
								<Heading size="9" className="font-bold text-tertiary leading-2">
									{index + 1}
								</Heading>
								<Box className="text-center md:text-left">
									<Heading as="h3" size="5" className="mb-3">
										{point.title}
									</Heading>
									<p className="mb-6">{point.description}</p>
								</Box>
							</Flex>
						))}
					</Grid>
				</Section>
			)}
			{content.secondaryTitle && content.secondaryDescription && (
				<Section className="min-h-96 items-center !py-4">
					<Flex className="mx-auto justify-center max-w-[700px] flex-col mb-6 text-center">
						<Heading as="h2" size="8" className="mb-3">
							{content.secondaryTitle}
						</Heading>
						<p className="mb-6">{content.secondaryDescription}</p>
					</Flex>
				</Section>
			)}
			{content.serviceContent && content.serviceGridPhotos && (
				<Section className="min-h-96 items-center">
					<Flex gap="8">
						<Grid
							className="mx-auto justify-center mb-6 text-center"
							columns="2"
							gap="5"
						>
							{content.serviceGridPhotos.map((photo, index) => (
								<img key={index} src={photo.src} alt={photo.alt} />
							))}
						</Grid>
						<Box>{content.serviceContent}</Box>
					</Flex>
				</Section>
			)}
			<Section className="bg-primary">
				<Card className="text-center md:w-3/4 w-full mx-auto">
					<Heading as="h2" size="8" className="mb-4 text-white">
						{content.footer.title}
					</Heading>
					<p className="text-white mb-8">{content.footer.description}</p>
					<Button className="mx-auto" href="/ready">
						Request Consultation
					</Button>
				</Card>
			</Section>
		</PageLayout>
	);
};

export default ServicesLayout;
