import { IPost } from "interfaces";
import Layout from "@/components/Layout";
import Giscus from "@/components/Giscus";

const editUrl = (slug: string) =>
	`https://github.com/marcorichetta/personal-site/edit/master/data/til/${slug}.mdx`;

/**
 * Layout de la página de un post individual
 * @param  children     Contenido del post
 * @param  frontMatter  Contiene props del archivo MDX
 */
export default function PostLayout({ children, frontMatter }: IPost) {
	const createdAt = new Date(frontMatter.createdAt);

	return (
		<Layout
			title={`${frontMatter.title} – Marco Richetta`}
			image={`https://marcorichetta.io${frontMatter.image}`}
			date={createdAt.toISOString()}
		>
			<article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white">
					{frontMatter.title}
				</h1>
				<div className="flex flex-row justify-between items-start w-full mt-2">
					<div className="flex items-center">
						<p className="text-base font-semibold text-gray-300 min-w-32 mt-0">
							{frontMatter.readingTime.text}
						</p>
					</div>
					<p className="text-base font-semibold text-gray-300">
						{/* Formateo de fecha */}
						{Intl.DateTimeFormat("es-AR", {
							day: "2-digit",
							month: "long",
							year: "numeric",
						}).format(new Date(createdAt))}
					</p>
				</div>
				<div className="prose max-w-none w-full">{children}</div>
				<div className="mt-8"></div>
				<div className="text-sm text-white-700">
					<a
						className="link"
						href={editUrl(frontMatter.slug)}
						target="_blank"
						rel="noopener noreferrer"
					>
						{"Editar en GitHub"}
					</a>
				</div>
				<Giscus />
			</article>
		</Layout>
	);
}
