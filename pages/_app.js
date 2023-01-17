import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppContextProvider } from './contexts/appContext'


export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppContextProvider>)
}
