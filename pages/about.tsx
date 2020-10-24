import Layout from "../components/Layout";
import Link from "next/link";

const About = () => (
	<Layout title="Sobre mi | Marco Richetta">
		<div className="flex flex-wrap justify-around">
			<h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">Sobre mí</h1>
			<section className="flex flex-wrap text-justify mb-4 px-2 text-base lg:text-lg">
				<div className="md:w-1/2 px-8 mb-4">
					<p>
						Soy un estudiante de la carrera Analista de Sistemas de Computación del
						interior de Córdoba &rarr; 🇦🇷
						<br />
						Mirá mi{" "}
						<a
							href="https://www.linkedin.com/in/marco-richetta/"
							className="link2"
							target="_blank"
							rel="noopener"
						>
							LinkedIn
						</a>{" "}
						para más detalles.
					</p>
					<br />
					<p>
						Desarrollé algunas{" "}
						<Link href="/projects">
							<a className="link2">aplicaciones</a>
						</Link>{" "}
						REST con frameworks de Python como Flask y Django, con SQlite3 y PostgreSQL
						como bases de datos.
					</p>
					<p>
						Para el frontend, utilicé templates HTML (Jinja), Javascript con AJAX para
						añadir funcionalidad extra y WebSockets para consultas en tiempo real.
					</p>
				</div>
				<div className="md:w-1/2 px-8">
					<p>
						Estoy profundizando mis conocimientos sobre ReactJS, una librería hecha por
						Facebook para la creación de interfaces de usuario. React brinda ciertos
						beneficios al momento de definir nuestra UI como componentes reutilizables y
						nos permite manejar el estado de los mismos de una manera consistente.
					</p>
					<br />
					<p>
						También estoy aprendiendo Typescript para detectar errores a través de su
						sistema de tipos y así poder desarrollar aplicaciones más seguras.
					</p>
				</div>
			</section>
		</div>
	</Layout>
);

export default About;
