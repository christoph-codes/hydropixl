import { Flex } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import { navLinks } from "utils/navLinks";
import Container from "./Container";

const Footer = () => {
	return (
		<footer className="py-2">
			<Container>
				<Flex
					justify="between"
					align="center"
					direction={{ initial: "column", sm: "row" }}
				>
					<img src="/icon.svg" alt="HydroPixl Icon" />
					<div>
						<nav className="items-center gap-3 mb-0 sm:flex hidden">
							{navLinks.map(
								(link) =>
									link.href && (
										<li key={link.href} className="list-none mb-0">
											<Link to={link.href}>{link.label}</Link>
										</li>
									)
							)}
						</nav>
						<p className="text-center sm:text-right text-md">
							Copyright © 2023. HydroPixl. All RIghts Reserved.
						</p>
					</div>
				</Flex>
			</Container>
		</footer>
	);
};

export default Footer;
