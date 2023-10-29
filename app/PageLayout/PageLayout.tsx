import type { PropsWithChildren } from "react";
import { Box } from "@radix-ui/themes";
import Header from "~/components/Header";
import type { BoxProps } from "node_modules/@radix-ui/themes/dist/esm/components/box";

const PageLayout = ({ children, ...rest }: PropsWithChildren & BoxProps) => {
	return (
		<div {...rest}>
			<Header />
			<Box className="min-h-[70vh]">{children}</Box>
			<div>footer</div>
		</div>
	);
};

export default PageLayout;
