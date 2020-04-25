import { useState } from "react";
import Link from "next/link";
import Toggler from "./mobile/Toggler";

const Navbar = () => {
	const [isMenuOpen, setisMenuOpen] = useState(false);

	const routes = [
		{ to: "/projects", title: "Proyectos" },
		{ to: "/about", title: "Sobre mí" },
	];

	return (
		<header className="sm:flex sm:justify-between sm:items-center m-3">
			<div className="flex items-center justify-between px-4 py-3">
				<div>
					<Link href="/">
						<a className="text-xl sm:text-2xl font-bold tracking-tighter">
							Marco Richetta
						</a>
					</Link>
				</div>

				<div className="sm:hidden">
					<Toggler isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
				</div>
			</div>

			{/* Dinamically hide the nav based on the value of isMobile */}
			<nav
				className={`${isMenuOpen ? "block" : "hidden"}
				sm:flex sm:block text-sm md:mt-0 md:text-base`}
			>
				{routes.map(({ to, title }) => (
					<Link href={to} key={title}>
						{/* If menu open, apply dropdown styles, 
							else apply custom link2 styles */}
						<a
							className={`${
								isMenuOpen
									? "rounded-sm py-2 px-4 block hover:bg-blue-900"
									: "link2"
							}
							text-lg mx-2 "`}
						>
							{title}
						</a>
					</Link>
				))}
			</nav>
		</header>
	);
};

export default Navbar;
