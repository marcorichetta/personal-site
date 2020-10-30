import Layout from "../components/Layout";
import Link from "next/link";

const About = () => (
	<Layout title="Sobre mi | Marco Richetta">
		<div className="max-w-screen-md mx-auto">
			<section className="mb-4 px-4 text-base lg:text-lg">
				<h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">Sobre mí</h1>
				<div>
					<p className="mb-4">
						Soy un programador del interior de Córdoba (🇦🇷) y también estudiante de la
						carrera Analista de Sistemas de Computación.
					</p>
					<p className="mb-4">
						Desarrollé algunas{" "}
						<Link href="/projects">
							<a className="link2">aplicaciones</a>
						</Link>{" "}
						con frameworks de Python como Flask y Django, con SQlite3 y PostgreSQL como
						bases de datos. <br /> Para el frontend, utilicé templates HTML (Jinja),
						Javascript con AJAX para añadir funcionalidad extra y WebSockets para
						consultas en tiempo real.
					</p>
					<p className="mb-4">
						Me gusta contribuir a proyectos que uso o que me parecen interesantes. Por
						ejemplo:
						<ul className="list-disc list-inside">
							<li>
								Traducción de la documentación de{" "}
								<a
									href="https://github.com/python/python-docs-es/commits?author=marcorichetta"
									className="link2"
									target="_blank"
									rel="noopener"
								>
									Python
								</a>{" "}
								y{" "}
								<a
									href="https://github.com/reactjs/es.reactjs.org/issues/4"
									className="link2"
									target="_blank"
									rel="noopener"
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
									rel="noopener"
								>
									Foro oficial de Django.
								</a>
							</li>
							<li>
								<a
									href="https://github.com/django/django/pull/13534"
									className="link2"
									target="_blank"
									rel="noopener"
								>
									Código de Django
								</a>{" "}
								(Por algo se empieza 😅).
							</li>
						</ul>
					</p>
					<p className="mb-4">
						Actualmente utilizo Next.js para desarrollo frontend y Django Rest Framework
						para el backend.
					</p>
				</div>
			</section>
		</div>
	</Layout>
);

export default About;
