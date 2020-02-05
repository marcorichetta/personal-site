import React from "react";
import links from "../data/social.js";

const Social = () => {
	return (
		<div className="py-4">
			{links.map(({ name, icon, url }) => (
				<a key={name} href={url} target="_blank" rel="noopener">
					<img
						title={name}
						className="inline px-1 h-10 invert-color"
						src={`icons/social/${icon}.svg`}
					></img>
				</a>
			))}
		</div>
	);
};

export default Social;
