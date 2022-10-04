import React, { useRef } from "react"
import '../styles/globals.css'
require('typeface-work-sans')
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());

  const theme = createTheme({
    typography: {
      fontFamily: "Work Sans",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient.current}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
