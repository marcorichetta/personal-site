import Layout from "../components/Layout";
import Card from "../components/Card";
import repos from "../data/repos";
import { IRepo } from "../interfaces";

export default () => (
	<Layout title="Proyectos | Marco Richetta">
		<section className="text-center mb-4">
			<h1 className="text-2xl lg:text-3xl font-bold italic mb-2">Proyectos</h1>
			<p className="text-center mx-auto max-w-lg">
				Puede que los proyectos tarden unos segundos en cargar.
				<br />
				Esto se debe a que la plataforma en donde están alojados (Heroku) los mantiene{" "}
				<i>dormidos</i> mientras no son usados.
			</p>
		</section>

		<div className="grid sm:grid-cols-2 gap-10 grid-centering">
			{repos.map((repo: IRepo) => (
				<Card key={repo.name} {...repo} />
			))}
		</div>
	</Layout>
);
