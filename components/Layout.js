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