// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],

	fonts: [
		{
			provider: fontProviders.local(),
			name: "Google Sans",
			cssVariable: "--font-google-sans",
			fallbacks: ["Arial", "sans-serif"],
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/google-sans-cyrillic-normal.woff2"],
						weight: "400 700",
						style: "normal",
						unicodeRange: ["U+0301", "U+0400-045F", "U+0490-0491", "U+04B0-04B1", "U+2116"],
					},
					{
						src: ["./src/assets/fonts/google-sans-latin-normal.woff2"],
						weight: "400 700",
						style: "normal",
						unicodeRange: [
							"U+0000-00FF",
							"U+0131",
							"U+0152-0153",
							"U+02BB-02BC",
							"U+02C6",
							"U+02DA",
							"U+02DC",
							"U+0304",
							"U+0308",
							"U+0329",
							"U+2000-206F",
							"U+20AC",
							"U+2122",
							"U+2191",
							"U+2193",
							"U+2212",
							"U+2215",
							"U+FEFF",
							"U+FFFD",
						],
					},
					{
						src: ["./src/assets/fonts/google-sans-cyrillic-italic.woff2"],
						weight: "400 700",
						style: "italic",
						unicodeRange: ["U+0301", "U+0400-045F", "U+0490-0491", "U+04B0-04B1", "U+2116"],
					},
					{
						src: ["./src/assets/fonts/google-sans-latin-italic.woff2"],
						weight: "400 700",
						style: "italic",
						unicodeRange: [
							"U+0000-00FF",
							"U+0131",
							"U+0152-0153",
							"U+02BB-02BC",
							"U+02C6",
							"U+02DA",
							"U+02DC",
							"U+0304",
							"U+0308",
							"U+0329",
							"U+2000-206F",
							"U+20AC",
							"U+2122",
							"U+2191",
							"U+2193",
							"U+2212",
							"U+2215",
							"U+FEFF",
							"U+FFFD",
						],
					},
				],
			},
		},
	],

	vite: {
		plugins: [tailwindcss()],
		css: {
			transformer: "lightningcss",
			lightningcss: {
				targets: browserslistToTargets(browserslist(">= 0.25%")),
			},
		},
	},
});
