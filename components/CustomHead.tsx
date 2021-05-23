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
	</Head>
);

export default CustomHead;
