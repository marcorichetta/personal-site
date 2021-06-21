import Layout from "../components/Layout";
import Card from "../components/Card";
import repos from "../data/repos";
import { IRepo } from "../interfaces";

const Projects = () => (
	<Layout title="Proyectos | Marco Richetta">
		<section className="text-center mb-4">
			<h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">Proyectos</h1>
			<p className="text-center mx-auto max-w-lg">
				Puede que los proyectos tarden unos segundos en cargar.
				<br />
				Esto se debe a que la plataforma en donde están alojados (Heroku) los mantiene{" "}
				suspendidos mientras no son usados.
			</p>
		</section>

		<div className="grid gap-10 justify-center lg:grid-cols-2 lg:justify-items-center">
			{repos.map((repo: IRepo) => (
				<Card key={repo.name} {...repo} />
			))}
		</div>
	</Layout>
);

export default Projects;
