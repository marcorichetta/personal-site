import Image from "next/image";
import { useState } from "react";
import { IRepo } from "../interfaces";

const Card = (props: IRepo) => {
	// Destructuring de props
	const { name, course, date, url, source, imgSource, credentials, description, tags } = props;

	const [showCredentials, setshowCredentials] = useState("hidden");

	const buttons = [
		{ icon: "link", text: "Abrir", link: url },
		{ icon: "github", text: "Fuente", link: source },
	];

	return (
		<div className="col-span-1 sm:max-w-md max-w-xs rounded-md overflow-hidden shadow-2xl bg-gray-300">
			<Image
				layout="responsive"
				width={200}
				height={100}
				className="w-auto h-auto"
				src={imgSource}
			/>
			<div className="px-6 py-4">
				<div className="flex justify-between w-full">
					<div className="text-gray-700 font-bold text-xl">{name}</div>
					<div className="flex items-center text-sm text-gray-500">
						<svg
							className="flex-shrink-0 mr-1 h-5 w-5 text-gray-600"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="text-gray-600">{date}</p>
					</div>
				</div>
				{course ? (
					<div className="text-gray-600 pt-2">
						Curso:{" "}
						<a
							className="text-blue-500"
							href={course.url}
							target="_blank"
							rel="noopener"
						>
							{course.name}
						</a>
					</div>
				) : (
					""
				)}
				<p className="text-gray-700 text-base mt-2">{description}</p>
			</div>
			<div className="px-6 py-2">
				{buttons.map(({ icon, text, link }) =>
					link ? (
						<a key={icon} href={link} target="_blank" rel="noopener">
							<button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold mr-2 py-2 px-4 border border-gray-400 rounded-md shadow-md">
								<img
									className="inline pr-2 h-6"
									src={`/icons/social/${icon}-black.svg`}
								></img>
								{text}
							</button>
						</a>
					) : (
						""
					)
				)}
			</div>
			<div className="px-6 py-2">
				{credentials ? (
					<>
						<button
							className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
							onClick={() => setshowCredentials("block")}
							aria-label="Credenciales"
						>
							Credenciales
						</button>
						<span className={`${showCredentials} text-gray-600`}>
							<b>User:</b> {credentials.user}
							<br />
							<b>Pass:</b> {credentials.pass}
						</span>
					</>
				) : (
					""
				)}
			</div>
			<div className="flex flex-wrap px-6 py-4">
				{tags.map((t: string) => (
					<span
						key={t}
						className="mr-2 mb-2 py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-bold tracking-wider"
					>
						{t.toUpperCase()}
					</span>
				))}
			</div>
		</div>
	);
};

export default Card;
