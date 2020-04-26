import links from "../data/social";
import { ISocial } from "../interfaces";

const Social = () => {
	return (
		<div className="py-4">
			{links.map(({ name, icon, url }: ISocial) => (
				<a key={name} href={url} target="_blank" rel="noopener">
					<img
						title={name}
						className="inline px-2 h-10 invert-color"
						src={`icons/social/${icon}.svg`}
					></img>
				</a>
			))}
		</div>
	);
};

export default Social;
