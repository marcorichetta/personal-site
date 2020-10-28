import Image from "next/image";
import links from "../data/social";
import { ISocial } from "../interfaces";

const Social = () => {
	return (
		<div className="flex py-4">
			{links.map(({ name, icon, url }: ISocial) => (
				<a className="mr-3" key={name} href={url} target="_blank" rel="noopener">
					<Image
						src={`/icons/social/${icon}.svg`}
						title={name}
						width={55}
						height={55}
						className="invert-filter transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
					/>
				</a>
			))}
		</div>
	);
};

export default Social;
