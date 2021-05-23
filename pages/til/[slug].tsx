import { MDXRemote } from "next-mdx-remote";

import { getFiles, getFileBySlug } from "@/lib/mdx";
import MDXComponents from "../../components/MDXComponents";
import PostLayout from "@/layouts/Post";
import { GetStaticPaths } from "next";

export default function Post({ mdxSource, frontMatter }) {
	return (
		<PostLayout frontMatter={frontMatter}>
			<MDXRemote
				{...mdxSource}
				components={{
					...MDXComponents,
				}}
			/>
		</PostLayout>
	);
}

/**
 * Genera los paths para cada archivo mdx usando su slug
 */
export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getFiles("til");

	return {
		paths: posts.map((p) => ({
			params: {
				slug: p.replace(/\.mdx/, ""),
			},
		})),
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	// Extrae el slug de los query params para buscar el archivo mdx
	const post = await getFileBySlug("til", params.slug);

	return { props: post };
};
