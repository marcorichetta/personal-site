import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { IFrontMatter } from "interfaces";
import { useState } from "react";

const TIL = ({ posts }) => {
	const [searchValue, setSearchValue] = useState("");

	const filteredTILPosts = posts
		.sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))
		.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<Layout title="One day I Learned | Marco Richetta" description="TIL | Today I Learned.">
			<section className="text-center mb-6">
				<h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
					<abbr title="Today I Learned">TIL</abbr>
				</h1>
				<h2 className="text-xl mx-auto max-w-lg font-semibold italic mb-2">
					One day I Learned
				</h2>
				<span>Cosas que aprendí a través del tiempo</span>
				<br />
				<span>
					Inspirado por{" "}
					<a
						href="https://til.simonwillison.net/"
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						Simon Willison
					</a>
				</span>
				<br />
				<span>
					¿Por qué hago esto? 👉&nbsp;
					<a
						href="https://www.swyx.io/learn-in-public/"
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						Aprendiendo en público
					</a>
				</span>
			</section>
			<section className="overflow-hidden">
				<input
					aria-label="Buscá artículos"
					type="text"
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Buscá artículos"
					className="px-4 py-2 border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 block w-full rounded-md bg-white text-gray-900"
				/>
				<div className="container px-5 py-12 mx-auto">
					<div className="-my-8 divide-y-2 divide-gray-400">
						{!filteredTILPosts.length && (
							<h3 className="text-white text-xl mb-4">
								No hay posts que coincidan con la búsqueda.
							</h3>
						)}
						{filteredTILPosts.map((frontMatter: IFrontMatter) => (
							<Post key={frontMatter.title} {...frontMatter} />
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default TIL;

/**
 * Cuando se ingresa a la página `/til`
 * Nextjs busca todos los posts de forma async
 * y los pasa como `props` para que `<TIL />` los pueda mostrar
 */
export const getStaticProps = async () => {
	const posts = await getAllFilesFrontMatter("til");

	return {
		props: { posts },
	};
};
