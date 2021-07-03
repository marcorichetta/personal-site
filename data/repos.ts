export default [
	{
		name: "Book Reviews",
		course: {
			name: "CS50",
			url: "https://courses.edx.org/courses/course-v1:HarvardX+CS50+X/course/",
		},
		date: "Dic 2018",
		url: "https://book-reviews-cs50-project1.herokuapp.com",
		source: "https://github.com/marcorichetta/cs50w-project1",
		imgSource: "projects/books50.jpg",
		credentials: {
			user: "prueba",
			pass: "prueba",
		},
		description:
			"La aplicación permite registrarse como usuario, buscar un libro entre los 5000 cargados en la \
            base de datos y guardar una reseña sobre el mismo. \
			Se conecta con la API de Goodreads para traer información sobre el libro seleccionado.",
        enDescription:
			"The application allows you to register as a user, search for a book among the 5000 loaded in the \
            database and save a review about it. \
            It connects to the Goodreads API to bring information about the selected book.",
		tags: ["python", "flask", "heroku"],
    },
    
    {
		name: "Sitio Personal",
		date: "Feb 2020",
		url: null,
		source: "https://github.com/marcorichetta/personal-site",
		imgSource: "projects/personal-site.jpg",
		description:
			"El código fuente de este sitio. Decidí probar Nextjs como framework para \
			proyectos con React junto a TailwindCSS.",
        enDescription:
			"The source code for this site. I decided to try Nextjs as a framework for \
			projects with React together with TailwindCSS.",
		tags: ["react", "nextjs", "tailwindcss"],
	},
    {
		name: "Enredarte",
		date: "Dic 2020",
		url: null,
		source: "https://github.com/marcorichetta/enredarte",
		imgSource: "v1613290710/projects/enredarte.jpg",
		description:
			"Proyecto realizado como parte de mi proyecto final para la carrera de Analista de Sistemas. \
            Está lejos de ser productivo pero sin dudas me sirvió para poner en práctica conocimientos de \
            Django, diseño de base de datos y Docker como ambiente de desarrollo.",
        enDescription:
			"Final project for my Systems Analyst degree. \
            It is far from being productive but it certainly helped me to put into practice most \
            of the knowledge I have of Django, database design and Docker as a development environment.",
		tags: ["python", "django", "pytest", "docker"],
	},
	{
		name: "FinanzUP",
		date: "Nov 2018",
		url: "https://finanzup.herokuapp.com/",
		source: "https://github.com/marcorichetta/FinanzUP",
		imgSource: "projects/finanzup.jpg",
		description:
			"Calculadora financiera para plazos fijos y préstamos. Permite guardar clientes y \
			relacionarlos con los préstamos o plazos fijos solicitados. \
			Uno de mis primeros proyectos hechos con HTML, CSS y Javascript puro.",
        enDescription: "Financial calculator for fixed terms and loans. Allows you to save clients and \
			and match them with the requested loans or fixed terms. \
			One of my first projects made with HTML, CSS and pure Javascript.",
		tags: ["bootstrap", "flask", "javascript", "python"],
	},
    {
		name: "React-Redux Blog",
		course: {
			name: "Fullstack Open",
			url: "https://fullstackopen.com/en/",
		},
		date: "Sep - Dic 2019",
		url: "https://part4-blog-backend.herokuapp.com/",
		source: "https://github.com/marcorichetta/part7-blog-frontend-reloaded",
		imgSource: "projects/part7-blog.jpg",
		credentials: {
			user: "rich",
			pass: "rich",
		},
		description:
			"Esta app permite crear, comentar y eliminar posts simples como también dar likes. \
            El frontend está hecho con Semantic UI; el estado se maneja con Redux y el routing con React-Router. \
            También contiene algunos tests E2E con Cypress.",
        enDescription:
			"This app allows you to create, comment and delete simple posts as well as give likes. \
            The frontend is made with Semantic UI; state is handled with Redux and routing with React-Router. \
            It also contains some E2E tests with Cypress.",
		tags: ["react", "redux", "semantic-ui", "cypress"],
	},
	{
		name: "React-GraphQL Library",
		course: {
			name: "Fullstack Open",
			url: "https://fullstackopen.com/en/",
		},
		date: "Ene 2020",
		url: "https://part8-frontend.now.sh/",
		source: "https://github.com/marcorichetta/part8-frontend",
		imgSource: "projects/react-graphql.jpg",
		credentials: {
			user: "Marco",
			pass: "secret",
		},
		description:
			"Aplicación que simula una biblioteca muy simple. \
			Permite autenticarse y cargar libros, categorizarlos y filtrarlos por género. \
			La idea era interiorizarme con los conceptos de GraphQL.",
        enDescription:
			"Application that simulates a very simple library. \
			Allows you to authenticate and load books, categorize them and filter them by genre. \
			The idea was to get acquainted with GraphQL concepts.",
		tags: ["react", "apollo-graphql"],
	},
];
