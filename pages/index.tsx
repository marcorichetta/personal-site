import Layout from "@/components/Layout";
import Techs from "@/components/Techs";
import Social from "@/components/Social";
import Avatar from "@/components/Avatar";
import { useRouter } from "next/router";

import en from "../locales/en";
import es from "../locales/es";

const Index = () => {
	const router = useRouter();
	const { locale } = router;

	const t = locale === "es" ? es : en;

	const { hi, nombre, profesion, techsHeader } = t.index;
	return (
		<>
			<Layout title="Inicio | Marco Richetta">
				<section className="flex flex-col text-center mb-2 items-center">
					<Avatar />
					<span className="text-2xl mt-2 lg:block md:text-4xl font-bold tracking-tight">
						{hi} 👋 <br />
						{nombre}
					</span>
					<span className="text-xl md:text-3xl mb-2">{profesion}</span>
					<Social />
				</section>
				<Techs title={techsHeader} />
			</Layout>
		</>
	);
};

export default Index;
