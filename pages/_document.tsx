import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="es">
				<Head>
					{/* Self hosted Inter font */}
					<link
						rel="preload"
						href="/fonts/inter-var-latin.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					{/* Favicons */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="icons/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="icons/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="icons/favicon/favicon-16x16.png"
					/>
					<link rel="manifest" href="icons/favicon/site.webmanifest" />

					{/* Google */}
					<meta
						name="google-site-verification"
						content="0tR5wiUIN_xrDarPhRVBb-5Z7aI6nFMpWjxy_8zuR-E"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
