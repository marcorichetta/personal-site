import Layout from "../components/Layout";
import Techs from "../components/Techs";
import Social from "../components/Social";

export default () => {
	return (
		<>
			<Layout title="Inicio | Marco Richetta">
				<section className="flex flex-col text-center mb-4 justify-center">
					<img
						className="h-32"
						alt="Person with a computer"
						src="images/undraw_coding.svg"
					></img>
					<div className="text-xl md:text-2xl lg:text-3xl font-bold">
						Marco Richetta
						<br />
						<i className="text-xl md:text-2xl">Desarrollador de aplicaciones web</i> 💻
						<br />
					</div>

					<Social />
				</section>

				<section className="text-center mx-auto max-w-lg text-md md:text-xl mb-8">
					La idea de este sitio es centralizar la información sobre mí y sobre los
					proyectos en los que trabaje.
					<br />
				</section>

				<Techs />
			</Layout>
		</>
	);
};
