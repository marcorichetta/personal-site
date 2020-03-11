import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default ({ children, title = "Marco Richetta - Programador Web" }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				{/* Description meta tags */}
				<meta name="title" content="Marco Richetta - Sitio Personal" />
				<meta name="description" content="Programador web de Córdoba, Argentina" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://marcorichetta.now.sh/" />
				<meta property="og:title" content="Marco Richetta - Sitio Personal" />
				<meta property="og:description" content="Programador web de Córdoba, Argentina" />
				<meta
					property="og:image"
					content="https://marcorichetta.now.sh/images/undraw_programming.png"
				/>

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://marcorichetta.now.sh/" />
				<meta property="twitter:title" content="Marco Richetta - Sitio Personal" />
				<meta
					property="twitter:description"
					content="Programador web de Córdoba, Argentina"
				/>
				<meta
					property="twitter:image"
					content="https://marcorichetta.now.sh/images/undraw_programming.png"
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
			</Head>
			<div id="NextApp" className="flex flex-col justify-between min-h-screen text-gray-200">
				<Navbar />
				<main className="container mx-auto p-4">{children}</main>
				<Footer />
			</div>
		</>
	);
};
