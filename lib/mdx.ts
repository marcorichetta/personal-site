import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import mdxPrism from 'mdx-prism';
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export async function getFiles(type: string) {
	return fs.readdirSync(path.join(root, "data", type));
}

/**
 * Busca en el directorio `{type}` el archivo mdx con
 * el titulo `{slug}`, lo parsea con gray-matter, lo compila con next-mdx
 * y lo devuelve listo para ser renderizado
 * @param type Directorio donde buscar los archivos
 * @param slug Slug del archivo
 * @returns Contenido del archivo mdx formateado con gray-matter
 */
export async function getFileBySlug(type: string, slug: string) {
	const source = slug
		? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf-8")
		: fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf-8");

	const { data, content } = matter(source);
	const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [
                require('remark-autolink-headings'),
                require('remark-slug'),
                require('remark-code-titles')
            ],
        rehypePlugins: [mdxPrism]
        }
    });

	return {
		mdxSource,
		frontMatter: {
			wordCount: content.split(/\s+/gu).length,
			readingTime: readingTime(content),
			slug: slug || null,
			...data,
		},
	};
}

/**
 * Lee el directorio `/data/{type}` y carga los archivos `.mdx`
 * @param {string} type Directorio de archivos que FrontMatter debe cargar
 */
export async function getAllFilesFrontMatter(type) {
	const files = fs.readdirSync(path.join(root, "data", type));

	return files.reduce((allPosts, postSlug) => {
		const source = fs.readFileSync(path.join(root, "data", type, postSlug), "utf8");

		// Lee el archivo .mdx y lo convierte a JS
		// separando el encabezado y el contenido del archivo
		const { data } = matter(source);

		return [
			{
				...data,
				slug: postSlug.replace(".mdx", ""),
			},
			...allPosts,
		];
	}, []);
}
