import Layout from "../components/Layout";
import Link from "next/link";

import es from "../pages/locales/es";
import en from "../pages/locales/en";
import { useRouter } from "next/router";

const About = () => {
	const router = useRouter();
	const { locale } = router;

	const t = locale === "es" ? es : en;

	const { title, first, second, third } = t.sobreMi;
	return (
		<Layout title="Sobre mi | Marco Richetta">
			<div className="max-w-screen-md mx-auto">
				<section className="mb-4 px-4 text-base lg:text-lg">
					<h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">
						{title}
					</h1>
					<div className="leading-relaxed">
						<p className="mb-4 ">{first}</p>
						<p className="mb-4">
							{second[0]}{" "}
							<Link href="/projects">
								<a className="link2">{second[1]}</a>
							</Link>{" "}
							{second[2]}
						</p>
						<span>{third}</span>
						<ul className="list-disc list-inside mb-4">
							<li>
								Traducción de la documentación de{" "}
								<a
									href="https://github.com/python/python-docs-es/commits?author=marcorichetta"
									className="link2"
									target="_blank"
									rel="noopener noreferrer"
								>
									Python
								</a>{" "}
								y{" "}
								<a
									href="https://github.com/reactjs/es.reactjs.org/issues/4"
									className="link2"
									target="_blank"
									rel="noopener noreferrer"
								>
									React
								</a>{" "}
								al español.
							</li>
							<li>
								<a
									href="https://forum.djangoproject.com/u/marcorichetta/summary"
									className="link2"
									target="_blank"
									rel="noopener noreferrer"
								>
									Foro oficial de Django.
								</a>
							</li>
							<li>
								<a
									href="https://github.com/django/django/pull/13534"
									className="link2"
									target="_blank"
									rel="noopener noreferrer"
								>
									Django
								</a>{" "}
								(Por algo se empieza 😅).
							</li>
						</ul>
						<p className="mb-4">
							Actualmente utilizo Next.js para desarrollo frontend y Django Rest
							Framework para el backend.
						</p>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default About;
