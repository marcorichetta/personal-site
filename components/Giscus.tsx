import { useEffect } from "react";

/**
 * Componente que usa Github como provider de comentarios mediante Discussions del repo
 * @returns JSX.Element
 */
export default function Giscus(): JSX.Element {
	useEffect(() => {
		const script = document.createElement("script");

		const attributes = {
			src: "https://giscus.app/client.js",
			id: "giscus-script",
			"data-repo": "marcorichetta/personal-site",
			"data-repo-id": "MDEwOlJlcG9zaXRvcnkyMzcxMDg0OTk=",
			"data-category-id": "MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyOTUyMTA5",
			"data-mapping": "pathname",
			"data-reactions-enabled": "1",
			"data-emit-metadata": "0",
			"data-theme": "dark_dimmed",
			crossOrigin: "anonymous",
			async: "",
		};

		Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
		document.body.appendChild(script);

		return () => {
			const existingScript = document.body.querySelector("#giscus-script");
			if (existingScript) document.body.removeChild(existingScript);
		};
	}, []);

	return (
		<>
			<div className="giscus" />
		</>
	);
}
