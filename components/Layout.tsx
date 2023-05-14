import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import metaImg from "public/images/metatag.png";

import Head from "next/head";
export interface ILayoutProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
	image?: string;
	date?: string;
}

/**
 * Layout compartida para todo el sitio.
 * Básicamente inserta el `<CustomHead />`, `<Navbar />` y `<Footer />`
 * @param title Título HTML
 * @param children Elementos JSX
 */
const Layout = (props: ILayoutProps) => {
	const { children, ...customMeta } = props;
	const router = useRouter();
	const meta = {
		title: "Marco Richetta - Web Developer.",
		description: "¡Hola! Soy Marco, desarrollador de software de Córdoba, Argentina.",
		image: { metaImg },
		type: "website",
		...customMeta,
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				{/* Description meta tags */}
				<meta name="description" content={meta.description} />
				<meta
					property="og:url"
					content={`https://https://https://marcorichetta.vercel.app${router.asPath}`}
				/>
				<link rel="canonical" href={`https://marcorichetta.vercel.app${router.asPath}`} />
				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:title" content={meta.title} />
				<meta property="og:url" content="https://marcorichetta.now.sh/" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:image" content={metaImg.src} />
				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://marcorichetta.now.sh/" />
				<meta property="twitter:title" content={meta.title} />
				<meta property="twitter:description" content={meta.description} />
				<meta property="twitter:image" content={metaImg.src} />
				{meta.date && <meta property="article:published_time" content={meta.date} />}
			</Head>
			<div id="NextApp" className="flex flex-col justify-between min-h-screen text-gray-200">
				<Navbar />
				<main className="container mx-auto p-4">{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
