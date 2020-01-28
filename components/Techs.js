import React from 'react'
import techs from "../techs.js"

const Techs = () => {

    return (
        <>
            <h1 className='text-xl md:text-2xl lg:text-3xl'>Tecnologías que uso</h1>
            <section className='flex flex-wrap text-justify mb-4'>
                {techs.map(tech =>
                    <div key={tech.title} className='w-1/3 px-8'>
                        <h3 className='text-lg md:text-xl lg:text-2xl mb-2'>{tech.title}</h3>
                        <ul>
                            {tech.data.map(t =>
                                <li key={t.name}>
                                    <a className='no-underline hover:underline text-blue-500' href={t.url}>
                                        {t.name}
                                    </a>
                                    <img className='inline h-6 pl-2' src={`skills/${t.icon}`} ></img>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </section>
        </>
    )
}

export default Techs