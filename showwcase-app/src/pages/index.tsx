import type { NextPage } from "next";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Showwcase</title>
        <meta name="description" content="Showwcase App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        Showcase
      </main>
    </>
  )
}

export default Home;