import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomHead from "./CustomHead";

export interface ILayoutProps {
	children: React.ReactNode;
	title: string;
}

/**
 * Layout compartida para todo el sitio.
 * Básicamente inserta el `<CustomHead />`, `<Navbar />` y `<Footer />`
 * @param title Título HTML
 * @param children Elementos JSX
 */
const Layout = ({ title, children }: ILayoutProps) => (
	<>
		<CustomHead title={title} />
		<div id="NextApp" className="flex flex-col justify-between min-h-screen text-gray-200">
			<Navbar />
			<main className="container mx-auto p-4">{children}</main>
			<Footer />
		</div>
	</>
);

export default Layout;
