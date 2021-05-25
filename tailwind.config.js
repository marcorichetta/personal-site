const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
	mode: "jit",
	future: {
		purgeLayersByDefault: true,
	},
	purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./layouts/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.gray.50"),
						"h1,h2,h3,h4,strong": {
							color: theme("colors.gray.100"),
						},
						"h2,h3,h4": {
							"scroll-margin-top": spacing[32],
						},
						"blockquote p:first-of-type::before": false,
						"blockquote p:last-of-type::after": false,
					},
				},
			}),
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/typography")],
};
