import { Flex } from "@radix-ui/themes";
import type { FlexProps } from "node_modules/@radix-ui/themes/dist/esm/components/flex";
import Container from "./Container";

const Section = ({ children, className, ...rest }: FlexProps) => {
	return (
		<Flex className={`py-8 md:py-20 ${className}`} {...rest}>
			<Container>{children}</Container>
		</Flex>
	);
};

export default Section;
