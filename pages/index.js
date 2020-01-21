import Layout from "../components/Layout";

export default () => (
  <>
    <Layout>
      <div>
        <h1 className='pt-16 '>
          Hola, soy Marco, programador de aplicaciones web
        </h1>
          Me considero muy curioso por entender cómo funcionan las cosas en general, lo que me lleva a aprender nuevas tecnologías.
          Actualmente estoy adentrándome en el ecosistema de React por los beneficios que provee para la creación de UIs,
          definiendo componentes reutilizables y proveyendo herramientas para manejar el estado de las aplicaciones de manera consistente.
      </div>

  <h3>Algunas de las tecnologías que estoy usando son:</h3>
        <ul>
          <li>Reactjs</li>
          <li>Redux</li>
          <li>GraphQL</li>
          <li>Nextjs</li>
          <li>Typescript</li>
        </ul>

        <section>
          Anteriormente desarrollé algunas aplicaciones REST con frameworks de Python como Flask y Django, con SQlite3 y PostgreSQL como bases de datos.
          Por el lado del frontend, utilicé templates (Jinja) y Javascript con AJAX para añadir funcionalidad extra y WebSockets para consultas en tiempo real.
          Mi meta principal actualmente es la de familiarizarme con el ciclo completo de desarrollo de una aplicación web, desde el análisis y modelado del sistema, pasando por el desarrollo, implementación, testing y deployment al usuario final. (CI/CD)
  </section>
    </Layout>
  </>
)
