import { IFrontMatter } from "interfaces";
import Layout from "../components/Layout";

const editUrl = (slug: string) =>
	`https://github.com/marcorichetta/personal-site/edit/master/data/til/${slug}.mdx`;

const mailUrl = (slug: string) => `mailto:marcorichetta@gmail.com?subject=TIL - ${slug}`;
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
				<div className="flex flex-row justify-between items-start w-full mt-2">
					<div className="flex items-center">
						<p className="text-base font-semibold text-gray-300 min-w-32 mt-0">
							{frontMatter.readingTime.text}
						</p>
					</div>
					<p className="text-base font-semibold text-gray-300 dark:text-white-300">
						{frontMatter.createdAt}
					</p>
				</div>
				<div className="prose max-w-none w-full">{children}</div>
				<div className="mt-8"></div>
				<div className="text-sm text-white-700 dark:text-white-300 ">
					<a
						className="link"
						href={editUrl(frontMatter.slug)}
						target="_blank"
						rel="noopener noreferrer"
					>
						{"Editar en GitHub"}
					</a>
					{` | `}
					<a
						className="link"
						href={mailUrl(frontMatter.slug)}
						target="_blank"
						rel="noopener noreferrer"
					>
						{"Tenés preguntas? Hablemos"}
					</a>
				</div>
			</article>
		</Layout>
	);
}
