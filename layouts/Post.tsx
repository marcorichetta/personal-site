import Image from "next/image";
import Layout from "../components/Layout";

const editUrl = (slug: string) =>
	`https://github.com/marcorichetta/personal-site/edit/master/data/til/${slug}.mdx`;
const discussUrl = (slug: string) =>
	`https://mobile.twitter.com/search?q=${encodeURIComponent(
		`https://marcorichetta.io/til/${slug}`
	)}`;

export interface IFrontMatter {
	title: string;
	image: string;
	createdAt: string;
	readingTime: { text: string };
	slug: string;
}
export interface IPost {
	children: React.ReactNode;
	frontMatter: IFrontMatter;
}

/**
 * Layout de la página de un post individual
 * @param  children     Contenido del post
 * @param  frontMatter  Contiene props del archivo MDX
 */
export default function PostLayout({ children, frontMatter }: IPost) {
	return (
		<Layout
			title={`${frontMatter.title} – Marco Richetta`}
			image={`https://marcorichetta.io${frontMatter.image}`}
			date={new Date(frontMatter.createdAt).toISOString()}
		>
			<article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white dark:text-white">
					{frontMatter.title}
				</h1>
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
					<div className="flex items-center">
						<Image
							alt="Marco Richetta"
							height={24}
							width={24}
							src="cv.jpg"
							className="rounded-full"
						/>
						<p className="text-sm text-white-500 min-w-32 mt-2 md:mt-0">
							{"Marco Richetta • "}

							{frontMatter.readingTime.text}
						</p>
					</div>
					<p className="text-sm text-white-700 dark:text-white-300 ml-2">
						{frontMatter.createdAt}
					</p>
				</div>
				{children}
				<div className="prose dark:prose-dark max-w-none w-full"></div>
				<div className="mt-8"></div>
				<div className="text-sm text-white-700 dark:text-white-300">
					<a
						href={discussUrl(frontMatter.slug)}
						target="_blank"
						rel="noopener noreferrer"
					>
						{"Discuss on Twitter"}
					</a>
					{` • `}
					<a href={editUrl(frontMatter.slug)} target="_blank" rel="noopener noreferrer">
						{"Edit on GitHub"}
					</a>
				</div>
			</article>
		</Layout>
	);
}
