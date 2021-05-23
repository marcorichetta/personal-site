// tailwind.config.js
module.exports = {
	mode: "jit",
	future: {
		purgeLayersByDefault: true,
	},
	purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./layouts/**/*.tsx"],
	theme: {},
	variants: {},
	plugins: [],
};
