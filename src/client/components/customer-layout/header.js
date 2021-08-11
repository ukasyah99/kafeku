import { Box, Flex, Link } from "@chakra-ui/react"
import NextImage from "next/image"
import NextLink from "next/link"

const Header = () => {
  return (
    <Box
      w="full"
      px="4"
      py="3"
      borderBottomWidth="1px"
      borderColor="gray.200"
      shadow="md"
    >
      <Flex w="full" maxW="4xl" mx="auto" alignItems="center">
        <NextImage
          src="/assets/logo/kafeku-long.png"
          width="125"
          height="42"
        />
        <Box flex="1" />
        <HeaderLink href="/products">Produk</HeaderLink>
        <Box w="7" />
        <HeaderLink href="/categories">Kategori</HeaderLink>
        <Box w="7" />
        <HeaderLink href="/products">Tentang kami</HeaderLink>
      </Flex>
    </Box>
  )
}

const HeaderLink = ({ children, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link>
        {children}
      </Link>
    </NextLink>
  )
}

export default Header