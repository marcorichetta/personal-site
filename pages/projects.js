import Layout from "../components/Layout";
import Card from "../components/Card";
import data from "../data/repos";

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

		<div className="grid sm:grid-cols-2 gap-4 grid-centering">
			{data.map(
				({
					name,
					course,
					date,
					url,
					source,
					imgSource,
					credentials,
					description,
					tags
				}) => (
					<Card
						key={name}
						name={name}
						course={course}
						date={date}
						url={url}
						source={source}
						imgSource={imgSource}
						credentials={credentials}
						description={description}
						tags={tags}
					/>
				)
			)}
		</div>
	</Layout>
);
