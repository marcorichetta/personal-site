export default [
	{
		name: "Book Reviews - CS50",
		url: "https://book-reviews-cs50-project1.herokuapp.com",
		source: "https://github.com/marcorichetta/cs50w-project1",
		imgSource: "books50",
		description:
			"La aplicación permite registrarse como usuario, buscar un libro entre los 5000 cargados en la \
            base de datos y guardar una reseña sobre el mismo. \
			Se conecta con la API de Goodreads para traer información sobre el libro seleccionado. \
			Se puede ingresar con user: prueba - pass: prueba.",
		tags: ["python", "flask", "heroku"]
	},
	{
		name: "React-Redux Blog - Fullstack Open",
		url: "https://part4-blog-backend.herokuapp.com/",
		source: "https://github.com/marcorichetta/part7-blog-frontend-reloaded",
		imgSource: "part7-blog",
		description:
			"Esta app permite crear, comentar y eliminar posts simples como también dar likes. \
            El frontend está hecho con Semantic UI; se maneja el estado con Redux y el routing con React-Router \
            y también contiene algunos tests E2E con Cypress ",
		tags: ["react", "redux", "semantic-ui", "cypress"]
	},
	{
		name: "FinanzUP - Calculadora Financiera",
		url: "https://finanzup.herokuapp.com/",
		source: "https://github.com/marcorichetta/FinanzUP",
		imgSource: "finanzup",
		description:
			"Calculadora financiera para plazos fijos y préstamos. Permite guardar clientes y \
			relacionarlos con los préstamos o plazos fijos solicitados. \
			Uno de mis primeros proyectos hechos con HTML, CSS y Javascript puro.",
		tags: ["bootstrap", "flask", "javascript", "python"]
	},
	{
		name: "React-GraphQL Library - Fullstack Open",
		url: "https://part8-frontend.now.sh/",
		source: "https://github.com/marcorichetta/part8-frontend",
		imgSource: "react-graphql",
		description:
			"Proyecto de una simple biblioteca para interiorizarme con los conceptos de GraphQL. \
			La aplicación permite autenticarse y cargar libros, categorizarlos y filtrarlos por género.",
		tags: ["react", "graphql", "apollo-graphql"]
	},
	{
		name: "Personal Site",
		url: "#",
		source: "https://github.com/marcorichetta/personal-site",
		imgSource: "personal-site",
		description:
			"El código fuente de este sitio. Decidí probar Nextjs como framework para proyectos con React. \
			También decidí probar TailwindCSS, viendo las buenas impresiones de varios usuarios, y la verdad \
			es que no me defraudó.",
		tags: ["react", "nextjs", "tailwindcss"]
	}
];
