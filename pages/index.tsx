import Layout from "../components/Layout";
import Techs from "../components/Techs";
import Social from "../components/Social";
import Image from "next/image";

const Index = () => {
	return (
		<>
			<Layout title="Inicio | Marco Richetta">
				<section className="flex flex-col text-center mb-2 items-center">
					<Image
						id="avatar"
						src="/images/cv.jpg"
						alt="Foto de Marco Richetta"
						className="h-24 w-24 md:h-32 md:w-32 rounded-full"
						width={200}
						height={205}
					/>
					<span className="text-2xl mt-2 lg:block md:text-4xl font-bold tracking-tight">
						¡Hola! 👋 <br />
						Me llamo Marco
					</span>
					<span className="text-xl mt-2 md:text-3xl lg:mt-0">
						y soy desarrollador de software
					</span>
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
