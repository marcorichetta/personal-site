import Link from "next/link";
import Image from "next/image";

export interface ILink {
	href: string;
}

const CustomLink = (props: ILink) => {
	const href = props.href;
	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props} />
			</Link>
		);
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
	Image,
	a: CustomLink,
};

export default MDXComponents;