import Layout from "../components/Layout";
import Card from "../components/Card";
import data from "../data/repos";

export default () => (
	<Layout title="Proyectos | Marco Richetta">
		<section className="text-center mb-4">
			<h1 className="text-xl md:text-2xl lg:text-3xl font-bold italic">Proyectos</h1>
			<p className="text-center mx-auto max-w-lg">
				Puede que los proyectos tarden entre 5-10 segundos en cargar.
				<br />
				Esto se debe a que la plataforma en dónde estan hosteados (Heroku) los
				mantiene <i>dormidos</i> mientras no son usados.
			</p>
		</section>

		<div className="grid sm:grid-cols-2 gap-4 grid-centering">
			{data.map(({ name, date, url, source, imgSource, description, tags }) => (
				<Card
					key={name}
					name={name}
					date={date}
					url={url}
					source={source}
					imgSource={imgSource}
					description={description}
					tags={tags}
				/>
			))}
		</div>
		{/* <div className="flex justify-center focus-in-contract">
			<img className="max-w-xs" src="/images/potato.jpg"></img>
		</div> */}
	</Layout>
);
