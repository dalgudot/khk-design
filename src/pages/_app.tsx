import GlobalStyle from '../styles/globals';
import GlobalColors, { darkTheme, lightTheme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import type { AppProps /*, AppContext */ } from 'next/app';
import initFirebase from '../utils/initFirebase';

initFirebase();

export default function App({ Component, pageProps }: AppProps) {
  const mode = darkTheme;

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyle />
      <GlobalColors />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
