import React from "react";
import techs from "../data/techs.js";

const Techs = () => {
	return (
		<>
			<h1 className="text-xl md:text-2xl lg:text-3xl">Tecnologías que utilizo</h1>
			<section className="flex flex-wrap text-justify mb-4">
				{techs.map(tech => (
					<div key={tech.title} className="w-1/2 md:w-1/3 px-8 my-2">
						<h3 className="text-lg md:text-xl lg:text-2xl mb-2">{tech.title}</h3>
						<ul className="flex flex-col">
							{tech.data.map(t => (
								<li className="flex items-center mb-2" key={t.name}>
									<img
										className="inline h-8 px-2"
										alt={`${t.name} icon`}
										src={`icons/skills/${t.icon}`}
									></img>
									<a className="text-blue-300 link hover-1" href={t.url}>
										{t.name}
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
