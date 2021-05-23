import { IPost } from "interfaces";
import Link from "next/link";

const Post = ({ title, summary, slug, createdAt, tags }: IPost) => {
	return (
		<Link href={`/til/${slug}`}>
			<a className="w-full">
				<div className="mb-8 w-full">
					<div className="flex flex-col md:flex-row justify-between">
						<p className="md:text-xl font-medium mr-2">{tags}</p>

						<h4 className="text-lg md:text-xl font-medium mb-2 w-full">{title}</h4>
						<p className="text-gray-300 text-left md:text-right w-32 mb-4 md:mb-0">
							{createdAt}
						</p>
					</div>
					<p className="text-gray-600 dark:text-gray-400">{summary}</p>
				</div>
			</a>
		</Link>
	);
};

export default Post;
