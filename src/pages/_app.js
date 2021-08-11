import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/nunito-sans/400.css"
import "@fontsource/nunito-sans/600.css"
import "@fontsource/nunito-sans/700.css"
import "@fontsource/nunito-sans/800.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "src/client/styles/globals.css"
import theme from "src/client/theme"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
