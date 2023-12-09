import { Flex, Popover, Text } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import { Fragment, useState } from "react";
import type { TLink } from "utils/navLinks";

export interface IDropdown {
	triggerLabel: string;
	links?: TLink[];
}

const Dropdown = ({ triggerLabel, links }: IDropdown) => {
	const [activeLink, setActiveLink] = useState(false);
	return (
		<Popover.Root onOpenChange={() => setActiveLink(!activeLink)}>
			<Popover.Trigger>
				<Text
					className={`font-bold py-2 px-4 ${
						activeLink && "text-tertiary"
					} cursor-pointer hover:text-tertiary focus:text-tertiary transition-colors`}
				>
					{triggerLabel}
				</Text>
			</Popover.Trigger>
			<Popover.Content style={{ width: 360 }}>
				<Flex direction="column" gap="4">
					{links &&
						links.map((item) => {
							return (
								<Fragment key={item.label}>
									{item.href && (
										<Link key={item.href} to={item.href}>
											<Text className="font-bold cursor-pointer hover:text-tertiary focus:text-tertiary transition-colors">
												{item.label}
											</Text>
										</Link>
									)}
								</Fragment>
							);
						})}
				</Flex>
			</Popover.Content>
		</Popover.Root>
	);
};

export default Dropdown;
