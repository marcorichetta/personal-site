import Layout from "../components/Layout";
import techs from "../techs.json"

export default () => {

  return (
    <>
      <Layout>
        <div className='flex flex-col text-center mb-4 justify-center font-bold text-2xl md:text-3xl lg:text-4xl'>
          Hola, soy Marco
        <br />
          Programador de aplicaciones web 💻
      </div>

        <section className='text-justify mb-4'>
          <h1 className='text-xl md:text-2xl lg:text-3xl'>Sobre mí</h1>
          Soy del interior de Córdoba, Argentina.
          <br />
          Me considero muy curioso por entender cómo funcionan las cosas en general, lo que me lleva a aprender nuevas tecnologías.
          <br />
          Actualmente estoy adentrándome en el ecosistema de React por los beneficios que provee para la creación de UIs, pudiendo
          definir componentes reutilizables y manejar el estado de las aplicaciones de una manera consistente.
      </section>

        <section className='text-justify mb-4'>
          <h1 className='text-xl md:text-2xl lg:text-3xl'>Tecnologías</h1>
          <ul>
            {techs.frontend.map(t =>
              <li key='t.name' className='flex flex-row'>
                <a href={t.url}>
                  {t.name}
                </a>
                <img className='inline h-6 pl-2' src={`skills/${t.icon}`} ></img>
              </li>
            )}
          </ul>
        </section>

        <section>
          Anteriormente desarrollé algunas aplicaciones REST con frameworks de Python como Flask y Django, con SQlite3 y PostgreSQL como bases de datos.
          Por el lado del frontend, utilicé templates (Jinja) y Javascript con AJAX para añadir funcionalidad extra y WebSockets para consultas en tiempo real.
          Mi meta principal actualmente es la de familiarizarme con el ciclo completo de desarrollo de una aplicación web, desde el análisis y modelado del sistema, pasando por el desarrollo, implementación, testing y deployment al usuario final. (CI/CD)
  </section>
      </Layout>
    </>
  )
}
