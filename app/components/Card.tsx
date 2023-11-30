import type { ReactNode } from "react";

export interface ICard {
	children: ReactNode;
	className?: string;
}

const Card = ({ children, ...rest }: ICard) => {
	return (
		<div className={`rounded-md p-4 sm:px-8 ${rest.className}`}>{children}</div>
	);
};

export default Card;
