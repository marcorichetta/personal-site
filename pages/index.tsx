import Layout from "@/components/Layout";
import Techs from "@/components/Techs";
import Social from "@/components/Social";
import Avatar from "@/components/Avatar";

const Index = () => {
	return (
		<>
			<Layout title="Inicio | Marco Richetta">
				<section className="flex flex-col text-center mb-2 items-center">
					<Avatar />
					<span className="text-2xl mt-2 lg:block md:text-4xl font-bold tracking-tight">
						¡Hola! 👋 <br />
						Me llamo Marco
					</span>
					<span className="text-xl md:text-3xl mb-2">
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
