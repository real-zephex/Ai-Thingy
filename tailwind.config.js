import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-geist-mono)"],
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						background: "#FFFFFF", // or DEFAULT
						foreground: "#11181C", // or 50 to 900 DEFAULT
						primary: {
							//... 50 to 900
							foreground: "#FFFFFF",
							DEFAULT: "#006FEE",
						},
					},
				},

				dark: {
					colors: {
						background: "#1f1f1f", // or DEFAULT
						foreground: "#ECEDEE", // or 50 to 900 DEFAULT
					},
				},
			},
		}),
	],
};
