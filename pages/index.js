import Layout from "../components/Layout";
import Techs from "../components/Techs";

export default () => {

  return (
    <>
      <Layout>
        <div className='flex flex-col text-center mb-4 justify-center font-bold text-2xl md:text-3xl lg:text-4xl'>
          Hola, me llamo Marco
        <br />
        y soy programador de aplicaciones web 💻 
      </div>

        <h1 className='text-xl md:text-2xl lg:text-3xl'>Sobre mí</h1>
        <section className='flex flex-wrap text-justify mb-4 px-2'>
          <div className='md:w-1/2 px-8'>
            <p>
              Soy del interior de Córdoba, 🇦🇷.
              Me considero muy curioso por entender cómo funcionan las cosas en general, lo que me lleva a aprender nuevas tecnologías.
            </p>
            <br />
            <p>
              Desarrollé algunas aplicaciones REST con frameworks de Python como Flask y Django, con SQlite3 y PostgreSQL como bases de datos.
            </p>
            <p>
              Para el frontend, utilicé templates HTML (Jinja), Javascript con AJAX para añadir funcionalidad extra y WebSockets para consultas en tiempo real.
            </p>
          </div>
          <div className='md:w-1/2 px-8'>
            <p>
              Estoy adentrándome en el ecosistema de React por los beneficios que provee para la creación de UIs, pudiendo
              definir componentes reutilizables y manejar el estado de las aplicaciones de una manera consistente.
            </p>            
            <br />
            <p>
              Mi objetivo principal actualmente es el de familiarizarme con el ciclo completo de desarrollo de una aplicación web, desde el análisis y modelado del sistema, pasando por el desarrollo, implementación, testing y deployment al usuario final. (CI/CD)
            </p>
          </div>
        </section>

        <Techs />        


      </Layout>
    </>
  )
}
