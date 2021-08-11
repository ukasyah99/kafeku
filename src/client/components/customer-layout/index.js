import { Box, Flex } from "@chakra-ui/react"
import Footer from "./footer"
import Header from "./header"

const CustomerLayout = ({
  children,
}) => {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header />
      <Box h="3" />
      <Box
        w="full"
        px="4"
        py="7"
        flex="1"
      >
        <Box w="full" maxW="4xl" mx="auto">
          {children}
        </Box>
      </Box>
      <Box h="10" />
      <Footer />
    </Flex>
  )
}

export default CustomerLayout
