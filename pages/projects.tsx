import Layout from "../components/Layout";
import Card from "../components/Card";
import repos from "../data/repos";
import { IRepo } from "../interfaces";

import useLocale from "@/lib/hooks";

const Projects = () => {
	const { title, p1, p2 } = useLocale().projects;

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
					<Card key={repo.name} {...repo} />
				))}
			</div>
		</Layout>
	);
};

export default Projects;
