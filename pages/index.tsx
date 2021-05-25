import Layout from "@/components/Layout";
import Techs from "@/components/Techs";
import Social from "@/components/Social";

const Index = () => {
	return (
		<>
			<Layout title="Inicio | Marco Richetta">
				<section className="flex flex-col text-center mb-2 items-center">
					<img
						id="avatar"
						alt="Foto de perfil"
						src="https://res.cloudinary.com/dacfp3qlk/f_auto,c_limit,w_256,q_auto/cv.jpg"
						className="h-32 w-32 md:h-40 md:w-40 rounded-full"
						width={250}
						height={250}
					></img>
					<span className="text-2xl mt-2 lg:block md:text-4xl font-bold tracking-tight">
						¡Hola! 👋 <br />
						Me llamo Marco
					</span>
					<span className="text-xl mt-2 md:text-3xl lg:mt-0 mb-2">
						y soy desarrollador de software
					</span>
					<Social />
				</section>
				<Techs />
			</Layout>
		</>
	);
};

export default Index;
