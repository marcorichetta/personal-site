import Link from "next/link";

const Navbar = () => {
	const routes = [
		{ to: "/projects", title: "Proyectos" },
		{ to: "/about", title: "Sobre mí" }
	];

	return (
		<nav className="flex flex-col m-5 text-center md:flex-row md:text-left justify-between">
			<div className="flex-grow">
				<Link href="/">
					<a className="text-xl font-bold tracking-tighter gradient-name">Marco Richetta</a>
				</Link>
			</div>

			<div className="text-sm mt-2 md:mt-0 md:text-base link-wrapper">
				{routes.map(({ to, title }) => (
					<Link href={to} key={title}>
						<a className="link2 text-lg mx-2">{title}</a>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
