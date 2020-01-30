import Head from "next/head";
import Navbar from './Navbar'
import Footer from "./Footer";

export default ({ children, title = 'Marco Richetta - Programador Web' }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="icons/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon/favicon-16x16.png" />
        <link rel="manifest" href="icons/favicon/site.webmanifest" />
      </Head>
      <div id='NextApp' className="flex flex-col justify-between min-h-screen text-gray-300">
        <Navbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}