import { Flex, Heading } from "@radix-ui/themes";
import Section from "./Section";

export interface IPageHeader {
	title?: string;
	description?: string;
	imgSrc?: string;
	imgAlt?: string;
}

const PageHeader = ({
	title,
	description,
	imgSrc,
	imgAlt,
	...rest
}: IPageHeader) => {
	return (
		<Section className="min-h-96 items-center text-center !pb-0" {...rest}>
			<Flex className="mx-auto text-center justify-center max-w-[700px] flex-col items-center">
				<Heading as="h1" size="8" className="mb-3">
					{title}
				</Heading>
				<p className="mb-6">{description}</p>
				<img className="rounded-md" src={imgSrc} alt={imgAlt} />
			</Flex>
		</Section>
	);
};

export default PageHeader;
