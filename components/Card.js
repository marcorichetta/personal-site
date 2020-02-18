const Card = ({ name, url, source, imgSource, description, tags }) => {
	const buttons = [
		{ icon: "link", text: "Abrir", link: url },
		{ icon: "github", text: "Source", link: source }
	];

	return (
		<div className="col-span-1 sm:max-w-sm max-w-xs rounded-md overflow-hidden shadow-xl bg-gray-300">
			<img
				className="w-auto h-auto"
				src={`images/projects/${imgSource}.jpg`}
			/>
			<div className="px-6 py-4">
				<div className="text-gray-700 font-bold text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>
			<div className="px-6 py-2">
				{buttons.map(({ icon, text, link }) => (
					<a key={icon} href={link}>
						<button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold mr-2 py-2 px-4 border border-gray-400 rounded-md shadow-md">
							<img
								className="inline pr-2 h-6"
								src={`icons/social/${icon}-black.svg`}
							></img>
							{text}
						</button>
					</a>
				))}
			</div>
			<div className="px-6 py-4">
				{tags.map(t => (
					<span
						key={t}
						className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
					>
						{t}
					</span>
				))}
			</div>
		</div>
	);
};

export default Card;
