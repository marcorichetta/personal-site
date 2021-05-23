# My personal site

Sitio personal hecho con [Next.js](https://nextjs.org/) y [Tailwind CSS](https://tailwindcss.com).

## Resumen

-   `pages/` - Home

    -   `index.tsx` - Home

    -   `_app.tsx` - Inyecta funcionalidad compartida por todas las páginas del sitio. En mi caso la uso para cargar los `index.css`. [Custom App - Nextjs](https://nextjs.org/docs/advanced-features/custom-app)

    -   `_document.tsx` - Permite modificar HTML generado por Next en el server. Yo lo uso específicamente para el `<Head />` del sitio. [Custom Document - Nextjs](https://nextjs.org/docs/advanced-features/custom-document)

    -   `pages/blog/*` - Páginas del blog que cargan el contenido de `data/blog/` con [MDX](https://github.com/mdx-js/mdx).

    -   `*` - Demás páginas estáticas

## Hacé el tuyo

Podés encontrar las instrucciones para comenzar un proyecto similar [acá](https://github.com/zeit/next.js/tree/canary/examples/with-tailwindcss)
