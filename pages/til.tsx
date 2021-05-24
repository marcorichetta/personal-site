import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { IFrontMatter } from "interfaces";

const TIL = ({ posts }) => (
	<Layout title="Someday I Learned | Marco Richetta">
		<section className="text-center mb-4">
			<h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">TIL</h1>
			<h2 className="text-xl mx-auto max-w-lg">Today I Learned</h2>
		</section>
		<section className="overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="-my-8 divide-y-2 divide-gray-400">
					{posts.map((frontMatter: IFrontMatter) => (
						<>
							<Post key={frontMatter.title} {...frontMatter} />
						</>
					))}
				</div>
			</div>
		</section>
	</Layout>
);

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
