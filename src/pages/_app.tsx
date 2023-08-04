import '@/styles/globals.css';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import type { AppProps } from 'next/app';

let theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(242, 104, 24, 1)',
      light: 'rgba(242, 104, 24, 1)',
      // dark: '',
    },
    secondary: {
      main: '#000',
      light: '#939094',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
