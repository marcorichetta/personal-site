import Link from "next/link";
import Image from "next/image";

export interface ILink {
	href: string;
	children: React.ReactNode;
}

const CustomLink = (props: ILink) => {
	const href = props.href;
	const isInternalLink = href && href.startsWith("/");
	const isHeaderLink = href && href.startsWith("#");

	if (isHeaderLink) {
		return <a {...props} />;
	}

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
