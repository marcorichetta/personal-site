import Head from "next/head";
import Navbar from './Navbar'
import Footer from "./Footer";

export default ({ children, title = 'Marco Richetta - Programador' }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className="flex flex-col justify-between min-h-screen"
        style={{
          backgroundImage: `url("images/wallpaper2.jpg")`
        }}>
        <Navbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}