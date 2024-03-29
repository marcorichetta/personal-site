import { useRouter } from "next/router";

const Footer = () => {
	const router = useRouter();
	const { locale } = router;

	return (
		<footer className="p-4 text-center text-gray-400 text-md">
			<p>
				{locale === "es" ? "Hecho con " : "Built with "}
				<a
					className="text-blue-300 link"
					href="https://nextjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Next.js
				</a>{" "}
				y{" "}
				<a
					className="text-blue-300 link"
					href="https://tailwindcss.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Tailwind CSS
				</a>
			</p>
			<p className="sm:mt-1">
				{locale === "es" ? "Hosteado en " : "Hosted at "}

				<a
					className="text-blue-300 link"
					href="https://vercel.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Vercel
				</a>
				<a
					href="https://github.com/marcorichetta/personal-site"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						alt="Github Logo"
						className="inline px-2"
						src={`icons/social/github2.svg`}
					></img>
				</a>
				<br />
			</p>
			<p className="sm:mt-1">
				<b>Marco Richetta</b> • 2023
			</p>
		</footer>
	);
};

export default Footer;
