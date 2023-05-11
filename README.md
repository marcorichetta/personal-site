# My personal site

Sitio personal hecho con [Next.js](https://nextjs.org/) y [Tailwind CSS](https://tailwindcss.com).

## Resumen

-   `data/` - Mi propio CDN con disponibilidad de 99.9999999998%
-   `locales/` - Traducciones de contenido estático
-   `lib/` - Utils
-   `public/` - Imágenes, íconos, fuente y CV.
-   `pages/` - Home

    -   `index.tsx` - Home

    -   `_app.tsx` - Inyecta funcionalidad compartida por todas las páginas del sitio. En mi caso la uso para cargar los `index.css`. [Custom App - Nextjs](https://nextjs.org/docs/advanced-features/custom-app)

    -   `_document.tsx` - Permite modificar HTML generado por Next en el server. Yo lo uso específicamente para el `<Head />` del sitio. [Custom Document - Nextjs](https://nextjs.org/docs/advanced-features/custom-document)

    -   `pages/til/*` - Páginas que cargan el contenido de `data/til/` con [MDX](https://github.com/mdx-js/mdx).

    -   `*` - Demás páginas estáticas

## Setup

```shell
# Instalar dependencias
yarn install

# Dev server
yarn dev

# Prod server
yarn build
yarn start

# Actualizar next / react
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```