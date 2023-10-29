import { Box, Button, Container, Flex, Popover } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import { navLinks } from "utils/navLinks";

const Header = () => {
	return (
		<Box py="4">
			<Container size="4">
				<Flex justify="between" align="center">
					<img src="/logo.svg" alt="HydroPixl logo" />
					<Flex gap="8" display="inline-flex" align="center">
						{navLinks.map((link) => {
							return link.href ? (
								<Link
									key={link.href}
									to={link.href}
									className={
										link.cta ? "p-4 bg-primary" : undefined
									}
								>
									{link.label}
								</Link>
							) : (
								<Popover.Root>
									<Popover.Trigger>
										<Button>{link.label}</Button>
									</Popover.Trigger>
									<Popover.Content style={{ width: 360 }}>
										{link.children &&
											link.children.map((item) => {
												return (
													item.href && (
														<Link
															className="font-bold"
															key={item.href}
															to={item.href}
														>
															{item.label}
														</Link>
													)
												);
											})}
									</Popover.Content>
								</Popover.Root>
							);
						})}
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
