import { Box, HStack, Stack, Text } from "@chakra-ui/react"
import NextImage from "next/image"

const Footer = () => {
  return (
    <>
      <Box w="full" px="4" py="3">
        <HStack w="full" maxW="4xl" mx="auto" alignItems="flex-start" spacing="10" py="3">
          <Box w="72">
            <NextImage
              src="/assets/logo/kafeku-long.png"
              width="125"
              height="42"
            />
            <Box h="2" />
            <Text color="gray.600" fontSize="sm" fontWeight="semibold">
              Merasakan nikmatnya menu kafe sekarang ga pake ribet.
              Kami sudah terdaftar di beberapa jasa pengantaran makanan online.
            </Text>
          </Box>
          <Stack flex="1">
            <Text color="gray.900" fontSize="md" fontWeight="bold">
              Perusahaan
            </Text>
            <Text color="gray.600" fontSize="md" fontWeight="semibold">
              Tentang kami
            </Text>
            <Text color="gray.600" fontSize="md" fontWeight="semibold">
              Karir
            </Text>
            <Text color="gray.600" fontSize="md" fontWeight="semibold">
              Kebijakan privasi
            </Text>
          </Stack>
          <Stack flex="1">
            <Text color="gray.900" fontSize="md" fontWeight="bold">
              Bantuan
            </Text>
            <Text color="gray.600" fontSize="md" fontWeight="semibold">
              Hubungi kami
            </Text>
            <Text color="gray.600" fontSize="md" fontWeight="semibold">
              FAQ
            </Text>
          </Stack>
          <Stack flex="1">
            <Text color="gray.900" fontSize="md" fontWeight="bold">
              Lainnya
            </Text>
            <Text color="gray.600" fontSize="md" fontWeight="semibold">
              Afiliasi
            </Text>
            <Text color="gray.600" fontSize="md" fontWeight="semibold">
              Langganan
            </Text>
            <Text color="gray.600" fontSize="md" fontWeight="semibold">
              Blog
            </Text>
          </Stack>
        </HStack>
      </Box>
      <HStack justifyContent="center" p="5">
        <Text color="gray.600" fontSize="sm" fontWeight="semibold">
          2018 - 2021 &copy; Kafeku
        </Text>
      </HStack>
    </>
  )
}

export default Footer
