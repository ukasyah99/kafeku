import { Box, Button, Checkbox, CheckboxGroup, CircularProgress, Divider, Flex, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { ArrowLeftIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "@heroicons/react/outline"
import NextImage from "next/image"
import { useEffect, useState } from "react"
import CustomerLayout from "src/client/components/customer-layout"
import sleep from "src/client/lib/sleep"
// import ProductCard from "src/client/components/product-card"

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchInitialData = async () => {
      await sleep(1000)
      setIsLoading(false)
    }
    fetchInitialData()
  }, [])

  return (
    <>
      {isLoading && (
        <Flex justifyContent="center" py="20">
          <CircularProgress isIndeterminate size="10" color="yellow.500" />
        </Flex>
      )}
      {!isLoading && (
        <>
          <HStack>
            <Flex alignItems="center" color="gray.600">
              <Icon as={ArrowLeftIcon} w="4" h="4" />
              <Box w="2.5" />
              <Text>
                Semua produk
              </Text>
            </Flex>
          </HStack>
          <Box h="7" />
          <HStack alignItems="flex-start" spacing="7">
            <Box w="96">
              <Box w="96" h="56" rounded="xl" overflow="hidden">
                <NextImage
                  src="/assets/produk/baso-goreng.jpg"
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
              </Box>
              <Box h="5" />
              <Text color="gray.600" fontSize="md" fontWeight="bold" textAlign="center">
                Pesan melalui:
              </Text>
              <Box h="3" />
              <SimpleGrid columns="2" gap="3">
                <Button colorScheme="green">
                  GoFood
                </Button>
                <Button colorScheme="orange">
                  Shopee Food
                </Button>
              </SimpleGrid>
            </Box>
            <Box flex="1">
              <Text fontSize="xl" fontWeight="extrabold">
                Broaler Chicken
              </Text>
              <Text color="gray.500" fontSize="sm" fontWeight="bold">
                Makanan, Sarapan
              </Text>
              <Box h="5" />
              <Text fontSize="lg" fontWeight="extrabold">
                Rp 12.500
              </Text>
              <Box h="5" />
              <Text color="gray.600" fontSize="md" fontWeight="semibold">
                Lorem ipsum sit amet dolor, it jitto buchare nero orega miu shirx.
                Lorem ipsum sit amet dolor, it jitto buchare nero orega miu shirx.
                Lorem ipsum sit amet dolor, it jitto buchare nero orega miu shirx.
                Lorem ipsum sit amet dolor, it jitto buchare nero orega miu shirx.
              </Text>
            </Box>
          </HStack>
        </>
      )}
    </>
  )
}

const getLayout = (page) => (
  <CustomerLayout>
    {page}
  </CustomerLayout>
)

ProductDetail.getLayout = getLayout

export default ProductDetail
