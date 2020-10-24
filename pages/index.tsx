import Layout from "../components/Layout";
import Techs from "../components/Techs";
import Social from "../components/Social";

const Index = () => {
	return (
		<>
			<Layout title="Inicio | Marco Richetta">
				<section className="flex flex-col text-center mb-4 items-center">
					<img
						id="avatar"
						className="h-24 w-24 md:h-32 md:w-32 rounded-full"
						alt="Avatar de Marco Richetta"
						src="images/cv-lg.jpg"
						srcSet="images/cv-lg.jpg 1315w, images/cv-sm.jpg 868w"
						sizes="176px"
					></img>
					<span className="text-2xl mt-2 lg:block lg:text-4xl font-bold tracking-tight">
						¡Hola! 👋 <br />
						Me llamo Marco
					</span>
					<i className="text-xl mt-2 md:text-2xl lg:mt-0">
						y soy desarrollador de software
					</i>
					<Social />
				</section>

				<section className="text-center font-bold mx-auto max-w-lg text-md md:text-xl mb-8">
					La idea de este sitio es centralizar información sobre mí y sobre los proyectos
					en los que trabaje.
					<br />
				</section>

				<Techs />
			</Layout>
		</>
	);
};

export default Index;
