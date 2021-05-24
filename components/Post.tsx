import { IFrontMatter } from "interfaces";
import Link from "next/link";

const Post = ({ title, summary, slug, createdAt, tags }: IFrontMatter) => {
	return (
		<div className="py-8 flex flex-wrap md:flex-nowrap">
			<div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-start">
				<div>
					{tags.map((t) => (
						<span className="mr-2 py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-bold tracking-wider">
							{t.toUpperCase()}
						</span>
					))}
				</div>
				<span className="mt-1 text-white">{createdAt}</span>
			</div>
			<Link href={`/til/${slug}`}>
				<a className="w-full">
					<div className="md:flex-grow">
						<h2 className="text-2xl font-medium text-white title-font mb-2">{title}</h2>
						<p className="leading-relaxed">{summary}</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Post;
