import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalContextProvider } from 'src/context/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      {<Component {...pageProps} />}
    </GlobalContextProvider>
  )
}
