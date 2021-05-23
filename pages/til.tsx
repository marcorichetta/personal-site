import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getAllFilesFrontMatter } from "@/lib/mdx";

const TIL = ({ posts }) => (
	<Layout title="Blog | Marco Richetta">
		<section className="text-center mb-4">
			<h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">TIL</h1>
			<p className="text-center mx-auto max-w-lg">Today I Learned</p>
		</section>
		<main>
			{posts.map((frontMatter) => (
				<>
					<Post key={frontMatter.title} {...frontMatter} />
				</>
			))}
		</main>
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
