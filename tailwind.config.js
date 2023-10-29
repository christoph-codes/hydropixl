/** @type {import('tailwindcss').Config} */
export default {
	content: ["./app/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#227295",
				secondary: "#52B886",
				tertiary: "#6ED2C8",
				gray: "#646464",
				lightGray: "#D9D9D9",
			},
		},
	},
	plugins: [],
};
