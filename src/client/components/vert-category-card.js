import { Box, Flex, Text } from "@chakra-ui/react"
import NextImage from "next/image"

const colors = {
  blue: {
    bg: "facebook.50",
    border: "facebook.200",
  },
  purple: {
    bg: "purple.100",
    border: "purple.200",
  },
  cyan: {
    bg: "cyan.100",
    border: "cyan.200",
  },
  // cyan: "cyan.100",
  // green: "green.100",
  // pink: "pink.100",
  // yellow: "yellow.100",
  // orange: "orange.100",
}

const VertCategoryCard = ({ name, color, image }) => {
  const currentColor = colors[color] || colors.blue

  return (
    <Flex
      flexDirection="column"
      px="4"
      bg={currentColor.bg}
      borderWidth="1px"
      borderColor={currentColor.border}
      rounded="2xl"
      alignItems="center"
    >
      <Box h="6" />
      <Box w="16" h="16" rounded="full" overflow="hidden">
        <NextImage
          src={image}
          width="100%"
          height="100%"
          layout="responsive"
        />
      </Box>
      <Box h="4" />
      <Text fontWeight="bold" minH="12" textAlign="center" lineHeight="130%">
        {name}
      </Text>
      <Box h="1" />
    </Flex>
  )
}

export default VertCategoryCard
