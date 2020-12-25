import '../styles/globals.css';
import type { AppProps /*, AppContext */ } from 'next/app';
import initFirebase from '../utils/initFirebase';

initFirebase();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
