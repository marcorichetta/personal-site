import CustomLink from "@/components/CustomLink";
import Layout from "@/components/Layout";
import Quote from "@/components/Quote";
import useLocale from "@/lib/hooks";
import Link from "next/link";

const About = () => {
	const about = useLocale().about;

	return (
		<Layout title="Sobre mi | Marco Richetta">
			<div className="max-w-screen-lg mx-auto">
				<section className="mb-4 px-4 text-base lg:text-lg">
					<h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
						{about.title}
					</h1>
					<div className="leading-relaxed">
						<p className="mb-4">{about.p1}</p>
						<p className="mb-4">
							{about.p2[0]}{" "}
							<Link href="/projects">
								<a className="link">{about.p2[1]}</a>
							</Link>{" "}
							{about.p2[2]} {about.p2[3]}
						</p>
						<p className="mb-4">{about.p3}</p>
						<h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
							{about.contrib.title}
						</h2>
						<p className="mb-2">{about.contrib.p1}</p>
						<ul className="list-disc list-inside mb-4">
							<li>
								<CustomLink
									text={about.contrib.links.link1}
									href="https://github.com/python/python-docs-es/commits?author=marcorichetta"
								/>
							</li>
							<li>
								<CustomLink
									text={about.contrib.links.link2}
									href="https://forum.djangoproject.com/u/marcorichetta/summary"
								/>
							</li>
							<li>
								<CustomLink
									text="Django"
									href="https://github.com/django/django/pull/13534"
								/>{" "}
								{about.contrib.links.link3}
							</li>
						</ul>
						<h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">
							{about.interests.title}
						</h2>
						<ul className="list-disc list-inside mb-4">
							{about.interests.list.map((i) => (
								<li key={i}>{i}</li>
							))}
						</ul>

						<Quote quote={about.quote} />
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default About;
