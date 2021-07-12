import { useRouter } from "next/router";
import links from "../data/social";
import { ISocial } from "../interfaces";

const Social = () => {
	const router = useRouter();
	const { locale } = router;

	return (
		<div className="flex py-4">
			{links.map(({ name, icon, url, enUrl }: ISocial) => {
				// Change CV link based on locale
				const cvUrl = locale === "es" ? url : enUrl;

				return (
					<a
						className="mr-3"
						key={name}
						href={cvUrl || url} // Fallback for other links
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={`/icons/social/${icon}.svg`}
							title={name}
							alt={name}
							width={55}
							height={55}
							className="invert-filter transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
						/>
					</a>
				);
			})}
		</div>
	);
};

export default Social;
