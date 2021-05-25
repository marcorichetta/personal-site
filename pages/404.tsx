import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import localLoader from "@/lib/localLoader";

export default function NotFound() {
	return (
		<Layout title="404 – Marco Richetta">
			<section>
				<div className="flex flex-col items-center justify-center">
					<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black">
						<a
							href="https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol"
							target="_blank"
							rel="noopener noreferrer"
							className="link2"
						>
							418 - I'm a Teapot
						</a>
					</h1>
					<Image
						title="The HTCPCP server is a teapot; the resulting entity body may be short and stout"
						alt="Foto de una tetera con una placa Raspberry Pi dentro."
						width={800}
						height={535}
						src="teapot.jpg"
						loader={localLoader}
						className="rounded-md"
					/>
					<div className="flex flex-col justify-center items-center lg:w-2/3 w-full mt-6">
						<p className="text-white mb-6 font-medium">
							🫖 ¡Felicitaciones! Encontraste la tetera{" "}
							{Math.floor(Math.random() * 100000000)} 🫖
						</p>
						<Link href="/">
							<a className="inline-flex text-gray-700 bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
								¡Reclama tu premio!
							</a>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
}
