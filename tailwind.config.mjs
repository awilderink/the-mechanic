const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#1F1F1F",
				secondary: "#99B5BB",
				tertiary: "#FF9900",
				sand: "#EDEDE6",
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
