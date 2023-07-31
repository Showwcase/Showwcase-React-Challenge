import Head from "next/head";
import LayoutStyle from 'src/components/Layout/Layout.styled';
import Navbar from 'src/components/Layout/Navbar';
import Footer from 'src/components/Layout/Footer';

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

      <LayoutStyle>
        <Navbar />

        <main className="main">
          {children}
        </main>
        
        <Footer />
      </LayoutStyle>
    </>
  )
}
