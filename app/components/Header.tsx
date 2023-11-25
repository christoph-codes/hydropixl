/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Container, Flex, Popover, Text } from "@radix-ui/themes";
import { Link, useLocation } from "@remix-run/react";
import { navLinks } from "utils/navLinks";
import { useDimensions } from "~/hooks/useDimensions";

const Header = () => {
	const location = useLocation();
	const deviceWidth = useDimensions();

	return (
		<Box py="4" className="shadow-lg">
			<Container size="4" className="px-4 md:px-0">
				<Flex justify="between" align="center">
					<img src="/logo.svg" alt="HydroPixl logo" />
					<Flex
						gap="4"
						display="inline-flex"
						align="center"
						hidden={deviceWidth.size === "mobile"}
					>
						{navLinks.map((link) => {
							return !link.children && link.href ? (
								<Link
									key={link.href}
									to={link.href}
									className={`font-bold py-2 px-4 text-black hover:text-tertiary transition-colors ${
										location.pathname === link.href && "text-tertiary"
									} ${
										link.cta &&
										`rounded-md bg-tertiary hover:bg-secondary text-black hover:text-black px-8 ${
											location.pathname === link.href && "!text-black"
										}`
									}`}
								>
									{link.label}
								</Link>
							) : (
								<Popover.Root>
									<Popover.Trigger>
										<Text className="font-bold py-2 px-4 cursor-pointer hover:text-tertiary focus:text-tertiary transition-colors">
											{link.label}
										</Text>
									</Popover.Trigger>
									<Popover.Content style={{ width: 360 }}>
										<Flex direction="column" gap="4">
											{link.children &&
												link.children.map((item) => {
													return (
														item.href && (
															<Link key={item.href} to={item.href}>
																<Text className="font-bold">{item.label}</Text>
															</Link>
														)
													);
												})}
										</Flex>
									</Popover.Content>
								</Popover.Root>
							);
						})}
					</Flex>
					<Flex
						justify="between"
						align="center"
						hidden={deviceWidth.size === "desktop"}
					>
						<Button className="p-4 cursor-pointer bg-transparent">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 9h16.5m-16.5 6.75h16.5"
								/>
							</svg>
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
