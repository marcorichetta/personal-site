import React from "react";
import techs from "../data/techs";
import { ITech } from "../interfaces";

const Techs = () => {
	return (
		<>
			<h1 className="text-xl md:text-2xl lg:text-3xl">Tecnologías que utilizo</h1>
			<section className="flex flex-wrap text-justify mb-4">
				{techs.map((stack) => (
					<div key={stack.title} className="w-1/2 md:w-1/3 px-8 my-2">
						<h3 className="text-lg md:text-xl lg:text-2xl mb-2">{stack.title}</h3>
						<ul className="flex flex-col">
							{stack.data.map(({ name, icon, url }: ITech) => (
								<li className="flex items-center mb-2" key={name}>
									<img
										className="inline h-8 px-2"
										alt={`${name} icon`}
										src={`icons/skills/${icon}`}
									></img>
									<a
										className="text-blue-300 link mx-2 hover-1"
										href={url}
										target="_blank"
										rel="noopener"
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
