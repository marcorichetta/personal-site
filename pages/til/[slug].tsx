import { MDXRemote } from "next-mdx-remote";

import { getFiles, getFileBySlug } from "../../lib/mdx";
import MDXComponents from "../../components/MDXComponents";
import PostLayout from "@/layouts/Post";

export default function Blog({ mdxSource, frontMatter }) {
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

export async function getStaticPaths() {
	const posts = await getFiles("til");

	return {
		paths: posts.map((p) => ({
			params: {
				slug: p.replace(/\.mdx/, ""),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = await getFileBySlug("til", params.slug);

	return { props: post };
}
