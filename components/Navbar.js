import Link from "next/link";

const Navbar = () => {
	const routes = [{ to: "/projects", title: "Proyectos" }];

	return (
		<nav className="flex flex-col m-5 text-center md:flex-row md:text-left justify-between">
			<div className="flex-grow">
				<Link href="/">
					<a className="text-lg font-bold tracking-tighter">Marco Richetta</a>
				</Link>
			</div>

			<div className="text-sm mt-2 md:mt-0 md:text-base link-wrapper">
				{routes.map(({ to, title }) => (
					<Link href={to} key={title}>
						<a className="link hover-1 text-lg">{title}</a>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
