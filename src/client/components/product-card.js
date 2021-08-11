import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import NextImage from "next/image"
import NextLink from "next/link"

const ProductCard = () => {
  return (
    <LinkBox
      borderWidth="1px"
      borderColor="gray.300"
      shadow="sm"
      p="5"
      rounded="2xl"
    >
      <Box w="32" h="32" rounded="2xl" overflow="hidden" mx="auto">
        <NextImage
          src="/assets/kategori/minuman.jpg"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </Box>
      <Box h="4" />
      <NextLink href="/products/product-slug-goes-here" passHref>
        <LinkOverlay>
          <Text fontWeight="extrabold">
            Broaler Chicken
          </Text>
        </LinkOverlay>
      </NextLink>
      <Text color="gray.600" fontSize="sm" fontWeight="bold">
        Rp 10.000
      </Text>
    </LinkBox>
  )
}

export default ProductCard
