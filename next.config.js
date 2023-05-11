module.exports = {
	images: {
		loader: "cloudinary",
		domains: ["res.cloudinary.com"],
		path: "https://res.cloudinary.com/dacfp3qlk/",
	},
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
	},
	async redirects() {
		return [
		  {
			source: '/blog',
			destination: 'blog.marcorichetta.vercel.app/',
			permanent: true,
		  },
		];
	  },
};
