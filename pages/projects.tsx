import Layout from "../components/Layout";
import Card from "../components/Card";
import repos from "../data/repos";
import { IRepo } from "../interfaces";

import { useRouter } from "next/router";

import en from "../locales/en";
import es from "../locales/es";

const Projects = () => {
	const router = useRouter();
	const { locale } = router;

	const t = locale === "es" ? es : en;

	const { title, p1, p2 } = t.projects;

	return (
		<Layout title="Proyectos | Marco Richetta">
			<section className="text-center mb-4">
				<h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">{title}</h1>
				<p className="text-center mx-auto max-w-lg">
					{p1}
					<br />
					{p2}
				</p>
			</section>

			<div className="grid gap-10 justify-center lg:grid-cols-2 lg:justify-items-center">
				{repos.map((repo: IRepo) => (
					<Card
						key={repo.name}
						description={locale === "es" ? repo.description : repo.enDescription}
						{...repo}
					/>
				))}
			</div>
		</Layout>
	);
};

export default Projects;
