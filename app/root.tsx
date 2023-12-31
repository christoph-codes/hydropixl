import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@vercel/remix";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import styles from "./tailwind.css";
import { Theme } from "@radix-ui/themes";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: styles },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Theme>
					<Outlet />
				</Theme>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
