import { useState } from "react";
import Link from "next/link";
import Toggler from "./mobile/Toggler";
import LanguagePicker from "@/components/LanguagePicker";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const { locale } = router;

	const [isMenuOpen, setisMenuOpen] = useState(false);

	const routes = [
		{ to: "/", title: locale === "es" ? "Inicio" : "Home" },
		{ to: "/blog", title: "Blog" },
		{ to: "/about", title: locale === "es" ? "Sobre mí" : "About me" },
	];

	return (
		<header className="flex justify-between items-center p-8 sticky-nav w-full container mx-auto">
			<div className="flex items-center m-5 sm:hidden">
				<Toggler isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
			</div>
			{/* Dinamically hide the nav based on the value of isMenuOpen */}
			<nav
				className={`${isMenuOpen ? "block" : "hidden"}
                items-center justify-center sm:flex sm:flex-wrap`}
			>
				{routes.map(({ to, title }) => (
					<Link href={to} key={title}>
						{/* If menu open, apply dropdown styles, 
							else apply custom link2 styles */}
						<a
							className={`${
								isMenuOpen
									? "rounded-sm py-2 px-4 block hover:bg-blue-900"
									: "link2 font-bold"
							}
							text-xl mx-2 "`}
						>
							{title}
						</a>
					</Link>
				))}
			</nav>
			<LanguagePicker />
		</header>
	);
};

export default Navbar;
