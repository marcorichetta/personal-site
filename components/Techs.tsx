import techs from "../data/techs";
import { ITech } from "../interfaces";

const Techs = () => {
	return (
		<>
			<h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Tecnologías que utilizo</h1>
			<section className="flex flex-wrap text-justify mb-4">
				{techs.map((stack) => (
					<div key={stack.title} className="w-1/2 md:w-1/3 px-8 my-2">
						<h1 className="text-lg md:text-xl lg:text-2xl mb-2">{stack.title}</h1>
						<ul className="flex flex-col">
							{stack.data.map(({ name, icon, url }: ITech) => (
								<li className="flex items-center mb-2 sm:text-base" key={name}>
									<img
										alt={name}
										src={`/icons/skills/${icon}`}
										width={50}
										height={50}
									/>
									<a
										className="text-blue-300 link ml-3"
										href={url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{name}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</>
	);
};

export default Techs;
