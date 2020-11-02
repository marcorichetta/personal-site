import Head from "next/head";
import React from "react";

export interface ICustomHead {
	title: string;
}

const CustomHead = ({ title }: ICustomHead) => (
	<Head>
		<title>{title}</title>
		<meta charSet="utf-8" />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		{/* Description meta tags */}
		<meta name="title" content="Marco Richetta - Web Developer" />
		<meta
			name="description"
			content="¡Hola! Soy Marco, desarrollador de software de Córdoba, Argentina."
		/>
		{/* Open Graph / Facebook */}
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://marcorichetta.now.sh/" />
		<meta property="og:title" content="Marco Richetta - Web Developer" />
		<meta
			property="og:description"
			content="¡Hola! Soy Marco, desarrollador de software de Córdoba, Argentina."
		/>
		<meta
			property="og:image"
			content="https://res.cloudinary.com/dacfp3qlk/image/upload/v1604289065/metatag.png"
		/>
		{/* Twitter */}
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content="https://marcorichetta.now.sh/" />
		<meta property="twitter:title" content="Marco Richetta - Web Developer" />
		<meta
			property="twitter:description"
			content="¡Hola! Soy Marco, desarrollador de software de Córdoba, Argentina."
		/>
		<meta
			property="twitter:image"
			content="https://res.cloudinary.com/dacfp3qlk/image/upload/v1604289065/metatag.png"
		/>
		{/* Favicons */}
		<link rel="apple-touch-icon" sizes="180x180" href="icons/favicon/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon/favicon-16x16.png" />
		<link rel="manifest" href="icons/favicon/site.webmanifest" />
		<meta
			name="google-site-verification"
			content="0tR5wiUIN_xrDarPhRVBb-5Z7aI6nFMpWjxy_8zuR-E"
		/>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
	</Head>
);

export default CustomHead;
