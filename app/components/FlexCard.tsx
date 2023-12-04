import { Card, Inset, Text, Link } from "@radix-ui/themes";
// import { Link } from "@remix-run/react";
import type { CardProps } from "node_modules/@radix-ui/themes/dist/esm/components/card";

export interface IFlexCard extends CardProps {
	label: string;
	imgUrl?: string;
	link?: string;
}

const FlexCard = ({
	imgUrl = "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
	label,
	link,
}: IFlexCard) => {
	return (
		<Link className="flex-grow" href={link || "#"}>
			<Card className="bg-primary">
				<Inset clip="padding-box" side="top" pb="current">
					<img
						src={imgUrl}
						alt="Bold typography"
						className="h-100 w-full object-cover"
					/>
				</Inset>
				<Text as="p" size="6" align="center" className="font-bold text-white">
					{label}
				</Text>
			</Card>
		</Link>
	);
};

export default FlexCard;
