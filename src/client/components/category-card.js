import { Box, Flex, Text } from "@chakra-ui/react"
import NextImage from "next/image"

const colors = {
  blue: "facebook.100",
  purple: "purple.100",
  cyan: "cyan.100",
  green: "green.100",
  pink: "pink.100",
  yellow: "yellow.100",
  orange: "orange.100",
}

const CategoryCard = ({ name, color, image }) => {
  return (
    <Flex px="4" py="4" bg={colors[color]} rounded="2xl" alignItems="center">
      <Box w="12" h="12" rounded="full" overflow="hidden">
        <NextImage
          src={image}
          width="100%"
          height="100%"
          layout="responsive"
        />
      </Box>
      <Box w="4" />
      <Text fontWeight="bold">
        {name}
      </Text>
    </Flex>
  )
}

export default CategoryCard
