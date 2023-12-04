import { Button as RadixButton } from "@radix-ui/themes";
import { useNavigate } from "@remix-run/react";
import type { ButtonProps } from "node_modules/@radix-ui/themes/dist/esm/components/button";

export interface IButton extends ButtonProps {
	href?: string;
}

const Button = ({ children, href, className, ...rest }: IButton) => {
	const navigate = useNavigate();
	return (
		<RadixButton
			className={`bg-tertiary text-black font-bold px-5 py-2 text-lg cursor-pointer block text-center ${className}`}
			onClick={(e) => {
				href && navigate(href);
				rest.onClick?.(e);
			}}
			variant="ghost"
			{...rest}
		>
			{children}
		</RadixButton>
	);
};

export default Button;
