import { Container as RadixContainer } from "@radix-ui/themes";
import type { ContainerProps } from "node_modules/@radix-ui/themes/dist/esm/components/container";

const Container = ({ children }: ContainerProps) => {
	return (
		<RadixContainer size="4" className="px-4 sm:px-8 w-full flex-shrin">
			{children}
		</RadixContainer>
	);
};

export default Container;
