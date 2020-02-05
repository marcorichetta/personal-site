import Layout from "../components/Layout";
import Techs from "../components/Techs";
import Social from "../components/Social";

export default () => {
	return (
		<>
			<Layout title="Inicio | Marco Richetta">
				<div className="flex flex-col text-center mb-4 justify-center font-bold text-2xl md:text-3xl lg:text-4xl">
					<img
						className="h-32"
						alt="Person with a computer"
						src="images/undraw_coding.svg"
					></img>
					<div>
						Hola, soy Marco
						<br />
						y programo aplicaciones web 💻
						<br />
					</div>

					<Social />
				</div>

				<h1 className="text-xl md:text-2xl lg:text-3xl">Sobre mí</h1>
				<section className="flex flex-wrap text-justify mb-4 px-2">
					<div className="md:w-1/2 px-8 mb-4">
						<p>
							Soy del interior de Córdoba, 🇦🇷. Me considero muy curioso por entender
							cómo funcionan las cosas en general, lo que me lleva a aprender nuevas
							tecnologías.
						</p>
						<br />
						<p>
							Desarrollé algunas aplicaciones REST con frameworks de Python como Flask
							y Django, con SQlite3 y PostgreSQL como bases de datos.
						</p>
						<p>
							Para el frontend, utilicé templates HTML (Jinja), Javascript con AJAX
							para añadir funcionalidad extra y WebSockets para consultas en tiempo
							real.
						</p>
					</div>
					<div className="md:w-1/2 px-8">
						<p>
							Estoy adentrándome en el ecosistema de ReactJS, una librería hecha por
							Facebook para la creación de interfaces de usuario. React brinda ciertos
							beneficios al momento de definir nuestra UI como componentes
							reutilizables y nos permite manejar el estado de los mismos de una
							manera consistente.
						</p>
						<br />
						<p>
							También estoy aprendiendo Typescript para detectar errores a través de
							su sistema de tipos y así poder desarrollar aplicaciones más seguras.
						</p>
					</div>
				</section>

				<Techs />
			</Layout>
		</>
	);
};
