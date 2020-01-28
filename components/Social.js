import React from 'react'
import links from "../social.js"

const Social = () => {

    return (
        <div>
            {links.map(({ name, icon, url }) =>
                <a key={name} href={url} target='_blank'>
                    <img className='inline sm:lg' src={`icons/${icon}.svg`}></img>
                </a>
            )}
        </div>
    )
}

export default Social