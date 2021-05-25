/**
 * Custom Loader para imágenes cargadas con Next/Image
 * ubicadas localmente. https://nextjs.org/docs/api-reference/next/image#loader
 * @param src Path a la imagen ubicada dentro de /images/
 * @returns Path completo a la imagen
 *
 */
export default function localLoader({ src }) {
	return `/images/${src}`;
}
