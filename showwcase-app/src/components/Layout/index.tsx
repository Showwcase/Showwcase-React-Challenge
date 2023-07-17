import Head from "next/head";
import styles from 'src/styles/Home.module.css'
import Navbar from 'src/components/Layout/Navbar'
import Footer from 'src/components/Layout/Footer'

interface Props {
  children: React.ReactNode;
  pageTitle: string;
}

export default function Layout({pageTitle, children}: Props) {
  return (
    <>
      <Head>
        <title>{`${pageTitle} | Showwcase`}</title>
        <meta name="description" content="Showwcase App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${styles.container}`}>
        <Navbar />

        <main className={`${styles.main}`}>
          {children}
        </main>
        
        <Footer />
      </div>

    </>
  )
}
