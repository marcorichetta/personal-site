module.exports = {
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
	},
	async redirects() {
		return [
			{
				source: "/blog",
				destination: "https://blog.marcorichetta.vercel.app/",
				permanent: true,
			},
		];
	},
};
