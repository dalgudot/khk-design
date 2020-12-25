import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalColors = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.gray1};
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: ${({ theme }) => theme.gray1};
}
`;

export default GlobalColors;

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    gray1: string;
  }
}

export const darkTheme: DefaultTheme = {
  backgroundColor: '#212121',
  gray1: '#8d8d8d',
};

export const lightTheme: DefaultTheme = {
  backgroundColor: '#212121',
  gray1: '#8d8d8d',
};
